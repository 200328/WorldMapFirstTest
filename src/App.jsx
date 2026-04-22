import { useEffect, useRef, useState } from 'react'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import './App.css'

function App() {

  const mapRef = useRef(null);

  useEffect(() => {

    if (mapRef.current) return;

     mapRef.current = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return (
  <>
    <div className="header">헤더</div>
    <div id="map"></div>
  </>
  );
}

export default App

