import React, { Component } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity, ImageBackground ,TextInput,Animated,Button} from "react-native";
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
    
   
  } from 'react-native-responsive-screen';
  import GradientButton from 'react-native-gradient-buttons';

  import Icon from "react-native-vector-icons/Entypo";
  import Icons from 'react-native-vector-icons/MaterialIcons';
 
import Constants from 'expo-constants';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import * as firebase from 'firebase';

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
class Page3 extends Component {
  state={
    shift: new Animated.Value(0),

  name:'',
  url:'',


}

CheckTextInput = () => {
  const alph = /^[a-zA-Z ]+$/;
  const urlforma =  /^(?:(?:https?|ftp|http):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const { navigation } = this.props;
  
   // condition input nom

  if (this.state.name == ''){
    this.nameValidate=false;
     this.setState({
      errorname :  
      "This field must be completed!"
    });
    
    
  }
  else if (!alph.test(this.state.name) && this.state.name != '' ) {
    this.nameValidate=false;
                this.setState({
      errorname :  
      "The name field should only contain letters!"
    });
    }
    else if (!alph.test(this.state.name) ) {
    this.nameValidate=false;
    this.setState({
      errorname : 
      "The name field should only contain letters!"
    });
    }
     if(alph.test(this.state.name) && this.state.name != ''){
     this.nameValidate=true;
     this.setState({
      errorname :  ''
    });
  }
  



  
  // condition input URL
  
  if (this.state.url == ''){
    this.urlValidate=false;
     this.setState({
      errorurl : 
      "This field must be completed!"
    });
    
    
  }else if (!urlforma.test(this.state.url) && this.state.url != '' ) {
    this.urlValidate=false;
                this.setState({
      errorurl :  'http://www.exemple.com !'
    });
    }
    else if (!urlforma.test(this.state.url) ) {
    this.urlValidate=false;
    this.setState({
      errorurl :"This field must be another way!"
    });
    }
     if(urlforma.test(this.state.url) && this.state.url != ''){
     this.urlValidate=true;
     this.setState({
      errorurl :  ''
    });
  }
   

    if (
    
      this.nameValidate &&
      this.urlValidate ) {
        this.props.navigation.navigate('Page4',{
           name:this.state.name,
          url:this.state.url,});}}
  
    

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAwareScrollView
      enableOnAndroid
      
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
        <View >
        
            <ImageBackground
                source={require("./assets/undraw_Friends_online_re_r7pq.png")}
                resizeMode="contain"
                style={styles.image}
              >
              </ImageBackground>
           
            
<View style={styles.div}>
<Text  style={styles.question1}
>
Fill in the following fields:</Text>
<Text style={styles.urlDuSite}>Name of the site</Text>

      <TextInput
        placeholder="name of the site "
        style={styles.inputStyle}
        onChangeText={name => this.setState({ name })} value={this.state.name}
      />
       <Text style={styles.aa}>{this.state.errorname}</Text>

      <Text style={styles.helper}></Text>
      <Text style={styles.nomDuSite}>Site url</Text>
      <TextInput placeholder="http://www.hatepage.com" style={styles.inputS} onChangeText={url => this.setState({ url })} value={this.state.url}/>
      <Text style={styles.aa2}>{this.state.errorurl}</Text>

      <Text style={styles.helper}>
        
If in Arabic, type the name in Latin characters
        
      </Text>
      <TouchableOpacity
          style={{
           position:'absolute',
            width: wp('50%'),
            height: hp('27%'),
            top:hp('70%'),
            left:wp('-2%'),
            
          
          
          }}
        
        
    onPress={() =>{
            this.CheckTextInput();
         
          }}>
               <Text   style={styles.next}  >
               Next 
          </Text>
    
        </TouchableOpacity>

    
         </View>
 
        
        
         </View>
         </KeyboardAwareScrollView>
      );
    }
}
    const styles = StyleSheet.create({
     
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          },
      question1: {
        top: hp('16%'),
        left: wp('7%'),
        position: "absolute",
      
        color: "rgba(16,176,177,1)",
        fontSize: hp('3.3%')
      },
     
      icon1: {
        color: "rgba(128,128,128,1)",
        fontSize: wp('10%'),
        top: hp('-40%'),
        left:wp('-40%')
        
        },
        div:{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          
          borderRadius: 30,
          width: wp(90),
          height:hp('90%'),
        
        },
      
      next: {
      
        color: "rgba(16,176,177,1)",
        fontSize: wp('8%'),
    width:wp('60%'),
    height:hp('8%'),
    left:wp('38%'),
    top:hp('0%'),

  
      },
      image:{
        width: wp('95%'),
        top:hp('-30%'),
        height: hp('60%'),

      },
      urlDuSite: {
        position:"absolute",
        fontSize: hp('3%'),
        color: "#000",
        left:wp('9'),
        opacity: 0.6,
       top:hp('32')
      },
      inputStyle: {
        position:"absolute",
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        fontSize: 16,
        top: hp('37%'),
        flex: 1,
        paddingBottom: 8,
        width: wp("78%"),
        left:wp('9'),
      },
   
      nomDuSite: {
        position:"absolute",
        fontSize: hp('3%'),
        color: "#000",
        left:wp('9'),
        opacity: 0.6,
       top:hp('44')
      },
      inputS: {
        position:"absolute",
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        color: "#000",
        fontSize: 16,
        alignSelf: "stretch",
        lineHeight: 1,
        top: hp('49%'),
        flex: 1,
        paddingBottom: 8,
        width: wp("78%"),
        left:wp('9'),
      },
      helper: {
        position:"absolute",
        fontSize: 12,
        textAlign: "left",
        color: "#000",
        opacity: 0.6,
    top:hp('60')
      },
      aa:{
        color:'red',
        top:hp('0%')
      },
      aa2:{
        color:'red',
        top:hp(9)
      },
    });
    
    export default Page3;
    