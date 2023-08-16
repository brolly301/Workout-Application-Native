import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

export default function ExerciseShow({name, type, image}) {
  return (
    <View>
      <Image source={image}/>
      <Text>{name}</Text>
      <Text>{type}</Text>
      <AntDesign name="arrowright" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({})