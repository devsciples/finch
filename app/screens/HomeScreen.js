import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import { WebBrowser, Icon } from 'expo';
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
  Picker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../native-base-theme/components';
import finchTheme from '../native-base-theme/variables/finchTheme.js';
import Colors from '../constants/Colors';
import ChurchCard from '../components/ChurchCard';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      modalVisible: false
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StyleProvider style={getTheme(finchTheme)}>
        <Container>
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
          <ScrollView>
          <Grid>
            <Col>
              <Row style={styles.searchContainer}>
                <Content padder>
                  <Item rounded>
                    <Icon.Ionicons name={
                      Platform.OS === 'ios'
                        ? 'ios-search'
                        : 'md-search'
                      }
                      size={18}
                      color="#312F2F"
                      style={{marginLeft: 10}} />
                    <Input placeholder='Find Your Church'/>
                  </Item>
                </Content>
              </Row>
              <Row style={styles.searchContainer}>
                <Content padder>
                  <Item rounded>
                    <Icon.EvilIcons name='location'
                      size={18}
                      color="312F2F"
                      style={{marginLeft: 10}} />
                    <Input placeholder='Honolulu, HI'/>
                  </Item>
                </Content>
              </Row>
              <Row style={styles.searchRefineRow}>
                <Col style={styles.dropdownColumn}>
                  <Content>
                    <Form>
                      <Picker
                        mode="dropdown"
                        iosHeader="Find Your..."
                       // ios icon was here
                        style={{ width: undefined }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        <Picker.Item label="Church" value="key0" />
                        <Picker.Item label="Bible Study" value="key1" />
                        <Picker.Item label="Event" value="key2" />
                        <Picker.Item label="Outreach" value="key3" />
                      </Picker>
                    </Form>
                  </Content>
                </Col>
                <Col style={styles.advancedSearchColumn}>
                  <Content>
                    <Button transparent style={styles.advancedSearchButton}>
                      <Text>Advanced Search</Text>
                    </Button>
                  </Content>
                </Col>
              </Row>
              <Row>
                <Content padder>
                  <ChurchCard
                    name='Lutheran Church of Honolulu'
                    image='https://pkmngotrading.com/mediawiki/images/thumb/2/22/The_Lutheran_Church_of_Honolulu_-_Honolulu%2C_HI.jpg/350px-The_Lutheran_Church_of_Honolulu_-_Honolulu%2C_HI.jpg'
                    location='1730 Punahou St, Honolulu, HI 96822'
                    size='Small'
                    time='Morning, Evening'
                    language='English'
                    denomination='Lutheran (ECLA)'
                    tags='#traditional #diverse #LGBT' />
                  <ChurchCard
                    name='Olivet Baptist Church'
                    image='https://s3-media2.fl.yelpcdn.com/bphoto/s8exRWb4ROs7hvEQboSnGg/ls.jpg'
                    location='1775 S Beretania St, Honolulu, HI 96826'
                    size='Medium'
                    time='Morning'
                    language='English, Japanese'
                    denomination='Baptist'
                    tags='#contemporary #preschool #multilingual' />
                  <ChurchCard
                    name='Makiki Christian Church'
                    image='http://chiiroba.net/MatsudaFamily/christian/ch-makiki.jpg'
                    location='829 Pensacola St. Honolulu, HI 96814'
                    size='Large'
                    time='Morning'
                    language='English, Japanese'
                    denomination='United Church of Christ'
                    tags='#traditional #family #multilingual' />
                  <ChurchCard
                    name='Kaimuki Christian Church'
                    image='https://s3-media4.fl.yelpcdn.com/bphoto/pfm0h79Nb0ClPfrYLYVZCA/ls.jpg'
                    location='3709, 1117 Koko Head Ave, Honolulu, HI 96816'
                    size='Large'
                    time='Morning'
                    language='English'
                    denomination='Unknown'
                    tags='#school #family #diverse' />
                  <ChurchCard
                    name='Journey Church Honolulu'
                    image='https://journeychurchhawaii.org/wp-content/uploads/2016/02/JourneyPodcastArtSm.png'
                    location='1045 19th Ave. Honolulu, HI 96816'
                    size='Tiny'
                    time='Morning'
                    language='English'
                    denomination='Nondenominational'
                    tags='#casual #family' />
                  <ChurchCard
                    name='Hope Chapel Honolulu'
                    image='http://allthingsgraceful.com/wp-content/uploads/2016/06/IMG_0652.jpg'
                    location='4211 Waialae Ave Suite 3080, Honolulu, HI 96816'
                    size='Medium'
                    time='Morning'
                    language='English'
                    denomination='Nondenominational'
                    tags='#family #youth' />
                  <ChurchCard
                    name='One Love Ministries'
                    image='https://yt3.ggpht.com/a-/AAuE7mCy8-J-wubqCHE7Z_pMfdeaxf52cHLA2w0R9w=s900-mo-c-c0xffffffff-rj-k-no'
                    location='670 Auahi St A5, Honolulu, HI 96813'
                    size='Medium'
                    time='Morning'
                    language='English'
                    denomination='Baptist'
                    tags='#casual #baptism' />
                  <ChurchCard
                    name='Kawaihao Church'
                    image='https://www.hawaii-guide.com/images/made/kawalahaochurcharticle_1000_750_75_s_c1_c_b_0_0.jpg.pagespeed.ce.XLk1SopaZR.jpg'
                    location='957 Punchbowl St, Honolulu, HI 96813'
                    size='Medium'
                    time='Morning'
                    language='English, Hawaiian'
                    denomination='United Church of Christ'
                    tags='#traditional #multilingual' />
                  <ChurchCard
                    name='Bluewater Mission'
                    image='https://tvaphawaii.org/wp-content/uploads/2017/11/logo_bluewater.png'
                    location='810 N Vineyard Blvd, Honolulu, HI 96817'
                    size='Large'
                    time='Morning'
                    language='English'
                    denomination='Unknown'
                    tags='#spirit-led #missions #personalgrowth' />
                  <ChurchCard
                    name='New Hope Windward'
                    image='http://www.nhww.org/images/uploads/pages/What_Were_About.JPG'
                    location='43 Oneawa Street, Suite 203, Kailua HI 96734'
                    size='Mega'
                    time='Morning'
                    language='English'
                    denomination='Foursquare'
                    tags='#contemporary' />
                </Content>
              </Row>
            </Col>
          </Grid>
          </ScrollView>
        </Container>
      </StyleProvider>

    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  searchRefineRow: {
    height: 50,
    alignContent: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F5A996"
  },
  dropdownColumn: {
    width: "40%",
    alignContent: "center",
    paddingLeft: 10
  },
  advancedSearchColumn: {
    width: '60%',
    alignContent: "center",
  },
  resultsHeadingContainer: {
    height: 50,
    textAlignVertical: "bottom",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#F5A996",
    borderBottomWidth: 1,
  },
  advancedSearchButton: {
    alignSelf: 'center',
  },
  searchContainer: {
    height: 65,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
