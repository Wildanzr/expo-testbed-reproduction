import ArrowGoIcon from "@/assets/icons/arrow-go";
import { Card, Colors } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const MoodScreen = () => {
  return (
    <View className='flex-col items-center justify-center w-full h-full bg-primary-100'>
      <Text>Hello world</Text>
      <TouchableOpacity style={styles.container} onPress={() => {}}>
      <LinearGradient
        colors={["rgba(0,0,0,0.85)", "rgba(0,0,0,0.2)"]}
        style={styles.gradient}
      />
      <View style={styles.imageContainer}>
        <Text style={styles.titleText}>Hello there</Text>
        <Card.Image
          source={{ uri: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/10/GettyImages-1330751107-2121x1414.jpg" }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.buttonGo}>
          <ArrowGoIcon />
        </View>
      </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 5,
    overflow: "hidden",
  },
  imageContainer: {
    borderRadius: 20,
    width: "100%",
  },
  image: {
    alignSelf: "center",
    borderRadius: 20,
    width: "100%",
    height: Dimensions.get("window").height * 0.135,
  },
  titleText: {
    position: "absolute",
    zIndex: 10,
    padding: 15,
    color: "black"
  },
  buttonGo: {
    position: "absolute",
    zIndex: 3,
    right: 15,
    bottom: 15,
  },
  gradient: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
});

export default MoodScreen