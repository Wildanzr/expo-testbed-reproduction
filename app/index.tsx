import { Button, SafeAreaView, TouchableOpacity, View, Text, Pressable } from "react-native";
import React, { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
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
          <Link href="/voice" className="text-xl font-bold text-blue-500">
            VOICE
          </Link>

          <Button title="Test Button 1" onPress={() => console.log("Test Button 1")} />
          <TouchableOpacity onPress={() => console.log("Test Button 2")}>
            <Text className="text-white">Test Button 2</Text>
          </TouchableOpacity>
          <Pressable onPress={() => console.log("Test Button 3")}>
            <Text className="text-white">Test Button 3</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
