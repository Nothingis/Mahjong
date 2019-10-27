import React from 'react';
import PropTypes from 'prop-types';
import { tileDra, tileWind, tileMan, tilePin, tileSou, Blank } from './TileObject';

export default function Tile(props) {
  function getTile(name) {
    const prefix = name.substring(0, 1);
    if (prefix === "만") {
      const n = Number(name.substring(1, 2)) - 1;
      return tileMan[n];
    } else if (prefix === "통") {
      const n = Number(name.substring(1, 2)) - 1;
      return tilePin[n];
    } else if (prefix === "삭") {
      const n = Number(name.substring(1, 2)) - 1;
      return tileSou[n];
    } else {
      switch (name) {
        case "백":
          return tileDra[0];
        case "발":
          return tileDra[1];
        case "중":
          return tileDra[2];
        case "동":
          return tileWind[0];
        case "남":
          return tileWind[1];
        case "서":
          return tileWind[2];
        case "북":
          return tileWind[3];
        default:
          return Blank;
      }
    }
  }
  function getClass(env, form) {
    if (env) return "envTile";
    switch (form) {
      case "울기":
        return "tileCall";
      default:
        return "tile";
    }
  }
  return (
    <img className={getClass(props.env, props.form)} src={getTile(props.tile)} alt="Tile" />
  );
}


Tile.propTypes = {
  env: PropTypes.bool.isRequired,
  tile: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired
};