import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  StyleProvider,
  Container,
  Button,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content
} from 'native-base';
import {Icon} from 'expo';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import FeedCard from '../components/FeedCard';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StyleProvider style={getTheme(finchTheme)}>
        <Container>
          {/* Begin Header */}
          <Header>
            <Left>
              <Button transparent>
                <Icon.Ionicons name={
                  Platform.OS === 'ios'
                    ? 'ios-menu'
                    : 'md-menu'
                  }
                  size={24}
                  color="#565454" />
              </Button>
            </Left>
            <Body>
              <Title>finch</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon.Ionicons name={
                    Platform.OS === 'ios'
                      ? 'ios-notifications'
                      : 'md-notifications'
                    }
                    size={24}
                    color="#565454" />
              </Button>
              <Button transparent>
                <Icon.Feather name='message-square'
                    size={24}
                    color="#565454" />
              </Button>
            </Right>
          </Header>
          {/* Begin Feed scrollview */}
          <ScrollView>
            <Content padder>
              <FeedCard
                user='Intervarsity Hi-Light'
                timestamp='5 hours ago'
                thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hi25NPiT0AtEIZYL4GZYjBC5Tjf2Hm-PKVDaWLsDUlkUOmh'
                image='https://previews.123rf.com/images/khwanchais/khwanchais1808/khwanchais180800011/106622788-happy-peoples-enjoy-summer-vacation-on-the-beach.jpg'
                hasImage={false}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                numLikes='24' />
            </Content>
          </ScrollView>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  
});
