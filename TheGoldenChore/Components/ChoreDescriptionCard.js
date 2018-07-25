import React, { Component }from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, H1, H3 } from 'native-base';

export default class ChoreDescriptionCard extends Component {

  render() {
    return (
        <Card key={this.props.key}>
        <CardItem>
          <Left>
            <Thumbnail source={require('../Assets/kids.jpg')} />
            <Body>
              <H1>{this.props.data.choreName}</H1>
              
              <Text note>Currently assigned to {this.props.data.assignedTo}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        <H3>
            {this.props.data.description}
        </H3> 
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
            <Thumbnail small source={require('../Assets/smallCoin.png')} />
              <Text>This chore is worth  {this.props.data.value}  coins</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}