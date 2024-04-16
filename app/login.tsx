import "core-js/stable/atob";
import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as AppleAuthentication from 'expo-apple-authentication';
import { jwtDecode } from 'jwt-decode';
import { SocialRegisterData, socialRegister } from "@/services/authServices";

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
      const { identityToken, fullName, email } = credential;
      console.log("Credentials :", credential)
      const decoded = jwtDecode(identityToken as string);
      console.log("Decoded :", decoded)

      const data: SocialRegisterData = {
        appId: decoded.sub as string,
        name: fullName?.givenName as string,
        provider: "APPLE",
        email: email as string,
      };

      console.log(data)
      const res = await socialRegister(data);
      console.log(res)
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
      const decoded = jwtDecode(userInfo.identityToken as string) as any
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