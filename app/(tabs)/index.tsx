import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const INITIAL_REGION = {
    latitude: -6,
    longitude: 106,
    latitudeDelta: 2,
    longitudeDelta: 2
}

export default function App() {

  // const [marker, setMarker] = useState({});
  //   let markerRef = useRef(null);

  //   useEffect(() => {
  //       if (markerRef.current) {
  //           markerRef.current.showCallout();
  //       }
  //   })
    
  return (
    <View style={{ flex: 1 }}>
    <MapView style={StyleSheet.absoluteFill} 
    provider={PROVIDER_GOOGLE} 
    initialRegion={INITIAL_REGION}
    region={{ 
      latitude: -6,
      longitude: 106,
      latitudeDelta: 2,
      longitudeDelta: 2,
      name: 'asdf'
    }}
    // showsUserLocation
    // showsMyLocationButton
    >
      <Marker 
        coordinate={INITIAL_REGION}
        title='jakarta'
        description='test'
        // image={require('../assets/images/adaptive-icon.png')}
      >

        {/* <Callout tooltip={true}>
          <View>
              <Text style={{ fontSize:24 }}>test</Text>
              <Text> asdf </Text>
          </View>
        </Callout> */}

      </Marker>
    </MapView>
    </View>
  );
}

// export default ExploreScreen;

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  name: {
    fontSize: 16,
    marginBottom: 5
  },
  image: {
    width: 120,
    height: 80
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });
