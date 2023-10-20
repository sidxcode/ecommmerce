import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <View className="flex-1">
        <Header 
            LeftIcon="menu" 
            RightIcon="cart-outline"
            Title={"Grocery App"}
            onClickLeftIcon={()=> {
                navigation.openDrawer();
            }}
        />
    </View>
  )
}

export default Home