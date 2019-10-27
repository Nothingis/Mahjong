import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

export default function Question(props) {
  function renderBasicQuiz() {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }

  function renderHand(tile) {
    const index = tile.indexOf("!");
    if (index === -1) return (<Tile env={false} tile={tile} form="" />);
    else return (<Tile env={false} tile={tile.substring(0, index)} form={tile.substring(index + 1)} />);
  }

  function renderScoringQuiz() {
    const answer = props.content;
    const array = answer.split(' ');
    const envArray = array.slice(0, 5);
    const tileArray = array.slice(5, array.length - 1);
    const last = array[array.length - 1];
    const index = last.indexOf("!");
    const lastTile = last.substring(0, index);
    const lastForm = last.substring(index + 1);
    return (
      <div className="question">
        <div>
          <h2 className="questionText">
            조건에 만족하는 역은?
          </h2>
        </div>
        <div className="envInfo">
          <div className="tileInfoText">장풍:</div>
          <Tile env={true} tile={envArray[1]} />
          <div className="tileInfoText">자풍:</div>
          <Tile env={true} tile={envArray[2]} />
          <div className="tileInfoText">도라:</div>
          <Tile env={true} tile={envArray[3]} />
        </div>
        <div>
          {tileArray.map(renderHand)}
          <div className="tileInfoText">{lastForm + ":"}</div>
          <Tile env={false} tile={lastTile} form="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      {(props.quizId === "basic") ? renderBasicQuiz() : renderScoringQuiz()}
    </div>
  );
}

Question.propTypes = {
  quizId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};