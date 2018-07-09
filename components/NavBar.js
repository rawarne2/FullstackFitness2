import React from 'react';
import { MapView } from 'expo';
import { Text, NavigatorIOS } from 'react-native';
import Home from './Home'


export default class NavBar extends React.Component {


    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: Home,
                    title: 'Fullstack Fitness',
                    passProps: {index: 1},
                }}
                style={{flex: 1}}
          />
        )
    }
}