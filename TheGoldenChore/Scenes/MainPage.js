import React, { Component }from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import { Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button, Text} from 'native-base';
import {Actions} from 'react-native-router-flux'


const choreAPI = "https://goldenchoreserver.herokuapp.com/chores"
const kidAPI =  "https://goldenchoreserver.herokuapp.com/kids"

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          choreData:[],
          kidData:[],
          text: 'Useless Placeholder',
          loading: true
        };
      }

  componentDidMount() {
    fetch(choreAPI)
      .then(response => response.json())
      .then(data => {
        this.setState({ choreData: data })
        .catch(error => {console.log(error)})
      })
    fetch(kidAPI)
      .then(response => response.json())
      .then(data => {
        this.setState({ kidData: data })
        .catch(error => {console.log(error)})
      })
  }
  render() {
    return (

        <Container>
            <Header>
                <Left>
                <Thumbnail source={require('../Assets/smallCoin.png')} 
                />
                </Left>
                    <Body>
                        <Title>The Golden Chore</Title>
                    </Body>                
            </Header>
        <Content>
        <Image
          source={require('../Assets/kidBanner1.png')}
        />
        <Button success block rounded onPress={() => Actions.kidPage(this.state)}><Text> Kids </Text></Button>
        <Image
          source={require('../Assets/kidBanner2.png')}
        />
        <Button primary block rounded onPress={() => Actions.parentPage(this.state)}><Text> Parents </Text></Button>
        </Content>
        
    </Container>


    );
  }
}

