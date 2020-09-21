import React from 'react';
import './map.scss';

import { YMaps, Map } from 'react-yandex-maps';

interface mapProps {
    data: number[]
}


const MapComponent: React.FC<mapProps> = ({data}) => (
  <YMaps>
    <div className="map">
      <h3>Яндекс карты - найдется Все!</h3>
      <Map  width={800}
          height={550} defaultState={{ center: data, zoom: 12 }} />
    </div>
  </YMaps>
);

export default MapComponent
