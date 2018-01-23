import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Text extends Component {
  render() {
    const { label, text, handleChange } = this.props;
    return (
      <div className="wrap" label={label} handleChange={handleChange}>
        {text}
      </div>
    );
  }
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};

export default Text;
