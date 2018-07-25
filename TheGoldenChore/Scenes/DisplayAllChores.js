import React, { Component }from 'react';
import { StyleSheet,  View } from 'react-native';
import { Text, Container, Header, Title, Body, Footer, Content, Left, Right, Thumbnail, Button } from 'native-base';
import {Actions} from 'react-native-router-flux'
import ChoreDescriptionCard from '../Components/ChoreDescriptionCard'

export default class DisplayAllChores extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
        };
    }

    render() {
        return (
        <Container>
            <Text>This is a page</Text>
        </Container>
    );
  }
}
