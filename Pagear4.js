import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground ,TouchableOpacity} from "react-native";
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp
   
  } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Entypo";
import Icons from 'react-native-vector-icons/MaterialIcons';

import Constants from 'expo-constants';

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

class Pagear4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categes: [
        { cat_id: '1', cat_name: 'التمييز على أساس الجنس', backgroundcolor: '#E6E6E6', val:"التمييز على أساس الجنس" },
        { cat_id: '2', cat_name: 'العنصرية والإقليمية', backgroundcolor: '#E6E6E6' , val:"العنصرية والإقليمية"},
        { cat_id: '3', cat_name: 'الطبقة الإجتماعية', backgroundcolor: '#E6E6E6', val:" الطبقة الإجتماعية" },
      
      ],
      change: false,
      show: false,
      type:'',
  name:'',
  url:''
    };
  }

 

  changeBackground = item => {
   
    let categes = JSON.parse(JSON.stringify(this.state.categes));

    for (let x = 0; x < this.state.categes.length; x++) {
      if (this.state.categes[x].cat_id == item.cat_id) {
        categes[x].backgroundcolor = 'rgba(16,176,177,1)';

        this.setState({
          categes: categes,
        });
        this.setState({type:item.val});
      } else {
        categes[x].backgroundcolor = '#E6E6E6';

        this.setState({
          categes: categes,
        });
      }
    }
    if (this.state.show == false) {
      this.setState({ show: true });
    
     
    } 
    
    
  };
  ButtonNext = () => {
    const { navigation } = this.props;
  firebase 
  .database()
  .ref('users').push(
  {
    type: this.state.type,
    name: navigation.getParam('name'),
    url: navigation.getParam('url'),
    

   
})
this.props.navigation.navigate('Pagear5')
}


   
  
  
     
 
    render() {
      const {navigate} = this.props.navigation;
     
  return (
    <View style={styles.container}>
      {this.state.show ? (
          <TouchableOpacity
          style={{
           position:'absolute',
            width: wp('90%'),
            height: hp('27%'),
            top:hp('70%'),
            left:wp('-9%'),
            
          
          
          }}
        
        
          onPress={this.ButtonNext}>
               <Text   style={styles.next1}  >
               التالي 
          </Text>
    
        </TouchableOpacity> 
        ) : null}
    
     
  
      
      <ImageBackground
        source={require("./assets/undraw_true_friends_c94g.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
           <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Pagear3')}}>
    <Icons name={'arrow-back'} size={50} color='#fff'  style={styles.icon1} />
</TouchableOpacity>
        <Text style={styles.question2}>نمط</Text>
      </ImageBackground>

      {this.state.categes.map((item, key) => (
          <TouchableOpacity
            style={{
              position:"relative",
              width: wp('60%'),
              height: hp('8%'),
              top:hp('16%'),
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              borderRadius: 18,
              backgroundColor: item.backgroundcolor,
            }}
            
            onPress={() => this.changeBackground(item)}>
            <Text style={{ color: '#FFFFFF' }}>
              {' '}
              {item.cat_name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
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

  next1: {
    color: "rgba(16,176,177,1)",
    fontSize: wp('8%'),


top:hp('20%'),

bottom:hp('10%'), width:wp('90%'), left:wp('-25%'), height:hp('8%')
  },
  image: {
    top: hp('0.5'),
      
        width: wp('100%'),
        height: hp('50%'),
        position: "absolute"
  },
  image_imageStyle: {},
 
    icon1: {
        color: "rgba(128,128,128,1)",
              fontSize: wp('14%'),
              height: hp('14%'),
              width: wp('25%'),
              top: hp('4%'),
              left: wp('1%')
        },
  question2: {
   
    color: "rgba(16,176,177,1)",
    fontSize: hp('4%'),
    top: hp('45%'),
    marginLeft: wp('70%'),
    position:"absolute",
  }
});

export default Pagear4;
