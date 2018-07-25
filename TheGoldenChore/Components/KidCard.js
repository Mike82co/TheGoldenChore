import React, { Component }from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, H1, H3 } from 'native-base';
export default class KidCard extends Component {

  render() {
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../Assets/kids.jpg')} />
                <Body>
                  <H1>{this.props.data.name}</H1>
                  
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <H3>
                Current Chores: {this.props.testData.map((chore)=> {
                  if (this.props.data.name.toLowerCase() == chore.assignedTo.toLowerCase()){
                    return <Text> {chore.choreName} </Text>
                  }
                  })}
            </H3> 
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <Thumbnail small source={require('../Assets/smallCoin.png')} />
                  <Text>You have {this.props.data.balance} coins</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
  }
}