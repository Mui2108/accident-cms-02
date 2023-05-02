import { useEffect, useState } from 'react';
import { useMap, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, circle } from 'leaflet';
const CurrentPosition = () => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);
  const [bbox, setBbox] = useState<string[]>([]);
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      console.log(e);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const _circle = circle(e.latlng, radius);
      _circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(','));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
};

export default CurrentPosition;
