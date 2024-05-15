import { SafeAreaView, Text, View, Button } from "react-native";
import React, { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Audio } from "expo-av";
import { StatusBar } from "expo-status-bar";

export default function VoiceScreen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const [recording, setRecording] = useState<Audio.Recording>();
  const [audio, setAudio] = useState<string>("");
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse && permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
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
  }

  async function playAudio() {
    if (audio === "") {
      console.log("No audio to play");
      return;
    }
    const { sound } = await Audio.Sound.createAsync({ uri: audio });
    await sound.playAsync();
  }

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
          <Button
            title={recording ? "Stop Recording" : "Start Recording"}
            onPress={recording ? stopRecording : startRecording}
          />
          <View>
            {audio !== "" && <Button title="Play" onPress={playAudio} />}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
