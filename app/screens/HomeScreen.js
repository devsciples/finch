import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container,
  Header,
  Title, 
  Content, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Item,
  Input,
  H1,
  H2,
  H3,
  Segment, 
  StyleProvider,
  Form, 
  Picker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MonoText } from '../components/StyledText';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/variables.js';

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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>finch</Title>
          </Body>
          <Right />
        </Header>
      
          <Grid>
            <Col>
              <Row style={styles.searchContainer}>
                <Content padder>
                  <Item rounded>
                    <Icon active name='search' />
                    <Input placeholder='Find your Church'/>
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
                        iosIcon={<Icon name="arrow-down" />}
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
              <Row style={styles.resultsHeadingContainer}>
                <H3>Churches Near You</H3>
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
    marginBottom: 20
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
    borderBottomWidth: 1
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
