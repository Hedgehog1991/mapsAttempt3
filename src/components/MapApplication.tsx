// components/MapApplication.js
import React, {MutableRefObject, useEffect, useRef} from "react";
import {OSM} from "ol/source";
import TileLayer from "ol/layer/Tile";
import {Map, View} from "ol";
import {useGeographic} from "ol/proj";

useGeographic();

const map = new Map({
    layers: [
        new TileLayer({source:new OSM()})
    ],
    view: new View(
        {
            center: [11, 59], zoom: 10
        })
})

function MapApplication(){
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>
    useEffect(() => {
        map.setTarget(mapRef.current)
    }, []);

    return <div ref={mapRef}> </div>;
}

export default MapApplication;
