import ArrowUpIconPurple from "@/assets/icons/arrow-up-purple";
import VoiceCallIcon from "@/assets/icons/voice-call";
import VoiceRecordIcon from "@/assets/icons/voice-rec";
import Colors from "@/constants/Colors";
import { useChat } from "@/contexts/ChatContext";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { View, Text, Platform } from "react-native";
import {
  GiftedChat,
  Bubble,
  Composer,
  ComposerProps,
  type IMessage,
  BubbleProps,
  SendProps,
  Send,
} from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const GiftedChatScreen = (): React.ReactNode => {
  const { chats, setChats } = useChat();

  const renderBubble = (props: BubbleProps<IMessage>): React.ReactNode => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.primary[500],
            
          },
          left: {
            backgroundColor: Colors.text.accent,
          },
        }}
        textStyle={{
          right: {
            color: Colors.text.accent,
            fontFamily: "PlusJakartaSans-Regular",
            fontSize: 12,
          },
          left: {
            color: Colors.text.secondary,
            fontFamily: "PlusJakartaSans-Regular",
            fontSize: 12,
          },
        }}
      />
    );
  };

  const renderSend = (props: SendProps<IMessage>): React.ReactNode => {
    return (
      <Send {...props}>
        <View className="flex flex-row items-center justify-center h-full px-2">
          {!props.text?.trim() ? (
            <View className="flex flex-row">
              <View className="px-1">
                <VoiceCallIcon />
              </View>
              <View className="px-1">
                <VoiceRecordIcon />
              </View>
            </View>
          ) : (
            <View className="px-1">
              <ArrowUpIconPurple />
            </View>
          )}
        </View>
      </Send>
    );
  };

  const renderComposer = (props: ComposerProps): React.ReactNode => {
    return (
      <Composer {...props}>
        <View className="flex-row items-center px-2">
          <VoiceCallIcon />
          <VoiceRecordIcon />
        </View>
      </Composer>
    );
  };

  const renderEmpty = (): React.ReactNode => {
    return (
      <View className="w-full h-full items-center justify-center transform" style={{
        ...Platform.select({
          ios: {
            transform: [{ scaleY: -1 }],
          },
          android: {
            transform: [{ scaleX: -1, },
            {
              scaleY: -1,
            }
            ],
          },
        }),
      }}>
        <Text>No Chat</Text>
      </View>
    );
  }

  // const renderInputToolbar = (
  //   props: InputToolbarProps<IMessage>
  // ): React.ReactNode => {
  //   return (
  //     <InputToolbar
  //       {...props}
  //       containerStyle={{
  //         backgroundColor: Colors.primary[500],
  //         borderTopWidth: 0,
  //         paddingHorizontal: 10,
  //       }}
  //     />
  //   );
  // };

  const handleSend = useCallback((messages: IMessage[]) => {
    setChats((previousMessages: IChatMessage[]) =>
      GiftedChat.append(previousMessages, messages.map((message) => ({
        ...message,
        role: "user",
      })))
    );
  }, []);

  return (
    <SafeAreaView className="h-full w-full bg-primary-100">
      <StatusBar style="dark" />
      <GiftedChat
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderComposer={renderComposer}
        renderChatEmpty={renderEmpty}
        renderAvatar={null}
        alwaysShowSend
        messages={chats}
        onSend={(messages) => {
          handleSend(messages);
        }}
        inverted
        user={{
          _id: 2,
        }}
        placeholder="Start typing..."
        messagesContainerStyle={{
          width: "70%",
          alignSelf: "flex-end",
        }}
      />
    </SafeAreaView>
  );
};

export default GiftedChatScreen;
