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
    CardItem,
    Thumbnail,
    Button } from 'native-base';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
      }

    render() {
        return(
            <StyleProvider style={getTheme(finchTheme)}>
                <Card>
                    <CardItem bordered>
                        <Left>
                            <Thumbnail source={{uri: this.props.thumbnail}} style={styles.cardThumbnail} />
                            <Body>
                                <Text>{this.props.user}</Text>
                                <Text note>{this.props.timestamp}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Content padder>
                                <Image source={{uri: this.props.image}} style={styles.cardImage}
                                    style={this.props.hasImage ? styles.cardImage : {height:0}} />
                                <Text style={styles.cardBodyText}>
                                    {this.props.text}
                                </Text>
                            </Content>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}}
                                    onPress={() => {this.state.liked 
                                                    ? this.setState({liked: false}) 
                                                    : this.setState({liked: true})}}>
                                {/* icon goes here */}
                                <Icon.Ionicons
                                            name={Platform.os === 'ios'
                                            ? (this.state.liked ? 'ios-heart' : 'ios-heart-empty' )
                                            : (this.state.liked ? 'md-heart' : 'md-heart-empty')}
                                            size={24}
                                            color='#F2896F'
                                            style={{marginLeft: 10}}
                                        />
                                <Text>{this.props.numLikes}</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    cardImage: {
        height: 200,
        marginBottom: 5,
    },
    cardBodyText: {
        fontSize: 14,
    },
    cardThumbnail: {
        marginLeft: 5,
        marginVertical: 5,
    },
})