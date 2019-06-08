import React from 'react'

const MapSegment = ({ path }) => (
  <path
    d={path}
    fill="#fefccd"
    stroke="#d72319"
    strokeWidth="1"
    className="map__segment"
  />
)

export { MapSegment }
