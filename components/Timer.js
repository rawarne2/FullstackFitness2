import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight, Button } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,  //change to a selected amount of time 
      timerReset: false,
      stopwatchReset: false,
      countUp: true
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.toggleButton = this.toggleButton.bind(this)
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  toggleButton() {
    this.setState( prevState => ({
      countUp: !prevState.countUp
    }) )
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };
 
  render() {
    return (
      <View style={{backgroundColor: 'lightgray', padding: 15, alignItems: 'center'}}>
      <Button title={this.countUp ? 'TAP TO COUNT UP' : 'TAP TO COUNT DOWN'} onPress={this.toggleButton}></Button>
      <View>
      {this.state.countUp ? 
        <View>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime} />
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{fontSize: 25, alignSelf: 'center'}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{fontSize: 25, alignSelf: 'center'}}>Reset</Text>
        </TouchableHighlight>
        </View>
        :
        <View >
        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{fontSize: 25, alignSelf: 'center'}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{fontSize: 25, alignSelf: 'center'}}>Reset</Text>
        </TouchableHighlight>
        </View>
      }
      </View>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const options = {
  container: {
    backgroundColor: 'skyblue',
    padding: 5,
    borderRadius: 5,
    width: 200
  },
  text: {
    fontSize: 25,
    color: 'black',
    marginLeft: 7,
  }
};