import React from 'react';
import { Text } from 'react-native'

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Text style={{textAlign: 'center', 
                    marginBottom: 3,
                    fontSize: 11,
                    color: this.props.focused ? Colors.tabIconSelected : Colors.tabTextDefault }}>
        {this.props.name}
      </Text>
    );
  }
}