import React from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
  return (
    <div className="result">
      <h2> {props.quizResult} </h2>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};