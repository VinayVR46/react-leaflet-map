import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import images from '../assets/maps.png'
import L from "leaflet"

const icon = L.icon({
  iconUrl: `${images}`,
  iconSize: [38, 38]
})
const position = [17.46, 78.53]

export default function Maps(props) {
  const {selectPosition} = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]
  return (
    <div>
      <MapContainer center={[17.46, 78.53]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {selectPosition && <Marker position={locationSelection} icon={icon}>
    <Popup>
    <p>{selectPosition?.display_name}</p>
    </Popup>
  </Marker>}
</MapContainer>
    </div>
  )
}
