import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import Constants from 'expo-constants';
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
 
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
 

class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width
    };
  }

 
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Langue');
      }, 5000);
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.hateAlert}>CAFA</Text>
        </View>
        <Image
          source={require("./assets/imageedit_1_9531130008.png")}
     
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
 
  rect: {
    top: 0,
    width: wp('100%'),
    height: hp('100%'),
    position: "absolute",
    backgroundColor: "rgba(16,176,177,1)"
  },
  hateAlert: {
    
    color: "rgba(255,255,255,1)",
    top:hp('-10%'),
    fontSize: wp('14%'),
    marginTop: hp('45%'),
    marginLeft: wp('30%'),
    position: "absolute",
    fontWeight: "bold"
  },
  image1: {
    top: hp('38%'),
  left:wp('0.5%'),
    width: wp('103%'),
    height: hp('50%'),
    position: "absolute"
  },
 
  rectStack: {
    position: "absolute",
    width: wp('100%'),
    height: hp('96.7%'),
    marginLeft: wp('-5%'),
 
  }
});

export default Acceuil;
