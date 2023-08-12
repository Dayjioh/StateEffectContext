import { useContext } from 'react'
import Cities from '../../assets/cities.json'
import City from './City'
import { MapContext } from '../../provider/MapProvider'

const ListCity = () => {
  return <>
  {
    Cities.map((city) => <City key={crypto.randomUUID()} name={city.name} poster={city.poster} coords={city.coords} />)
  }</>
}

export default ListCity;