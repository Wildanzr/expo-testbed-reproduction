import { SafeAreaView, Text, View, Pressable, Platform } from "react-native";
import React, { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Audio } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { getAudioApiCall } from "@/services/chatServices";

export default function VoiceScreen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const [recording, setRecording] = useState<Audio.Recording>();
  const [audio, setAudio] = useState<string>("");
  const [responseAudio, setResponseAudio] = useState<string>("");
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const startRecording = async () => {
    try {
      if (permissionResponse && permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      setAudio("");
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const recordingOptions = Platform.select({
        android: Audio.RecordingOptionsPresets.HIGH_QUALITY,
        ios: Audio.RecordingOptionsPresets.LOW_QUALITY,
      });
      const { recording } = await Audio.Recording.createAsync(recordingOptions);
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    if (recording) {
      await recording.stopAndUnloadAsync();
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    console.log("Recording stopped and stored at", uri);
    setAudio(uri || "");
  };

  const playAudio = async (target: string) => {
    const { sound } = await Audio.Sound.createAsync({ uri: target });
    await sound.playAsync();
  };

  const generateAudio = async () => {
    setResponseAudio("");
    const { responseJSON, responseOk } = await getAudioApiCall(audio);

    if (responseOk) {
      console.log(responseJSON);
      const audioUrl = responseJSON.data.content;
      setResponseAudio(audioUrl);
    }
  };

  return (
    <SafeAreaView className="flex-1 w-full h-full p-5 bg-primary-100">
      <StatusBar style="dark" />
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-col items-center justify-center w-full h-full space-y-10">
          <Pressable
            onPress={recording ? stopRecording : startRecording}
            className="px-5 py-2 bg-red-500 rounded-lg"
          >
            <Text className="text-lg text-white font-jakarta-reg">
              {recording ? "Recording.." : "Start Recording"}
            </Text>
          </Pressable>

          {audio !== "" && (
            <View className="flex flex-col items-center justify-center space-y-5">
              <Pressable
                style={{ marginHorizontal: 20 }}
                onPress={() => playAudio(audio)}
                className="px-5 py-2 rounded-lg bg-success-500"
              >
                <Text className="text-lg text-white font-jakarta-reg">
                  Play
                </Text>
              </Pressable>

              <Pressable
                style={{ marginHorizontal: 20 }}
                onPress={generateAudio}
                className="px-5 py-2 rounded-lg bg-primary-500"
              >
                <Text className="text-lg text-white font-jakarta-reg">
                  Generate Audio
                </Text>
              </Pressable>
            </View>
          )}

          {responseAudio !== "" && (
            <View className="flex flex-col items-center justify-center space-y-5">
              <Pressable
                style={{ marginHorizontal: 20 }}
                onPress={() => playAudio(responseAudio)}
                className="px-5 py-2 rounded-lg bg-success-500"
              >
                <Text className="text-lg text-white font-jakarta-reg">
                  Play
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
