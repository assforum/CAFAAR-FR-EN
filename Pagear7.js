import React, { Component } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity  } from "react-native";
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
   
  } from 'react-native-responsive-screen';
import { exitApp }from 'react-native-back-android' ;
import Constants from 'expo-constants';

class Pagear7 extends Component {
    
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.hateAlert1}>شكرا جزيلا</Text>
          <Text style={styles.hateAlert2}>أنت بطل إنترنت خارق الآن كن فخوراً</Text>
          <TouchableOpacity
        title="submit"
        
          onPress={() => {
           this.props.navigation.navigate('Pagear3');
          }}>
          <Text style={styles.getStarted}>افعلها مرة أخرى</Text>
          </TouchableOpacity>
          <TouchableOpacity
        title="submit"
        
          onPress={() => {
            exitApp()
          }}>
          <Text style={styles.quit}>غادر</Text>
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
        fontSize: hp('5%'),
       top:hp('50%'),
       left:wp('40%'),
       fontWeight: "bold"
      },
      hateAlert2: {
        position: "absolute",
        color: "rgba(255,255,255,1)",
        top:hp('60%'),
        left:wp('7%'),
        fontSize: hp('3%'),
        fontWeight: "bold",
        width:wp('96%')
      },
  getStarted: {
    
    color: "rgba(255,255,255,1)",
    fontSize: wp('7%'),
    marginTop: hp('75%'),
  
  width:wp('90%'), left:wp('-5%'), height:hp('5%')
  },
  quit : {
    color: "rgba(255,255,255,1)",
    fontSize: wp('8%'),
    marginTop: hp('0%'),
  
   width:wp('90%'), left:wp('-25%'), height:hp('8%')

  },
  image: {
    top: hp('10%'),
    left:wp('18%'),
       width: wp('110%'),
      height: hp('55%'),
      position: "absolute"
  },
  rect1Stack: {
    position: "absolute",
    width: wp('140%'),
    height: hp('96.7%'),
    marginLeft: wp('-5%'),
   

  }
});

export default Pagear7;
