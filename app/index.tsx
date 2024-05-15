import { SafeAreaView, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";
import { useChat } from "@/contexts/ChatContext";

export default function TabOneScreen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const { fetchChats } = useChat();

  // useEffect(() => {
  //   fetchChats();
  // }, [])

  return (
    <SafeAreaView className="flex-1 w-full h-full py-5">
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-col items-center justify-center flex-1 space-y-5">
          <Link href="/" className="text-xl font-bold text-blue-500">
            HOME
          </Link>
          <Link href="/keyboard" className="text-xl font-bold text-blue-500">
            KEYBOARD
          </Link>
          <Link href="/chat" className="text-xl font-bold text-blue-500">
            CHAT
          </Link>
          <Link href="/mood" className="text-xl font-bold text-blue-500">
            MOOD
          </Link>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
