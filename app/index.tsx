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

export default function TabOneScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  return (
    <SafeAreaView className="flex-1 w-full h-full py-5">
      {Platform.OS === "ios" ? (
          <KeyboardAwareScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 50 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* REPLACE THIS CONTENT FOR IOS */}
            <View
              style={{ marginTop: 16, paddingHorizontal: 15, width: "100%" }}
            >
              <View
                style={{
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: "white",
                  minWidth: "100%",
                }}
              >
                <TextInput
                  inputMode="text"
                  style={{ padding: 16, fontSize: 18 }}
                  returnKeyType="next"
                  multiline
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
              </View>

              <View
                style={{
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: "white",
                  minWidth: "100%",
                  minHeight: "30%", // NOTE FOR IOS
                }}
              >
                <TextInput
                  inputMode="text"
                  style={{ padding: 16, fontSize: 16 }}
                  returnKeyType="done"
                  numberOfLines={5}
                  textAlignVertical="top"
                  multiline
                  value={content}
                  onChangeText={(text) => setContent(text)}
                  onFocus={(e) => {
                    scrollRef.current?.scrollToFocusedInput(e.target, 100)
                  }}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* REPLACE THIS CONTENT FOR ANDROID */}
          <View style={{ marginTop: 16, paddingHorizontal: 15, width: "100%" }}>
            <View
              style={{
                marginTop: 5,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            >
              <TextInput
                inputMode="text"
                style={{ padding: 16, fontSize: 18 }}
                returnKeyType="next"
                multiline
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
            </View>

            <View
              style={{
                marginTop: 5,
                borderRadius: 10,
                backgroundColor: "red",
                minWidth: "100%",
                minHeight: "20%", // NOTE FOR ANDROID
              }}
            >
              <TextInput
                inputMode="text"
                style={{ padding: 16, fontSize: 16 }}
                returnKeyType="done"
                numberOfLines={8} // NOTE FOR ANDROID
                textAlignVertical="top"
                multiline
                value={content}
                onChangeText={(text) => setContent(text)}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
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
