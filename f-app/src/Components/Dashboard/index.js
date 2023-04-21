import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8000";

export default function Dashboard() {

  const [mapList, setMapList] = useState([]);

  useEffect(() => {
    axios.get(baseURL + '/map-list').then((response) => {
      // console.log(response.data);
      if (response.data.status == 'SUCCESS') {
        setMapList(response.data.map_list)
      }
    });
  }, [])


  return (
    <div>
      <h1 style={{ fontStyle: 'italic' }}>Dashboard Component</h1>
      <div className='w-100'>
        <div className="card-container">
          <div className='row m-0 p-0'>
            {mapList.length && mapList.map(item => (<div className='col-12 col-sm-6 col-md-4 col-lg-3 p-0 m-0'>
              <div className='w-100 h-100 px-2 mb-4'>
                <Link to={`/map_view/${item.id}`} className='map_list_link'>
                  <div className="card w-100 shadow" id="card1">
                    <img className="card-img-top" style={{ height: '176px', objectFit: 'fill' }} src={item.cover_image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-text">{item.title}</h5>
                      <p className="card-title">{item.location}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
};


