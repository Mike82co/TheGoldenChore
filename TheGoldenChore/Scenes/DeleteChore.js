import React, { Component }from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import {Picker, DatePicker, Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button, Text, Form, Item, Input, Icon, Textarea} from 'native-base';
import {Actions} from 'react-native-router-flux'
const choreAPI = "https://goldenchoreserver.herokuapp.com/chores"

function deleteData(item) {
    return fetch(choreAPI + '/' + item, {
      method: "DELETE"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }

export default class DeletChore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            selected2: ""
        }
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }


    render() {
        return (
        <Container >
            <Header>
                    <Text>
                        What chore would you like to remove?
                    </Text>
            </Header>
                <Content>
                    <Form>
                        
                        <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Chore?"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Dishes" value= "1" />
                            <Picker.Item label="Laundry" value="2" />
                            <Picker.Item label="Feed The Pooch" value="3" />
                        </Picker>
                        </Item>
                        <Body>
                        
                        <Button onPress={()=>{
                            deleteData(this.state.selected2)
                            Actions.pop()
                            
                        }}><Text>Submit</Text></Button>
                        </Body>
                    </Form>
                </Content>
        </Container>
        )
    }
}

