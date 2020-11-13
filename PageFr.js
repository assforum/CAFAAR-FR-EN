import React, { Component } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
   
  } from 'react-native-responsive-screen';
class PageFr extends Component {
    
  render() {
    const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.hateAlert1}>Bienvenue à CAFA</Text>
         
          <TouchableOpacity
        title="submit"
        
          onPress={() => {
           this.props.navigation.navigate('PageFr1');
          }}>
               <Text   style={styles.next1}  >
         Suivant 
          </Text>
    
        </TouchableOpacity> 
        </View>
        <Image
          source={require("./assets/imageedit_1_8951278523.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFFFFF',
      },
  rect1: {
  
    width: wp('130%'),
    height: hp('100%'),
    position: "absolute",
    backgroundColor: "rgba(16,176,177,1)",
  position:"absolute",
  left:wp('10%')
  },
  hateAlert1: {
  
    color: "rgba(255,255,255,1)",
    fontSize: hp('4.5%'),
   top:hp('65%'),
   left:wp('16%'),
   position: "absolute",
   fontWeight: "bold"
  },
  
  next1: {
    
    color: "rgba(255,255,255,1)",
    fontSize: wp('8%'),
    marginTop: hp('90%'),
left: wp('40%'),

  },
  image1: {
    top: hp('5%'),
    left: wp('7%'),
    width: wp('120%'),
    height: hp('70%'),
    position: "absolute"
  },
  rect1Stack: {
    position: "absolute",
  
    width: wp('130%'),
    height: hp('96.7%'),
    marginLeft: wp('-5%')
  }
});

export default PageFr;
