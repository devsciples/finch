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
  Content,
  Fab
} from 'native-base';
import {Icon} from 'expo';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import FeedCard from '../components/FeedCard';

export default class LinksScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      fabActive: false
    }
  }

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
          {/* Begin fab */}
          <Fab
            active={this.state.fabActive}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#F2896F' }}
            position="bottomRight"
            onPress={() => {this.setState({fabActive: !this.state.fabActive})}}>
            <Icon.AntDesign 
              name='plus'
              size={14}
              color='#FFFFFF' />
            <Button style={{ backgroundColor: '#F2896F' }}>
              <Icon.Entypo
                 name="text"
                 size={14}
                 color='#FFFFFF' />
            </Button>
            <Button style={{ backgroundColor: '#F2896F' }}>
              <Icon.AntDesign
               name="picture"
               size={14}
               color='#FFFFFF' />
            </Button>
          </Fab>
          {/* Begin Feed scrollview */}
          <ScrollView>
            <Content padder>
              <FeedCard
                user='Intervarsity Hi-Light'
                timestamp='5 hours ago'
                thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hi25NPiT0AtEIZYL4GZYjBC5Tjf2Hm-PKVDaWLsDUlkUOmh'
                image=''
                hasImage={false}
                text='Hey guys!!! Excited to see you all tomorrow night!!! Hi-Light will be in CC 308!! Early prayer will be at 6:45.'
                numLikes='24' />
              <FeedCard
                user='Journey Church Hawaii'
                timestamp='April 21'
                thumbnail='https://journeychurchhawaii.org/wp-content/uploads/2016/02/JourneyPodcastArtSm.png'
                image='https://scontent.fhnl1-1.fna.fbcdn.net/v/t1.0-9/57578726_1384647718343366_8143726574147993600_n.jpg?_nc_cat=105&_nc_ht=scontent.fhnl1-1.fna&oh=2cd43baa1f729a1287371c271de64c4e&oe=5D383BA2'
                hasImage={true}
                text='Kapolei Campus children (and our own Victoria) bless our Honolulu Campus family with a beautiful sign dance!'
                numLikes='36' />
              <FeedCard
                user='Intervarsity Hi-Light'
                timestamp='April 12'
                thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hi25NPiT0AtEIZYL4GZYjBC5Tjf2Hm-PKVDaWLsDUlkUOmh'
                image='https://scontent.fhnl1-1.fna.fbcdn.net/v/t1.0-9/56922830_10218771679833438_2955220400553852928_n.jpg?_nc_cat=110&_nc_ht=scontent.fhnl1-1.fna&oh=c6eea6aa23317d885a7fe46aed69a427&oe=5D3272F3'
                hasImage={true}
                text="Thanks Kimberly Ko and Joshua Ko for visiting us last night!!!"
                numLikes='18' />
              <FeedCard
                user='Makiki Christian Church'
                timestamp='April 8'
                thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaVH-DoRNRnIsQAPY2-GasZ8x49wDodqJ7km1Zxad1PUuo4hg'
                image='https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/breafast-tostada-031.jpg'
                hasImage={true}
                text='Aloha friends! The Hawaii Prayer Breakfast is on April 30 with Ravi Zacharias! See Hawaii Prayer Breakfast.com for more details!'
                numLikes='87' />
              <FeedCard
                user='Intervarsity Hi-Light'
                timestamp='April 4'
                thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hi25NPiT0AtEIZYL4GZYjBC5Tjf2Hm-PKVDaWLsDUlkUOmh'
                image=''
                hasImage={false}
                text="Hi friends!!! I hope that you are all excited for our joint fellowship night with I.F! Tonight's Hi-Light will be in the CC executive dining room and we will be praying for the night at 6:45pm! Can't wait to see you all there!"
                numLikes='17' />
            </Content>
          </ScrollView>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  
});
