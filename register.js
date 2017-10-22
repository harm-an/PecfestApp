import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback,
  Image,
  StatusBar,
  ScrollView, 
  TextInput,
  TouchableWithoutFeedback,
  Picker,
  CheckBox
} from 'react-native';

import Login from './login.js'
import Profile from './Profile.js'
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb',statusBarLight: '#f0f0f0'};


export default class Register extends Component{

  state = {
    pecfestID : "pecfest ID",
    value: "Home"
  }

  goBack = screen => {
    this.setState({ value: screen })

    //Alert.alert(message)
  }
	
	render(){
    switch(this.state.value){
      case 'Home':
    		return (
    			<ScrollView style= {{flex: 1, backgroundColor: '#ffffff'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'white', height: 56, width: Dimensions.get('window').width}}>
              <TouchableNativeFeedback onPress={this.goBack.bind(this, this.props.from)} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                   <View style={styles.navButton}>
                    <Image source = {require('./icons/ic_arrow_back.png')}  style={[styles.tabIcon, {tintColor: colors.normal}]}/>
                   </View>           
                </TouchableNativeFeedback>
            </View>

            <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
            <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 22, marginTop: 16}}>Sign Up</Text>
                      <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 12, marginBottom: 16}}>The fun is just few details away.</Text>
                        
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <TextInput style={{position: 'absolute', top: 3, width: Dimensions.get('window').width-32, borderWidth: 0, borderColor: 'white', textAlign: 'center',fontFamily: 'Montserrat-Regular', fontSize: 22, height: 49, color: colors.teal}} placeholder={'Your Name'} underlineColorAndroid={'white'} autoCapitalize={'characters'} blurOnSubmit={false} selectionColor={colors.teal}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <TextInput style={{position: 'absolute', top: 3, width: Dimensions.get('window').width-32, borderWidth: 0, borderColor: 'white', textAlign: 'center',fontFamily: 'Montserrat-Regular', fontSize: 22, height: 49, color: colors.teal}} placeholder={'Your Email ID'} underlineColorAndroid={'white'} autoCapitalize={'characters'} blurOnSubmit={false} selectionColor={colors.teal}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <TextInput style={{position: 'absolute', top: 3, width: Dimensions.get('window').width - 32, borderWidth: 0, borderColor: 'white', textAlign: 'center',fontFamily: 'Montserrat-Regular', fontSize: 22, height: 49, color: colors.teal}} placeholder={'Your Mobile Number (in 10 digits)'} underlineColorAndroid={'white'} autoCapitalize={'characters'} blurOnSubmit={false} selectionColor={colors.teal}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <TextInput style={{position: 'absolute', top: 3, width: Dimensions.get('window').width - 32, borderWidth: 0, borderColor: 'white', textAlign: 'center',fontFamily: 'Montserrat-Regular', fontSize: 22, height: 49, color: colors.teal}} placeholder={'Your College'} underlineColorAndroid={'white'} autoCapitalize={'characters'} blurOnSubmit={false} selectionColor={colors.teal}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <Picker style={{width: Dimensions.get('window').width - 32, alignItems: 'center', color: colors.teal}} mode={'dropdown'} itemStyle={{alignItems: 'center', color: colors.teal}} prompt={"Gender"}>
                <Picker.Item label="Your Gender" value="null" />
                <Picker.Item label="M" value="M" />
                <Picker.Item label="F" value="F" />
              </Picker>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 32, width: Dimensions.get('window').width-32}}>
              <Picker style={{width: Dimensions.get('window').width - 32, alignItems: 'center', color: colors.teal}} mode={'dropdown'} itemStyle={{alignItems: 'center', color: colors.teal}} prompt={"Gender"}>
                <Picker.Item label="Accomodation" value="null" />
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
            <TouchableWithoutFeedback  background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                        <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 32, width: Dimensions.get('window').width-32}}>
                          <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Next</Text>
                        </View>
                      </TouchableWithoutFeedback>
    

          </ScrollView>
    		)
      case 'login':
        return(
          <Login />
        )
      case 'profile':
        return(
          <Profile />
        )
    }
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  eventCard:{
    backgroundColor: '#ffffff',
    elevation: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 8,
    elevation: 2,
    borderRadius: 4,
    width: Dimensions.get('window').width-16,
    justifyContent: 'center'
  },

  button: {
    height: 40,
    width: 120,
    right: 0,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
  },

  teamSize:{
    fontFamily: 'Montserrat-Regular',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    //paddingBottom: 16,
  },

  logoText:{
    fontFamily: 'Montserrat-Medium',
    color: colors.teal,
    fontSize: 36,
    paddingTop: 0,
    //paddingBottom: 16,
  },

  sponsorText:{
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 30,
    marginTop: 32,
    //paddingBottom: 16,
  },

  prizeMoney:{
    fontFamily: 'Montserrat-Regular',
    color: colors.teal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 16,
  },
  eventName: {
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 32,
    paddingTop: 0,
    paddingBottom: 0,
  },

  eventDescription:{
    fontFamily: 'Montserrat-Light',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 0,

  },

  organiserHadding: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 34,
    paddingLeft: 16,
    //paddingTop: 16,
    paddingBottom: 0,
  },
  mainHadding: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 36,
    paddingLeft: 16,
    paddingTop: 0,
    paddingBottom: 16,
  },

  brief:{
    fontFamily: 'Montserrat-Light',
    color: '#484848',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 16
  },

  navButton: {
    position: 'absolute',
    left:0,
    top:0,
    backgroundColor: 'white',
    width:56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButton2: {
    position: 'absolute',
    right:0,
    top:0,
    backgroundColor: colors.teal,
    width:56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar:{
    height: 56,
    backgroundColor: colors.teal,
    flexDirection: 'row'
  },

  scrollContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom:0,
    backgroundColor: '#ffffff',
  },

  scrollContainer2: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom:0,
    backgroundColor: '#ffffff',
  },

  tabBarStyle: {
  	flexDirection: 'row',
  	backgroundColor: '#ffffff',
  },

  underLineStyle: {
  	backgroundColor: '#a51c30',
  	height: 1.5,
  },
  indicator: {
    backgroundColor: '#a51c30',
  },

  tab: {
  	width: Dimensions.get('window').width/2,
  },

  tabIcon: {
    
    height: 24,
    width: 24,
  },

  logo: {
    
    height: 80,
    width: 80,
  },

  sponsor: {
    
    height: 80,
  },

  label: {
    color: '#a5a59a',
    //fontWeight: '500',
    fontFamily: 'Montserrat-Light',

  },
  categoryLabel: {
    color: '#008489',
    //fontWeight: '500',
    fontFamily: 'Montserrat-Light',
    fontSize: 26,

  },


  category: {
  	backgroundColor: "#ffffff",
  	justifyContent: 'center',
  	alignItems: 'center',
  	//marginTop: 10,
  	flex:1,

  }
});