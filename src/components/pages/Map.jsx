import React from 'react';
import { Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';

class BMap extends React.Component {
  render() {
    return (
        <Map center={{lng: 106, lat: 31}} zoom="16">
            <Marker position={{lng: 104.7017157903, lat: 31.5406276248}} title='swust'/>
            <NavigationControl />
            <InfoWindow position={{lng: 104.7017157903, lat: 31.5406276248}} text="中国四川省绵阳市涪城区青龙大道中段59号" title="西南科技大学"/>
        </Map>
    );
  }
}

export default BMap;