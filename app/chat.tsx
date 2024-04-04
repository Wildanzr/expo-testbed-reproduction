import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, type IMessage } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const GiftedChatScreen = (): React.ReactNode => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello there!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Ana",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView className="h-full w-full bg-primary-100">
      <GiftedChat
        messages={messages}
        onSend={(messages) => {
          onSend(messages);
        }}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default GiftedChatScreen;
