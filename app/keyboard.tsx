import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderNavigation from "@/components/coaching/HeaderNavigation";
import ButtonMoveScreen from "@/components/coaching/ButtonMoveScreen";

export default function KeyboardScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  return (
    <SafeAreaView className="flex-1 w-full h-full py-5 bg-red-500">
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* REPLACE THIS CONTENT FOR IOS */}
        <HeaderNavigation title="Edit Journal" color="white" target="/" />
        <View
          style={{
            marginTop: Platform.select({ ios: 14, android: 30 }),
            paddingHorizontal: 15,
            width: "100%",
          }}
        >
          <View className="mt-5 rounded-xl  bg-white">
            <TextInput
              inputMode="text"
              className="p-4 text-lg"
              returnKeyType="next"
              multiline
              value={title}
              onChangeText={(value) => {
                setTitle(value);
              }}
            />
          </View>

          <View className="mt-5 rounded-xl bg-white">
            <TextInput
              inputMode="text"
              className="p-4"
              returnKeyType="done"
              numberOfLines={8}
              textAlignVertical="top"
              multiline
              value={content}
              onChangeText={(value) => {
                setContent(value);
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ButtonMoveScreen
        content="Save"
        onPress={() => {
          console.log("Save");
        }}
      />
    </SafeAreaView>
  );
}