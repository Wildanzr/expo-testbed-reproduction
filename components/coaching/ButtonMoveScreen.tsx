import { LinearGradient } from "expo-linear-gradient";
import React, { type ReactElement } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

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
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
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
