import React from 'react';
import InputForm from './components/InputForm.jsx';
import RandomUserButton from './components/RandomUserButton.jsx';


class Body extends React.Component {
  render() {
    const { data, handleClick, handleOnChange, inputValue } = this.props;
    return (
      <div>
        <ul>
          { data.map((item, i) => {
            return <li key={ `item_${item.id}` }>{ item.id }: { item.name } is { item.age } years old.</li>
          }) }
        </ul>
        <br />
        <RandomUserButton handleClick={ handleClick }/>
        <InputForm handleOnChange={ handleOnChange } inputValue={ inputValue } />
      </div>
    );
  }
} 

export default Body;