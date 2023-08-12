import { useMap } from 'react-leaflet';

const ChildMap = ({location}) => {
    const map = useMap();
    map.setView([location.lat,location.lng])
  return null;
}

export default ChildMap