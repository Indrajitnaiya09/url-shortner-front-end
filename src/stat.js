import React, { useState, useEffect } from 'react';
import Axios from './config';
import Url from './base';



function Stat() {
    const [stats, setStats] = React.useState([])
    useEffect(()=>{
        Axios.get('/stat')
        .then((response) =>{
            console.log(response);
            setStats(response.data.urls)
        })
    },[])
    console.log( 'Please have a look' , stats)
  return (
    <div>
      <h1> You can see the statistic here </h1>
      <hr/>
      <br/><br/>
      {
          stats.map((data,index) => {
              return (
                  <div key={index} style={{"alignContent":"center"}}> 
                      <h4> Base Url : {data.url} </h4>
                      <h6> Total Clicks : {data.total_click} </h6>
                      <h6> Short Url : {Url}{`/${data.short_url}`} </h6>
                      <h6> {data.countries}</h6>
                      <h6> {data.all_ips}</h6>
                      <hr/>
                  </div>
              )
          })
      }
    </div>
  );
}

export default Stat;