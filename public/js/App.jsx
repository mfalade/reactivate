import React from 'react';
import Body  from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      currentUser: "Mayowa Falade",
      inputValue: 'Enter your heart desires here',
      names: [
        'Kenny', 'kevin', 'Seyi', 'Dami',
        'Mbithe', 'Jacklin', 'Thomas'
      ],
      data: [
        {id: 1, name: 'Mayor', age: 27},
        {id: 2, name: 'Toyosi', age: 25},
        {id: 3, name: 'Temitope', age: 18},
        {id: 4, name: 'Oriel', age: 22},
        {id: 5, name: 'Victor', age: 28},
        {id: 6, name: 'Jibola', age: 28}
      ]
    }
  }
  handleClick() {
    const stateData = this.state.data;
    stateData.push({
      id: stateData.length + 1,
      name: this.state.names[Math.floor(Math.random() * 7)],
      age: Math.floor(Math.random() * 30)
    });
    this.setState({data: stateData});
  }
  handleOnChange(e) {
    this.setState({inputValue: e.target.value});
  }
  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Body
          data={ this.state.data }
          handleClick={ this.handleClick }
          inputValue={ this.state.inputValue }
          handleOnChange={ this.handleOnChange }
        />
        <Footer />
      </div>
    );
  }
}