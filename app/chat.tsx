import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatScreen = (): React.ReactNode => {
  return (
    <SafeAreaView>
      <Text className='text-white text-3xl font-bold'>ChatScreen</Text>
    </SafeAreaView>
  )
}

export default ChatScreen