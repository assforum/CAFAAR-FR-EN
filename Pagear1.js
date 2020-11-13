import React, { Component } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity  } from "react-native";
import Constants from 'expo-constants';
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
 
} from 'react-native-responsive-screen';

class PageFr1 extends Component {
    
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.hateAlert2}>سوف تساعد في إنشاء موقع آمن</Text>
        
          <TouchableOpacity
        title="submit"
        
          onPress={() => {
           this.props.navigation.navigate('Pagear2');
          }}>
               <Text   style={styles.next1}>
               التالي 
          </Text>
        </TouchableOpacity>
        </View>
        <Image
          source={require("./assets/imageedit_3_44745781891.png")}
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
    left: wp('8%')
  },
 
  hateAlert2: {
    position:"absolute",
    color: "rgba(255,255,255,1)",
    fontSize: hp('4%'),
    top:hp('70%'),
    left:wp('8%'),
    width:wp('97%'),
    fontWeight: "bold"
  },
  next1: {

    color: "rgba(255,255,255,1)",
  fontSize: wp('8%'),
  marginTop: hp('95%'),

bottom:hp('10%'), width:wp('90%'), left:wp('-30%'), height:hp('8%')
  },
  image: {
    top: hp('11%'),
    left: wp('2%'),
    width: wp('140%'),
    height: hp('55%'),
    position: "absolute"
  },
  rect1Stack: {
    position: "absolute",
    width: wp('130%'),
    height: hp('96.7%'),
    marginLeft: wp('-5%'),

  }
});

export default PageFr1;
