import React, { Component }from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import {Picker, DatePicker, Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button, Text, Form, Item, Input, Icon, Textarea} from 'native-base';
import {Actions} from 'react-native-router-flux'
const choreAPI = "https://goldenchoreserver.herokuapp.com/chores"


function addChore(choreName, description, value, dateDue, assignedTo ){
    var newChoreData = {
        choreName:"",
        description:"",
        value:"",
        dateDue:"",
        assignedTo:""
    }
    newChoreData.choreName = choreName
    newChoreData.description= description 
    newChoreData.value = value
    newChoreData.dateDue =  dateDue
    newChoreData.assignedTo = assignedTo
    sendData(newChoreData)
    Actions.parentPage()
}




function sendData(choreData) {
    fetch(choreAPI, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(choreData)
    }).then(function (response) {
        return response.json()
    }).then(function (passedData) {
    }).catch(function (error) {
        console.error(error)
    })
    setTimeout(() => {
    }, 4000);
}
function deleteData(item) {
    return fetch(choreAPI + '/' + item, {
      method: "DELETE"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }

export default class AddChoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            choreName :"",
            description :"",
            value:"",
            dateDue:"",
            dataSubmitted: false,
            chosenDate: new Date(),
            selected2: ""
        }
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }



    render() {
        return (
        <Container>
            <Header>
                    <Text>
                        ADD A CHORE{console.log(this.props.kidData.map((kid)=>{
                            return"This is kid" + kid.name
                        }))}
                    </Text>
            </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input rounded placeholder="Name of Chore" onChangeText={(text)=> this.setState({choreName :{text}})} />
                        </Item>
                        <Item>
                            <Input rounded placeholder="Description of Chore" onChangeText={(text)=> this.setState({description :{text}})} /> 
                        </Item>
                        <Item>
                            <Input rounded placeholder="Coin Value" keyboardType='numeric' onChangeText={(text)=> this.setState({value :{text}})} />
                        </Item>
                        
                        <Item last>
                        <DatePicker
                            defaultDate={new Date(2018, 7, 10)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2025, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select Due Date"
                            onDateChange={this.setDate}
                            />
                            <Text>
                            {this.state.chosenDate.toString().substr(4, 12)}
                            </Text>
                        </Item>
                        <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Assign to kid"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Mike" value="Mike" />
                            <Picker.Item label="Lucy" value="Lucy" />
                            <Picker.Item label="Bobby" value="Bobby" />
                        </Picker>

                        </Item>
                        <Body>
                        
                        <Button onPress={()=>{
                            addChore(this.state.choreName.text, this.state.description.text, this.state.value.text, this.state.chosenDate, this.state.selected2)
                            
                        }}><Text>Submit</Text></Button>
                        
                        </Body>
                    </Form>
                    
                </Content>
        </Container>
        )
    }
}

