import * as React from 'react';
import { Button, Image, View,TouchableOpacity ,StyleSheet, Alert,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import Icons from 'react-native-vector-icons/MaterialIcons';
import GradientButton from 'react-native-gradient-buttons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
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

class Galerie extends React.Component {
  state = {
    image: null,
    name:''
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
     <LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity style={styles.t} onPress={() =>{this.props.navigation.navigate('Page5')}}>
    <Icons name={'arrow-back'} size={50} color='#fff'  style={{marginLeft: '3%'}} />
</TouchableOpacity>
    <View style={styles.div}>
      <TouchableOpacity   onPress={this._pickImage}  style={styles.t1}>
      <Image style={styles.logo1} source={require('./assets/galerie.png')} resizeMode="stretch"/>
      <Text
                   style={styles.text1}
                  >
                   Choose from gallery
                  </Text>
      
      </TouchableOpacity>
    
     
        {image &&
          <Image source={{ uri: image }} style={styles.image} />}
  <TouchableOpacity        onPressAction={() =>{
    this.upload_button
      console.log(this.state.type),
           this.props.navigation.navigate('Page7', {
            name: this.state.name
           });
   } }>
        <View>
  <GradientButton
                  style={styles.cameraButtons}
                  text=" Upload photo"
                  textStyle={{ fontSize: 20 }}
                  gradientBegin="#3FE8C9"
                  gradientEnd="#01DF74"
                  onPressAction={this.upload_button}
                 
                  /></View>
      </TouchableOpacity>
        </View>
        </LinearGradient>
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
  
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFFFFF',
        width: wp(100),
        height:hp(100),
      },
    
      div: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: wp(5),
      right: wp(5),
       
        borderRadius: 30,
        width: wp(90),
        height:hp(85),
        top:wp(22),
      
        backgroundColor: 'rgba(238, 247, 245, 0.94)',
        },
        linearGradient:{
    
            alignContent:'center',
            position: 'absolute',
    width: wp(100),
    height:hp(100),
    
            },
            t1:{
              borderRadius: 11,
          width:wp(75),
          position: 'absolute',
          left:wp(8),
          top:wp(3),
          height:hp(35),
           
            },
           
            logo1:{
              borderRadius:4,
          width:wp(86),
          height:hp(25),
          left:wp(-6),
          top:wp(3)
      
            },

          
            buttonText:{
              left:wp(28),
              fontWeight:'bold',
              
            },
            cameraButtons: {
            position:'relative',
              top: hp(5),
            
              width:wp(40),
            left:wp(1),
              height:hp(8.5)
             
            },
           image:{
             top:hp(2),
             width: wp(70), height: hp(10) 
           },text1:{
            color:'#CD2C09',
            fontWeight:'bold',
            left:wp(17),
            fontSize:wp(5),
            top:hp(3)
          },
           text2:{
             left:wp(4),
             color:'white',
             fontWeight:'bold',
             top:hp(1)
           }
});
export default Galerie;