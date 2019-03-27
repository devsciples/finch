import React from 'react';
import {
  Platform,
  StyleSheet
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
                    name='Makiki Christian Church'
                    location='829 Pensacola St. Honolulu, HI'
                    
                    size='>1000'
                    time='Sundays, 7:00AM and 10:00AM' />
                </Content>
              </Row>
            </Col>
          </Grid>
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
