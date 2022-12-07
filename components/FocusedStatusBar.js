import { View, Text } from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = () => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar animated = {true} {...props}/> : null
}

export default StatusBar