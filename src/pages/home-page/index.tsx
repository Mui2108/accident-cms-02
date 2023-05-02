import React, { useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Polyline,
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import useGeolocation from 'react-hook-geolocation';
import { Button } from 'antd';
import { AimOutlined, CaretRightOutlined } from '@ant-design/icons';

import MarkerCurrent from 'components/MarkerCurrent';
import useStateRef from 'components/use-state-ref';
import CurrentPosition from 'components/CurrentPosition';

const ChangeView = ({
  center,
  zoom,
  onChangeZoom,
}: {
  center: LatLngExpression;
  zoom: number;
  onChangeZoom?: (value: number) => void;
}) => {
  const map = useMap();
  map.on('zoomend', (e) => onChangeZoom && onChangeZoom(e.target._zoom));
  map.setView(center);
  map.setZoom(zoom);

  return null;
};
const plot: LatLngExpression[] = [
  [13.761882, 100.566712],
  [13.762501, 100.567197],
  [13.762968, 100.567619],
  [13.764491, 100.568892],
  [13.767974735160864, 100.57155000341702],
  [13.769403539619894, 100.57260917856492],
  [13.77072519497608, 100.57315491610831],
  [13.77287937995861, 100.57335695587568],
  [13.775068430181252, 100.57349613882833],
  [13.776967215465444, 100.57349169492191],
  [13.778467401856432, 100.57362587796392],
  [13.778630234753928, 100.57425428306841],
  [13.778618173061679, 100.5743846833556],
  [13.778620585400702, 100.57576320048784],
  [13.77860496098855, 100.57619117822391],
  [13.7781070983941, 100.57617464230817],
  [13.777354936303944, 100.5761095526364],
  [13.776896, 100.576002],
  [13.775969949633414, 100.57576937053291],
  [13.775813237043451, 100.57657912860383],
  [13.776878300168224, 100.57685103998557],
];
const HomePage = () => {
  const isMounted = useRef(true);

  const [centerLocation, setCenterLocation] = useStateRef<LatLngExpression>([
    0, 0,
  ]);

  const [position, setPosition] = useStateRef<LatLngExpression[]>([]);

  const [locationStatus, setLocationStatus] = useState(false);
  const geolocation = useGeolocation();
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (isMounted.current) {
      if (geolocation.latitude && geolocation.longitude) {
        setCenterLocation([geolocation.latitude, geolocation.longitude]);
        setLocationStatus(true);
        isMounted.current = false;
      }
    }
  }, [geolocation]);

  const handleCurrentLocation = () => {
    if (geolocation.latitude && geolocation.longitude) {
      setCenterLocation([geolocation.latitude, geolocation.longitude]);
      setLocationStatus(true);
    }
  };

  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const showPlot = async () => {
    setPosition([]);
    for (let i = 0; i < plot.length - 1; i++) {
      setCenterLocation(plot[i]);
      setPosition([...position.current, plot[i]]);

      await timer(3000);
    }
  };

  return (
    <div>
      <MapContainer
        center={centerLocation.current}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: 'calc(100vh - 24px)' }}
        zoomAnimation={true}
      >
        {/* <ChangeView
          center={centerLocation.current}
          zoom={zoom}
          onChangeZoom={(value) => setZoom(value)}
        /> */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CurrentPosition />
        {/* {centerLocation && (
          <Marker position={centerLocation.current} icon={MarkerCurrent} />
        )} */}
        <Polyline
          positions={position.current}
          color="#3fa7d6"
          weight={12}
          smoothFactor={0}
        />
      </MapContainer>
      <Button
        onClick={handleCurrentLocation}
        loading={!locationStatus}
        icon={
          <AimOutlined style={{ color: locationStatus ? '#3fa7d6' : '' }} />
        }
        className="!tw-absolute tw-bottom-8 !tw-z-[999] !tw-right-8"
      />
      <Button
        onClick={showPlot}
        icon={<CaretRightOutlined />}
        className="!tw-absolute tw-top-8 !tw-z-[999] !tw-right-8"
        type="primary"
      >
        เริ่มเดินทาง
      </Button>
    </div>
  );
};

export default HomePage;
