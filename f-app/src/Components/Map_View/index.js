import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import IndiaMap from '../Dashboard/IndianMap';
import axios from "axios";

const baseURL = "http://localhost:8000";

export default function MapView() {

  const params = useParams();

  const [mapDetails, setMapDetails] = useState();

  useEffect(() => {
    // console.log(params)
    axios.get(baseURL + `/map-list/${params.mapId}`).then((response) => {
      // console.log(response.data);
      if (response.data.status == 'SUCCESS') {
        setMapDetails(response.data.map_by_id)
      }
    });
  }, [])

  return (
    <div className='app'>
      <h1 style={{ fontStyle: 'italic' }}>MapView Component</h1>
      <div className="map-container">
        {mapDetails && <IndiaMap detail={mapDetails} />}
      </div>

    </div>
  )
}