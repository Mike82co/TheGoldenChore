import React, { Component }from 'react';
import { StyleSheet,  View } from 'react-native';
import { Text, Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button } from 'native-base';
import {Actions} from 'react-native-router-flux'
import KidCard from '../Components/KidCard'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
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
                        <Title>Rugrats!</Title>
                    </Body>                
            </Header>
                <Content style ={{backgroundColor:'#ff33cc'}}>
                    {this.props.kidData.map((kid)=> <KidCard data={kid} testData={this.props.choreData}/>  )}
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

