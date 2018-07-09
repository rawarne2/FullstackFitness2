import React from 'react';
import { StyleSheet, Text, View, MapView } from 'react-native';
import Map from './components/MapView'
import Clock from './components/Timer'
import NavBar from './components/NavBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} style={{flex: 1}}>
      <NavBar style={{flex: 1}}/>
      <Map style={{flex: 1}}/>
      <Clock style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});







/*
To Do

be able to set an amount of time for countdown
add homepage that has motivational quotes and list of previous runs
get map to draw out the route
say time, pace(min/mile) every 5 min
include a 'go back to location' button
change distance travelled from km (default) to miles
add redux???
save runs to db
allow to play in background?



*/