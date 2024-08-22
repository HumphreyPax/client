import React from 'react';
import './App.css';


function Update() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <h1>Your story is just getting started</h1>
          <img src="https://i.imgur.com/4cW384G.jpg" alt="Man framing the camera" />
          <p>Your story matters</p>
          <button className="button">absa.africa/your-story-matters</button>
          <p>Ts&Cs apply. Auth FSP/NCRCP7</p>
        </div>
        <div className="right-side">
          <div className="login-container">
            <button className="button">SCAN FACE TO LOGIN</button>
            <img src="https://i.imgur.com/W9sKz0y.jpg" alt="Man on video call" />
            <div className="absa-logo">
              <img src="https://i.imgur.com/58yM1fZ.png" alt="Absa logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;