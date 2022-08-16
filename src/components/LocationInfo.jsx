import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='header'>
        <h2>{location?.name}</h2>
        <ul className='header-info'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimencion: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo