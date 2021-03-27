import React from 'react'
import { Map } from 'react-leaflet'
import 'Leaflet/dist/Leaflet.css'
const MapView = () =>{
  return (
    <Map center={{lat: '-16.626630', lng: '-49.418824'}} zoom={15}>

    </Map>
  )
}



export default MapView