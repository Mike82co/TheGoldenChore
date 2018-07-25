import React, { Component }from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import { Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button, Text, Form, Item, Input, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux'
const kidAPI =  "https://goldenchoreserver.herokuapp.com/kids"

function addKid(name, balance){
    var newKidData = {
        name:"",
        balance:""
    }
    newKidData.name = name
    newKidData.balance= balance 
    sendData(newKidData)
    Actions.parentPage()
    
}
function sendData(kidData) {
    fetch(kidAPI, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(kidData)
    }).then(function (response) {
        return response.json()
    }).then(function (passedData) {
    }).catch(function (error) {
        console.error(error)
    })
    setTimeout(() => {
    }, 4000);
}
export default class AddKidForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            name:"", 
            balance:""
        };
    }
    render() {

        return (
        <Container>
            <Header>
                    <Text>
                        ADD A CHILD
                    </Text>
            </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input rounded placeholder="Name of Kid" onChangeText={(text)=> this.setState({name:{text}})} />
                        </Item>
                        <Item last>
                            <Input placeholder="Starting Coin Balance" keyboardType='numeric' onChangeText={(text)=> this.setState({balance:{text}})}/>
                        </Item>
                        <Body>
                        <Button onPress={()=>{addKid(this.state.name.text,this.state.balance.text)}}><Text>Submit</Text></Button>
                        </Body>
                    </Form>
                </Content>
        </Container>
        )
    }
}

