import { router } from "expo-router";
import React, { type ReactElement } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Back from "./Back";
import HomeIcon from "./HomeIcon";
import NoteIcon from "./NoteIcon";
import GearIcon from "./GearIcon";

let ScreenView:
  | "home"
  | "call"
  | "mood"
  | "chat"
  | "interest"
  | "avatar-type"
  | "avatar-choose"
  | "avatar-customize";

interface ButtonBackProps {
  href?: string;
  dark?: boolean;
  color?: string;
  target?: string;
  title?: string;
  showHome?: boolean;
  showJournal?: boolean;
  showYummySetting?: boolean;
  noNavigate?: boolean;
  backPress?: typeof ScreenView;
}

const HeaderNavigation = ({
  href,
  color,
  title,
  target,
  showHome,
  showYummySetting,
  noNavigate,
  showJournal,
}: ButtonBackProps): ReactElement => {
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`absolute top-0 z-10 w-full flex-row items-center justify-between px-3 ${
        noNavigate ? "pt-2" : "pt-[10%]"
      }`}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          padding: 0,
          marginTop: 20,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Back color={color} />
      </TouchableOpacity>

      {title && (
        <Text
          style={{
            fontSize: 24,
            lineHeight: 28.8,
            color: color ?? "#141627",
          }}
          className=" mt-[20px]"
        >
          {title}
        </Text>
      )}

      {showHome && (
        <TouchableOpacity
          onPress={() => {
            if (noNavigate) {
              console.log("Setting Currentview");
            } else {
              router.replace("/");
            }
          }}
          className="mt-[20px] h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-500/60"
        >
          <HomeIcon />
        </TouchableOpacity>
      )}

      {showJournal && (
        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
          className="mt-[20px] h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-500/60"
        >
          <NoteIcon />
        </TouchableOpacity>
      )}

      {showYummySetting && (
        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
          className="mt-[20px] h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-500/60"
        >
          <GearIcon />
        </TouchableOpacity>
      )}

      {!showHome && !showJournal && !showYummySetting && (
        <View className="h-[38px] w-[38px]" />
      )}
    </View>
  );
};

export default HeaderNavigation;
