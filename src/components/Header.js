import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Header = ({Title, LeftIcon, RightIcon, onClickLeftIcon, onClickRightIcon}) => {
  return (
    <View style={{height:hp(8), width:wp(100)}} className="bg-blue-700 flex-row justify-between items-center absolute top-0">
      <TouchableOpacity style={{height:hp(8), width:hp(8)}} className="justify-center items-center" onPress={()=>{onClickLeftIcon();}}>
        <Ionicons name={LeftIcon} size={30} color="#fff"/>
      </TouchableOpacity>

      <Text style={{}} className="text-white text-base">{Title}</Text>

      <TouchableOpacity style={{height:hp(8), width:hp(8)}} className="justify-center items-center">
        <Ionicons name={RightIcon} size={30} color="#fff"/>
      </TouchableOpacity>

    </View>
  )
}

export default Header