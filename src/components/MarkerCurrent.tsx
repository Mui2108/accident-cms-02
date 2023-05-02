import { Icon, Point } from 'leaflet';
import icon from 'assets/giphy.gif';

const MarkerCurrent = new Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: new Point(50, 70),
  className: 'icon-marker-custom',
});

export default MarkerCurrent;
