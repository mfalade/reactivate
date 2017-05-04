import React from 'react';

export default class RandomUserButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button onClick={handleClick}>Add random user.</button>
      </div>
    );
  }
}