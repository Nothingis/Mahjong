import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

export default function Question(props) {
  function renderBasicQuiz() {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }

  function renderHand(tile, index) {
    const idx = tile.indexOf("!");
    if (idx === -1) return (<Tile key={index} env={false} tile={tile} isCalled={false} />);
    else return (
      <Tile key={index} env={false} tile={tile.substring(0, idx)} isCalled={true} />
    );
  }

  function renderScoringQuiz() {
    const tiles = props.content;
    const firstIndex = tiles.indexOf("$");
    const envArray = tiles.substring(0, firstIndex).split(' ');
    const secondIndex = tiles.indexOf("$", firstIndex + 1);
    let tileArray = tiles.substring(firstIndex + 2, secondIndex - 1).split(' ');
    let last = tiles.substring(secondIndex + 2);

    // 일반 타일

    // 마지막 타일
    const formIndex = last.indexOf("!");
    const lastTile = last.substring(0, formIndex);
    const lastForm = last.substring(formIndex + 1);

    return (
      <div className="question">
        <div>
          <h2 className="questionText">
            조건에 만족하는 역은?
          </h2>
        </div>
        <div className="envInfo">
          <div className="tileInfoText">장풍:</div>
          <Tile env={true} tile={envArray[0]} isCalled={false} />
          <div className="tileInfoText">자풍:</div>
          <Tile env={true} tile={envArray[1]} isCalled={false} />
          <div className="tileInfoText">도라패:</div>
          <Tile env={true} tile={envArray[2]} isCalled={false} />
        </div>
        <div>
          {tileArray.map(renderHand)}
          <div className="tileInfoText">{lastForm + ":"}</div>
          <Tile env={false} tile={lastTile} isCalled={false} />
        </div>
      </div>
    );
  }
  function renderPanQuiz() {
    const tiles = props.content;
    const firstIndex = tiles.indexOf("$");
    const envArray = tiles.substring(0, firstIndex).split(' ');
    const secondIndex = tiles.indexOf("$", firstIndex + 1);
    let tileArray = tiles.substring(firstIndex + 2, secondIndex - 1).split(' ');
    let last = tiles.substring(secondIndex + 2);

    // 일반 타일

    // 마지막 타일
    const formIndex = last.indexOf("!");
    const lastTile = last.substring(0, formIndex);
    const lastForm = last.substring(formIndex + 1);

    return (
      <div className="question">
        <div>
          <h2 className="questionText">
            해당하는 판수는?
          </h2>
        </div>
        <div className="envInfo">
          <div className="tileInfoText">장풍:</div>
          <Tile env={true} tile={envArray[0]} isCalled={false} />
          <div className="tileInfoText">자풍:</div>
          <Tile env={true} tile={envArray[1]} isCalled={false} />
          <div className="tileInfoText">도라패:</div>
          <Tile env={true} tile={envArray[2]} isCalled={false} />
        </div>
        <div>
          {tileArray.map(renderHand)}
          <div className="tileInfoText">{lastForm + ":"}</div>
          <Tile env={false} tile={lastTile} isCalled={false} />
        </div>
      </div>
    );
  }
  return (
    <div>
      {props.quizId === 'basic'
        ? renderBasicQuiz()
        : props.quizId === 'scoring'
        ? renderScoringQuiz()
        : renderPanQuiz()}
    </div>
  );
}

Question.propTypes = {
  quizId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};