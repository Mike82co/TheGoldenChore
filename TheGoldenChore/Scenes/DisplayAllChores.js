import React, { Component }from 'react';
import { StyleSheet,  View } from 'react-native';
import { Text, Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button } from 'native-base';
import {Actions} from 'react-native-router-flux'
import KidCard from '../Components/KidCard'
import ChoreDescriptionCard from '../Components/ChoreDescriptionCard';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            passedChoreData: this.props.data
        };
    }

    render() {
        return (
        <Container>
            <Header>
                <Left>
                <Thumbnail source={require('../Assets/smallCoin.png')} />
                </Left>
                    <Body>
                        <Title>List of Chores</Title>
                    </Body>                
            </Header>
                <Content style ={{backgroundColor:'#ff33cc'}}>
                
                <ChoreDescriptionCard data={this.props.choreData[0]} />
                <ChoreDescriptionCard data={this.props.choreData[1]} />
                <ChoreDescriptionCard data={this.props.choreData[2]} />

                </Content>
            <Footer><Button rounded success style={{margin:5}}  onPress={()=>{
                        Actions.mainPage()
                    }}>
            <Text>Home Screen</Text>
            </Button></Footer>
        </Container>
    );
  }
}