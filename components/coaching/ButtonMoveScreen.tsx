import { LinearGradient } from "expo-linear-gradient";
import React, { useState, type ReactElement, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Keyboard,
} from "react-native";

interface NextButtonProps {
  content: string;
  size?: number;
  type?: string;
  color?: string;
  bold?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonMoveScreen = ({
  content,
  onPress,
  disabled,
  size,
  color,
  type,
}: NextButtonProps): ReactElement => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // add listener when keyboard is shown and hide the button
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <>
      {!isKeyboardVisible && (
        <TouchableOpacity
          style={styles.container}
          onPressIn={onPress}
          disabled={disabled}
        >
          <LinearGradient
            colors={
              type === "light"
                ? ["#FEFEFE", "#C7C2E0"]
                : ["#B98EE5", "#744AFF", "#5337AD"]
            }
            style={styles.gradient}
          >
            <View style={styles.content}>
              <Text
                style={{
                  textAlign: "center",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: 24,
                  fontSize: size ?? 18,
                  color: "white",
                }}
              >
                {content}
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 10,
    bottom: 0,
    left: 0,
  },
  gradient: {
    width: "100%",
    borderRadius: 100,
  },
  content: {
    padding: 13,
  },
});

export default ButtonMoveScreen;
