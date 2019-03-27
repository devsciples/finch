import React from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
  } from 'react-native';
import { Icon } from 'expo';
import { Container,
    Content, 
    Left, 
    Right, 
    Body, 
    Text,
    Item,
    StyleProvider,
    Card,
    CardItem } from 'native-base';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
                    <Grid>
                        <Col style={{width: 100}}>
                            <Row>
                                <Content padder>
                                    <Image style={styles.cardImage} source={{uri: 'http://chiiroba.net/MatsudaFamily/christian/ch-makiki.jpg'}} style={styles.cardImage} />
                                </Content>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Content padder>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Icon.Ionicons
                                            name={
                                                Platform.OS === 'ios'
                                                ? 'ios-people'
                                                : 'md-people'
                                                }
                                            size={16}
                                            color="#312F2F"
                                            style={{marginLeft: 10}}
                                        />
                                        <Text style={styles.cardBodyText}>{this.props.size}</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Icon.Ionicons
                                            name={
                                                Platform.OS === 'ios'
                                                ? 'ios-time'
                                                : 'md-time'
                                                }
                                            size={16}
                                            color="#312F2F"
                                            style={{marginLeft: 10}}
                                        />
                                        <Text style={styles.cardBodyText}>{this.props.time}</Text>
                                    </View>
                                </Content>
                            </Row>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cardImage: {
        marginLeft: 10,
        height: 75,
        width: 75,
    },
    cardLeftBody: {
        width: 100,
    },
    cardBody: {
        width: 250,
    },
    cardBodyText: {
        fontSize: 11,
        marginLeft: 10,
    },
    cardIcon: {
        marginRight: 10,
    },
})