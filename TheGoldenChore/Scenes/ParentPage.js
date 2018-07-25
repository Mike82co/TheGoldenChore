import React, { Component }from 'react';
import { StyleSheet,  View, ScrollView } from 'react-native';
import { Container, Header, Title, Text, Body, Footer, Content, Left, Right, Thumbnail, Button, List, ListItem, Card, CardItem, Grid, Col,Row} from 'native-base';
import {Actions} from 'react-native-router-flux'
const kidAPI =  "https://goldenchoreserver.herokuapp.com/kids"
const choreAPI = "https://goldenchoreserver.herokuapp.com/chores"

function profilePressed(name){
    alert(name + " has'nt done shit!");
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
            this.state = { 
                choreData:[],
                kidData:[],
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
                    <Thumbnail 
                        source={require('../Assets/smallCoin.png')}/>
                </Left>
                    <Body>
                        <Title>Parents Dashboard</Title>
                    </Body>                
            </Header>
            
            <Grid>
                <Row 
                    style={{ backgroundColor: '#635DB7', height: 300, }}>
                    <Content 
                        style= {{backgroundColor: '#ff33cc'}}>
                            <Header>
                                <Text 
                                    style={{color:"white"}}>
                                        Click on kid for more information
                                </Text>
                            </Header>
                            {this.state.kidData.map((kid)=>             
                                <Card>
                                    <CardItem bordered button onPress={() => profilePressed(kid.name)} >
                                        <Body>
                                            <Text>{kid.name} has {kid.balance} coins</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            )}
                        </Content>
                </Row>
            
                <Row style={{ backgroundColor: '#00CE9F', height: 300 }}>
                    <Content>
                        <Button success block rounded style={{margin:18}} 
                                onPress={()=>{
                                    Actions.DisplayAllChores(this.state)
                                }}>
                            <Text>Show Chores</Text>
                        </Button>

                        <Grid>
                            <Button 
                                primary 
                                block 
                                style={{margin:3}} 
                                onPress={()=> {
                                    Actions.AddKidForm()
                                }}>
                                <Text>Add Kid</Text>
                            </Button> 
                            <Button 
                                danger
                                block 
                                style={{margin:3}}
                                onPress={()=>{
                                    Actions.DeleteKid(this.state)
                                }}>
                                    <Text>Delete Kid</Text>
                            </Button>
                        </Grid>
                        
                        <Grid>
                            <Button 
                                primary 
                                block 
                                style={{margin:3}} 
                                onPress={()=> {
                                    Actions.AddChoreForm(this.state)
                                }}>
                                <Text>Create Chore</Text>
                            </Button>
                            <Button 
                                danger 
                                block 
                                style={{margin:3}}
                                onPress={()=>{
                                    Actions.DeleteChore(this.state)
                                }}>
                                
                                <Text>Delete Chore</Text>
                            </Button>
                        </Grid>
                    </Content>
                </Row>
            </Grid>
            <Footer>

                <Button 
                            success 
                            block 
                            rounded 
                            style={{margin:5}} 
                            onPress={()=>{
                                Actions.mainPage()
                            }}>
                            <Text>Home Screen</Text>
                        </Button>

            </Footer>
        </Container>

    );
  }
}



