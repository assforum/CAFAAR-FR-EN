import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground ,TouchableOpacity,Alert} from "react-native";
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
   
  } from 'react-native-responsive-screen';
  import * as ImagePicker from 'expo-image-picker';
  import Constants from 'expo-constants';
  import Icon from "react-native-vector-icons/Entypo";
  import Icons from 'react-native-vector-icons/MaterialIcons';

  import * as Permissions from 'expo-permissions';

import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import * as firebase from 'firebase';

import GradientButton from 'react-native-gradient-buttons';


// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBz01LRGY-LEqmkp_gqyAy8I1jAbGqt23Y',
  authDomain: 'test1909-5eca8.firebaseapp.com',
  databaseURL: 'https://test1909-5eca8.firebaseio.com',
  projectId: 'test1909-5eca8',
  storageBucket: 'test1909-5eca8.appspot.com',
  messagingSenderId: '902654891927',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
class Page5 extends Component {
  state = {
    image: null,
    name:'',
    show: false,
  };
 
  upload_button = () => {
    console.log(this.state.imageuri);
    this.upload_firebase(this.state.image,Date.now())
      .then(()=>{
        Alert.alert("Success!");
        this.props.navigation.navigate('Page7'); 
      }).catch((error)=>{
        Alert.alert("please choose  photo first !");
      });
  }
  upload_firebase = async (uri,imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref= firebase.storage().ref().child("image/"+imageName);
    return ref.put(blob);
  }
  

  render() {
    let { image } = this.state;
    const {navigate} = this.props.navigation;

       
    return (
        <View style={styles.container}>
          <View style={styles.question2StackStack}>
            <View style={styles.question2Stack}>
              <Text style={styles.question2}>Take photo or upload.</Text>
              <ImageBackground
                source={require("./assets/imageedit_7_8700962589.png")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image_imageStyle}
              >
            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Page4')}}>
    <Icons name={'arrow-back'}  color='#fff'  style={styles.icon1} />
</TouchableOpacity>
              </ImageBackground>
            </View>
            
            <FontAwesomeIcon
              name="file-picture-o"
              style={styles.icon}
              onPress={this._pickImage}              
            ></FontAwesomeIcon>
           
            <EntypoIcon name="camera" style={styles.icon2}
             onPress={() =>{this.props.navigation.navigate('Cam')}}
            ></EntypoIcon>
          
          </View>
          <View style={styles.uploadRow}>
         
            <Text style={styles.upload}>Upload</Text>
            
            <Text style={styles.camera}>Camera</Text>
            <Text style={styles.orTapHere}  onPress={()=>this._pickImage()} >or Tap Here</Text>
          </View>
        

          <View style={styles.rect} >
     
          {image &&
          <Image source={{ uri: image }} style={styles.image} />}
        
       
          
      
    
                  </View>
           
                  <TouchableOpacity
         style={{
          position:'absolute',
           width: wp('90%'),
           height: hp('27%'),
           top:hp('70%'),
           left:wp('-2%'),
           
         
         
         }}
        
        
    onPress={() =>{
            this.upload_button();
         
          }}>
               <Text   style={styles.next1}  >
               Next 
          </Text>
    
        </TouchableOpacity> 
        </View>
      );
    }
    
  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    
  };
    
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#FFFFFF',
          },
      question2: {
        top: hp('38%'),
        left: wp('25%'),
        position: "absolute",
      
        color: "rgba(16,176,177,1)",
        fontSize: hp('4%')
      },
      cameraButtons: {
        position:'relative',
          top: hp('20%'),
      
          width:wp('40%'),
        left:wp('11%'),

          height:hp('8%')
         
        },
      image: {
        top:hp('-1%'),
        width: wp('71%'),
        height: hp('21%'),
        left:wp('-1%'),
      
        borderRadius: 14,      },
      image_imageStyle: {},
      icon1: {
        color: "rgba(128,128,128,1)",
              fontSize: wp('15%'),
              height: hp('14%'),
              width: wp('16%'),
              top: hp('6%'),
              left: wp('5%')
        },
        
      question2Stack: {
        top: hp('0%'),
        left: wp('0%'),
        width: wp('100%'),
        height: hp('100%'),
        position: "absolute"
      },
      icon: {
        top: hp('44%'),
        left: wp('16%'),
        position: "absolute",
        color: "rgba(16,176,177,1)",
        fontSize: hp('15%')
      },
      icon2: {
        top: hp('44%'),
        left: wp('80%'),
        position: "absolute",
        color: "rgba(16,176,177,1)",
        fontSize: hp('15%')
      },
      question2StackStack: {
        width: wp('80%'),
        height: hp('40%'),
        top: hp('-25%'),
        left: wp('-23%')
      },
      upload: {
       position:"absolute",
        color: "rgba(16,176,177,1)",
        fontSize: hp('3%'),
        top: hp('-10%'),
        left:wp('-45%')
      },
      camera: {
        position:"absolute",
        color: "rgba(16,176,177,1)",
        fontSize: hp('3%'),
        top: hp('-10%'),
        left: wp('20%')
      },
      uploadRow: {
        height: 29,
        flexDirection: "row",
        marginTop: 33,
        marginLeft: 58,
        marginRight: 57
      },
      rect: {
        width: wp('70%'),
        height: hp('15%'),
        borderWidth: 3,
        borderColor: "#000000",
        borderStyle: "dashed",
        borderRadius: 14,
        top: hp("73%"),
        left: wp('17%'),
        position:"absolute"
      },
      orTapHere: {
     
        color: "rgba(74,74,74,1)",
        fontSize: hp('3.5%'),
        top: hp('3%'),
        left: wp('-18%'),
        position:"absolute"
      },
      image1:{
        top: hp('-6%'),
        left: wp('8%'),
        width: wp('120%'),
        height: hp('50%'),
        position: "absolute"
      },
      next1: {
        color: "rgba(16,176,177,1)",
        fontSize: wp('8%'),
    width:wp('90%'),
    height:hp('8%'),
    left:wp('40%'),
    top:hp('24%'),
      },
    });
    
    export default Page5;
    