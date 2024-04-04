import { SafeAreaView, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";
import { useChat } from "@/contexts/ChatContext";

export default function TabOneScreen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const { fetchChats } = useChat();

  useEffect(() => {
    fetchChats();
  }, [])

  return (
    <SafeAreaView className="flex-1 w-full h-full py-5">
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 flex-col items-center justify-center space-y-5">
          <Link href="/" className="text-blue-500 font-bold text-xl">
            HOME
          </Link>
          <Link href="/keyboard" className="text-blue-500 font-bold text-xl">
            KEYBOARD
          </Link>
          <Link href="/chat" className="text-blue-500 font-bold text-xl">
            CHAT
          </Link>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
