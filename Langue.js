import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
   
  } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Entypo";
import Constants from 'expo-constants';


class Langue extends Component {
    render() {
        const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
       <View>
       <ImageBackground
        source={require("./assets/undraw_Around_the_world_re_n353.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.chooseLanguage}>Choose Language</Text>
      </ImageBackground>
      <View>
      <TouchableOpacity style={styles.button1} onPress={() =>{this.props.navigation.navigate('Pagear')}}>
          <Text style={styles.arabic}>
              Arabic
          </Text>
          <Image
                source={require("./assets/tunisia.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
      </TouchableOpacity></View>
      <TouchableOpacity style={styles.buttonStack} onPress={() =>{this.props.navigation.navigate('PageFr')}}>
      <Image
              source={require("./assets/france.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.french}>French</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}onPress={() =>{this.props.navigation.navigate('Page')}}>
      <Image
                    source={require("./assets/murica.png")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.english}>English</Text>
      </TouchableOpacity>
   
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    group1: {
      top: 0,
      left: 0,
      width: 295,
      height: 52,
      position: "absolute"
    },
    rect1: {
      width: 295,
      height: 52,
      backgroundColor: "#E6E6E6",
      borderRadius: 18
    },
    option1: {
    
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 14,
      marginLeft: 113
    },
    button2: {
        top: hp('80%'),
      width: wp('80%'),
      height: hp('7%'),
      position: "absolute",
      backgroundColor: "rgba(230,230,230,1)",
      left:wp('12%'),
      borderRadius: 18,
      flexDirection: "row"
    
    },
    rect5: {
      width: 295,
      height: 52,
      borderRadius: 18,
      alignSelf: "center"
    },
    group3: {
      width: 295,
      height: 52
    },
    rect6: {
      width: 295,
      height: 52,
      backgroundColor: "#E6E6E6",
      borderRadius: 18,
      flexDirection: "row"
    },
    image4: {
        left:wp('6%'),
        top:hp('1.5%'),
      width: 40,
      height: 28
    },
    english: {
    
        color: "rgba(255,255,255,1)",
        fontSize: hp('2.8%'),
        marginLeft: wp('22%'),
        marginTop: hp('1.2%')
    },
    image4Row: {
      height: 28,
      flexDirection: "row",
      flex: 1,
      marginRight: 117,
      marginLeft: 17,
      marginTop: 13
    },
    group1Stack: {
      width: 298,
      height: 52,
      marginTop: 502,
      marginLeft: 37
    },
    group2: {
      width: 295,
      height: 52,
      marginTop: -126,
      marginLeft: 37
    },
    rect2: {
      width: 295,
      height: 52,
      backgroundColor: "#E6E6E6",
      borderRadius: 18,
      flexDirection: "row"
    },
    image3: {
      width: 40,
      height: 32,
      left:wp('5%'),
      top:hp('1.5%')
    },
    french: {
     
        color: "rgba(255,255,255,1)",
        fontSize: hp('2.8%'),
        marginLeft: wp('22%'),
        marginTop: hp('1.2%')
    },
    image3Row: {
      height: 32,
      flexDirection: "row",
      flex: 1,
      marginRight: 121,
      marginLeft: 17,
      marginTop: 11
    },
    button: {
      top: 0,
      left: 0,
      width: 295,
      height: 52,
      position: "absolute"
    },
    rect3: {
      width: 295,
      height: 52,
      backgroundColor: "#E6E6E6",
      borderRadius: 18
    },
    option3: {
    
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 14,
      marginLeft: 113
    },
    button1: {
      top: hp('-5%'),
      width: wp('80%'),
      height: hp('7%'),
      position: "absolute",
      backgroundColor: "rgba(230,230,230,1)",
      left:wp('12%'),
      borderRadius: 18,
      flexDirection: "row"
    },
   
    image2: {
      width: 40,
      height: 32,
      left:wp('-43%'),
      top:hp('1.5%')
    },
    arabic: {
     
      color: "rgba(255,255,255,1)",
      fontSize: hp('2.8%'),
      marginLeft: wp('32%'),
      marginTop: hp('1.2%')
    },
    image2Row: {
      height: 32,
      flexDirection: "row",
      flex: 1,
      marginRight: 125,
      marginLeft: 14,
      marginTop: 10
    },
    buttonStack: {
    
      marginTop: hp('70%'),
      width: wp('80%'),
      height: hp('7%'),
      position: "absolute",
      backgroundColor: "rgba(230,230,230,1)",
      left:wp('12%'),
      borderRadius: 18,
      flexDirection: "row",
      borderRadius: 18
    },
    image: {
      width: wp('90%'),
      height: hp('60%'),
      marginTop: hp('5%'),
      marginLeft: -36
    },
    image_imageStyle: {},
    icon1: {
   
      fontSize: 40,
      height: 43,
      width: 40,
      marginTop: 56,
      marginLeft: 44
    },
    chooseLanguage: {
   
      color: "rgba(16,176,177,1)",
      fontSize: hp('3.5%'),
      marginTop: hp('45%'),
      marginLeft: wp('14%')
    },
    next1: {
     
      color: "rgba(16,176,177,1)",
      fontSize: hp('3.5%'),
      
    }
  });
  
export default Langue;
