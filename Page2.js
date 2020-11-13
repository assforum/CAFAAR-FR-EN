import React, { Component } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity  } from "react-native";
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
 
} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

class Page2 extends Component {
    
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.hateAlert1}>Make a change to the web</Text>
         
          <TouchableOpacity
        title="submit"
        
          onPress={() => {
           this.props.navigation.navigate('Page3');
          }}>
          <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("./assets/imageedit_5_42520233531.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
  },
  rect1: {
    top: 0,
    width: wp('130%'),
    height: hp('100%'),
    position: "absolute",
    backgroundColor: "rgba(16,176,177,1)",
    left: wp("10%")
  },
  hateAlert1: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: hp('4%'),
   top:hp('60%'),
   left:wp('20%'),
   width:wp('90%'),
   fontWeight: "bold"
  },

  getStarted: {
    
    color: "rgba(255,255,255,1)",
    fontSize: wp('8%'),
    marginTop: hp('90%'),
left: wp('40%')
  },
  image: {
    top: hp('10%'),
  left:wp('18%'),
     width: wp('110%'),
    height: hp('55%'),
    position: "absolute"
  },
  rect1Stack: {
    width: wp('145%'),
    height: hp('96.7%'),
    marginLeft: wp('-4%'),
    position:"absolute",
   
  }
});

export default Page2;
