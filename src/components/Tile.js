import React from 'react';
import PropTypes from 'prop-types';
import {
  tileDra,
  tileWind,
  tileMan,
  tilePin,
  tileSou,
  Blank,
  tileDra_R,
  tileWind_R,
  tileMan_R,
  tilePin_R,
  tileSou_R
} from './TileObject';
import { isMobile } from 'react-device-detect';

export default function Tile(props) {
  function getTile(name, isCalled) {
    const prefix = name.substring(0, 1);
    if (isCalled) {
      if (prefix === '만') {
        const n = Number(name.substring(1, 2)) - 1;
        return tileMan_R[n];
      } else if (prefix === '통') {
        const n = Number(name.substring(1, 2)) - 1;
        return tilePin_R[n];
      } else if (prefix === '삭') {
        const n = Number(name.substring(1, 2)) - 1;
        return tileSou_R[n];
      } else {
        switch (name) {
          case '백':
            return tileDra_R[0];
          case '발':
            return tileDra_R[1];
          case '중':
            return tileDra_R[2];
          case '동':
            return tileWind_R[0];
          case '남':
            return tileWind_R[1];
          case '서':
            return tileWind_R[2];
          case '북':
            return tileWind_R[3];
          default:
            return Blank;
        }
      }
    } else {
      if (prefix === '만') {
        const n = Number(name.substring(1, 2)) - 1;
        return tileMan[n];
      } else if (prefix === '통') {
        const n = Number(name.substring(1, 2)) - 1;
        return tilePin[n];
      } else if (prefix === '삭') {
        const n = Number(name.substring(1, 2)) - 1;
        return tileSou[n];
      } else {
        switch (name) {
          case '백':
            return tileDra[0];
          case '발':
            return tileDra[1];
          case '중':
            return tileDra[2];
          case '동':
            return tileWind[0];
          case '남':
            return tileWind[1];
          case '서':
            return tileWind[2];
          case '북':
            return tileWind[3];
          default:
            return Blank;
        }
      }
    }
  }
  function getClass(env, isCalled) {
    if (env) return "envTile";
    if (isCalled) {
      if (isMobile) return 'tileMobileCalled';
      else return 'tileCalled';
    } else {
      if (isMobile) return 'tileMobile';
      else return 'tile';
    }
  }
  return (
    <img className={getClass(props.env, props.isCalled)} src={getTile(props.tile, props.isCalled)} alt="Tile" />
  );
}


Tile.propTypes = {
  env: PropTypes.bool.isRequired,
  tile: PropTypes.string.isRequired,
  isCalled: PropTypes.bool.isRequired
};