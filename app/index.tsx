import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderNavigation from "@/components/coaching/HeaderNavigation";
import ButtonMoveScreen from "@/components/coaching/ButtonMoveScreen";

export default function TabOneScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  return (
    <SafeAreaView className="flex-1 w-full h-full py-5">
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "red" }}
      >
        {/* REPLACE THIS CONTENT FOR IOS */}
        <HeaderNavigation title="Edit Journal" color="white" />
        <View className="items-center justify-between w-full h-full">
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
          <ButtonMoveScreen
            content="Save"
            onPress={() => {
              console.log("Save");
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
