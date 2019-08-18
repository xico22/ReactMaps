import React, {useState, useEffect} from 'react';

import {
  View,
  ActivityIndicator,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';

import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(({coords}) => {
      setCoordinates(coords);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <MapView
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068,
          }}
          style={styles.map}>
          {}
        </MapView>
      )}
    </View>
  );
}

export default App;
