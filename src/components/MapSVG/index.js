import React from 'react'
import { MapSegment } from './svg-parts/MapSegment'
import { MapBase } from './svg-parts/MapBase'
import { paths } from './paths'
import './styles.scss'

const MapSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316.012 510.724" className="map">
    <g fill="#d72319"><MapBase /></g>
    <g fill="#fefccd" stroke="#d72319" strokeWidth="1">
      <MapSegment path={paths.karlovyVary} />
      <MapSegment path={paths.ustiNadLabem} />
      <MapSegment path={paths.liberec} />
      <MapSegment path={paths.hradecKralove} />
      <MapSegment path={paths.pardubice} />
      <MapSegment path={paths.olomouc} />
      <MapSegment path={paths.moraviaSilesia} />
      <MapSegment path={paths.zlin} />
      <MapSegment path={paths.southMoravia} />
      <MapSegment path={paths.vysocina} />
      <MapSegment path={paths.southBohemia} />
      <MapSegment path={paths.plzen} />
      <MapSegment path={paths.centralBohemia} />
      <MapSegment path={paths.prague} />
    </g>
  </svg>
)

export { MapSVG }
