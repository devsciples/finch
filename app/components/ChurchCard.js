import React from 'react';
import {
    Platform,
    StyleSheet,
    Image
  } from 'react-native';
import { Icon } from 'expo';
import { Container,
    Header,
    Title, 
    Content, 
    Button, 
    Left, 
    Right, 
    Body, 
    Text,
    Item,
    Input,
    H3, 
    StyleProvider,
    Form, 
    Picker,
    Card,
    CardItem } from 'native-base';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import Colors from '../constants/Colors';

export default class ChurchCard extends React.Component {
  render() {
    return (
        <StyleProvider style={getTheme(finchTheme)}>
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>{this.props.name}</Text>
                            <Text note>{this.props.location}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Image style={styles.cardImage} source={{uri: 'http://chiiroba.net/MatsudaFamily/christian/ch-makiki.jpg'}} style={styles.cardImage} />
                    </Left>
                    
                    <Body>
                        <Icon.Ionicons
                            name={
                                Platform.OS === 'ios'
                                  ? 'ios-people'
                                  : 'md-people'
                                }
                            size={18}
                            color="#312F2F"
                            style={{marginLeft: 10}}
                        />
                        <Text>{this.props.size}</Text>
                        <Icon.Ionicons
                            name={
                                Platform.OS === 'ios'
                                  ? 'ios-time'
                                  : 'md-time'
                                }
                            size={18}
                            color="#312F2F"
                            style={{marginLeft: 10}}
                        />
                        <Text>{this.props.time}</Text>
                    </Body>
                </CardItem>
            </Card>
        </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cardImage: {
        height: 75,
        width: 75,
    },
})