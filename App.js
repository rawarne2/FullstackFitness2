import React from 'react';
import { Text, View, MapView } from 'react-native';
import Map from './components/MapView'
import Clock from './components/Timer'
import NavBar from './components/NavBar'
import styles from './Styles'
import { Provider } from 'react-redux'
import store from './store'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <NavBar/>
      <Map/>
      <Clock/>
      </View>
    );
  }
}



//Wrap View with <Provider store={store}>  when redux is complete





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