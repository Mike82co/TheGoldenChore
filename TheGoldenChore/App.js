import React, { Component }from 'react';
import { Font, AppLoading } from "expo";
import { StyleSheet, Text, View, Image, } from 'react-native';
import {Root} from 'native-base'
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import MainPage from './Scenes/MainPage'
import ParentPage from './Scenes/ParentPage'
import KidPage from './Scenes/KidPage'
import AddKidForm from './Scenes/AddKidForm'
import AddChoreForm from './Scenes/AddChoreForm'
import DisplayAllChores from './Scenes/DisplayAllChores'
import DeleteChore from './Scenes/DeleteChore'
import DeleteKid from './Scenes/DeleteKid'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      loading: true
    };
  }
  //Needed for android development
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
//This is also needed for the android development 
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    console.disableYellowBox = true;
    return (

      <Router style={styles.container}>
      <Stack key="root">        
        <Scene key="mainPage" component={MainPage} hideNavBar initial type='reset'/>
        <Scene key="parentPage" component={ParentPage} hideNavBar />
        <Scene key="kidPage" component={KidPage} hideNavBar />
        <Scene key="AddKidForm" component ={AddKidForm} hideNavBar />
        <Scene key="AddChoreForm" component ={AddChoreForm} hideNavBar /> 
        <Scene key="DisplayAllChores" component ={DisplayAllChores} hideNavBar />
        <Scene key="DeleteChore" component={DeleteChore} hideNavBar />
        <Scene key="DeleteKid" component={DeleteKid} hideNavBar />

      </Stack>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline:{
    width: 50, 
    height: 50
  }
});
