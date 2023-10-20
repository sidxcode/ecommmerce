import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import User from './tabs/User';
import Home from './tabs/Home';
import Notification from './tabs/Notification';
import Search from './tabs/Search';
import Wishlist from './tabs/Wishlist';
const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View className= "flex-1">


        {selectedTab==0?(<Home/>):selectedTab==1?(<Search/>):selectedTab==2?(<Wishlist/>):selectedTab==3?(<Notification/>):(<User/>)}

        <View style={{width: wp(100) , height: hp(10)}} className="bg-white absolute bottom-0 flex-row justify-evenly items-center">
          <TouchableOpacity style={{width:wp(20), height:hp(10)}} className=" justify-center items-center" 
            onPress={()=>{
              setSelectedTab(0);
            }}
          >
            <Ionicons name={selectedTab==0?"home":"home-outline"} size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp(20), height:hp(10)}} className=" justify-center items-center"
            onPress={()=>{
              setSelectedTab(1);
            }}
          >
            <Ionicons name={selectedTab==1?"search":"search-outline"} size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp(20), height:hp(10)}} className=" justify-center items-center"
            onPress={()=>{
              setSelectedTab(2);
            }}
          >
            <Ionicons name={selectedTab==2?"heart":"heart-outline"} size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp(20), height:hp(10)}} className=" justify-center items-center"
            onPress={()=>{
              setSelectedTab(3);
            }}
          >
            <Ionicons name={selectedTab==3?"notifications":"notifications-outline"} size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp(20), height:hp(10)}} className="justify-center items-center"
            onPress={()=>{
              setSelectedTab(4);
            }}
          >
            <Ionicons name={ selectedTab==4?"person":"person-outline"} size={24} color="black"/>
          </TouchableOpacity>

        </View>
    </View>
  )
}

export default HomeScreen