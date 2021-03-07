import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class App extends Component {
render() {
const style = {
 width: '50%',
 height: '50%',
 }
return (
 <div className='center'>
  <hr/>
  <h2>Find the closest recycling points</h2>
  <div className="map">
    <Map
       google={this.props.google}
       zoom={10}
       initialCenter={{
       lat: 35.5496939,
       lng: -120.7060049
       }}
       style={style}
       />
  </div>
 </div>
 );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyCU22kftOM5qBczCkOM66pt7slpb5A0Mjw')
})(App);
