import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import Acceuil from './Acceuil';
import Langue from './Langue';
import PageFr1 from './PageFr1';

import PageFr2 from './PageFr2';
import PageFr3 from './PageFr3';

import PageFr4 from './PageFr4';
import PageFr5 from './PageFr5';
import PageFr7 from './PageFr7';
import PageFr from './PageFr';
import Page1 from './Page1';

import Page2 from './Page2';
import Page3 from './Page3';

import Page4 from './Page4';
import Page5 from './Page5';
import Page7 from './Page7';
import Cam from './Cam';
import Camar from './Camar';
import CamFr from './CamFr';
import Galerie from './Galerie';
import Page from './Page';
import Pagear from './Pagear';
import Pagear1 from './Pagear1';
import Pagear2 from './Pagear2';
import Pagear3 from './Pagear3';
import Pagear4 from './Pagear4';
import Pagear5 from './Pagear5';
import Pagear7 from './Pagear7';



import {Card} from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppStack = createStackNavigator({ Page1: Page1,Page2: Page2, Acceuil:Acceuil,Page3: Page3,
  Page4 :Page4, Page: Page , Page5: Page5, Page7: Page7 ,Cam:Cam,Galerie:Galerie,Langue:Langue,
  PageFr4 :PageFr4, 
  PageFr: PageFr ,
  PageFr5: PageFr5
  ,PageFr3: PageFr3,PageFr1:PageFr1,PageFr7:PageFr7,CamFr:CamFr,
  Pagear4 :Pagear4, 
  Pagear: Pagear ,
  Pagear5: Pagear5
  ,Pagear3: Pagear3,Pagear1:Pagear1,Pagear7:Pagear7,Camar:Camar });

  
export default createAppContainer(
  createSwitchNavigator(
    { 
   
      Acceuil,
      Langue,
      Page,
      Page1,
      Page2,
      Page3,
      Page4,
      
      Page5,
      Page7,
      PageFr,
      PageFr1,
      PageFr2,
      PageFr3,
      PageFr4,
      
      PageFr5,
      PageFr7,
      CamFr,
      Pagear,
      Pagear1,
      Pagear2,
      Pagear3,
      Pagear4,
      
      Pagear5,
      Pagear7,
      Camar,
      Cam,
      Galerie
    
      

    },
    
    {
      initialRouteName: 'Acceuil',
    }
  )
);