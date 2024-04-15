import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as AppleAuthentication from 'expo-apple-authentication';
import { jwtDecode } from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState<AppleAuthentication.AppleAuthenticationCredential | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);


  const handleLogin = async (): Promise<void> => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      setUserInfo(credential)
      // signed in
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  }

  const getContent = (): React.ReactNode => {
    if (userInfo) {
      console.log(userInfo)
      const decoded = jwtDecode(userInfo.identityToken as string) as any
      console.log(decoded)
      return (
          <Text>{decoded.sub}</Text>
      )
    }
  }

  useEffect(() => {
    const checkIfAppleAuthIsAvailable = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setIsAvailable(isAvailable)
    }

    checkIfAppleAuthIsAvailable()
  }, [])
  return (
    <SafeAreaView className="flex-1 w-full h-full py-5 bg-white/70">
      <View className="flex-1 flex-col items-center justify-center">
        {isAvailable && (
          <Button title="Sign in with Apple" onPress={handleLogin} />
        )}
      </View>

      {userInfo && (
        <View className="flex-1 flex-col items-center justify-center">
          {getContent()}
        </View>
      )}
    </SafeAreaView>
  )
}

export default LoginScreen