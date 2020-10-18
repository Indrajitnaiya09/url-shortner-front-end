import Axios from 'axios';
import Swal from 'sweetalert';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
import _ from 'lodash';



function App() {
  const [data, setData] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const handleChange = (e) => {
    setData(e.target.value)
 }
  const urlShortner = () => {
    Axios.post('https://ed2d22541646.ngrok.io/urls', {
      "url":{
          "original_url":data
      }
  })
    .then((response) =>{
      setShortUrl(response.data.url.short_url)
      if (response.data.status == 422 ){
        Swal.fire({
          icon: 'error',
          title: 'Please enter valid URL',
          text: 'Invalid URL',
      })
      }
    })
    .catch((err) =>{
      Swal("Please enter correct url", "", "error")
    })
  }
  return (
    <div>
      <h1> Welcome to my shortner project. </h1>
      <input type="text" placeholder="URL" value={data} onChange={handleChange} ></input>
      <button type="button" onClick={urlShortner} >Click Me!</button>
      <br/> <br/>
      {!_.isEmpty(shortUrl) && (<p>Your short url {`https://ed2d22541646.ngrok.io/${shortUrl}`}</p>)}
    </div>
  );
}

export default App;