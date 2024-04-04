import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import { GiftedChat, Bubble, MessageText, type IMessage, BubbleProps } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const GiftedChatScreen = (): React.ReactNode => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: "Have a great working week!!",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Ana",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
    {
      _id: 2,
      text: "Great Job!",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "User",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

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
          },
          left: {
            color: Colors.text.secondary,
            fontFamily: "PlusJakartaSans-Regular",
          },
        }}
      />
    );
  }

  const onSend = useCallback((messages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView className="h-full w-full bg-primary-100">
      <StatusBar style="dark" />
      <GiftedChat
        renderBubble={renderBubble}
        renderAvatar={null}
        messages={messages}
        onSend={(messages) => {
          onSend(messages);
        }}
        inverted
        user={{
          _id: 2,
        }}
        placeholder="Start typing..."
      />
    </SafeAreaView>
  );
};

export default GiftedChatScreen;
