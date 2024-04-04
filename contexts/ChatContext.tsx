import { getChatsApiCall } from '@/services/chatServices';
import React, { createContext, useContext, useState } from 'react';
import { IMessage } from 'react-native-gifted-chat';


interface ChatContextProps {
  chats: IChatMessage[];
  setChats: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
  fetchChats: () => Promise<void>;
}

const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<IChatMessage[]>([
    {
      _id: "1",
      text: "Hello",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "user",
        avatar: "https://placeimg.com/140/140/any",
      },
      role: "user",
      memory: {},
    },
    {
      _id: "2",
      text: "Hi",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "assistant",
        avatar: "https://placeimg.com/140/140/any",
      },
      role: "assistant",
      memory: {},
    },
  ]);
  const [chatMeta, setChatMeta] = useState<MetaDataAPI>({} as MetaDataAPI);

  const fetchChats = async (): Promise<void> => {
    const { responseJSON } = await getChatsApiCall();
    const chat = responseJSON.data.chats;
    const meta = responseJSON.data.meta as MetaDataAPI;

    // set chat meta
    setChatMeta({
      page: meta.page,
      total: meta.total,
      limit: meta.limit,
    });

    // Make chats with type IMessage[]
    const chats: IChatMessage[] = chat.map((item: any) => {
      return {
        _id: item.id,
        text: item.message,
        createdAt: new Date(item.updatedAt),
        user: {
          _id: item.type === "assistant" ? 1 : item.type === "user" ? 2 : item.type === "system" ? 3 : 4,
          name: item.type,
        },
        role: item.type,
        memory: item.memory,
      };
    });

    // Add chat to chats
    setChats(chats);
    console.log("Done fetching chats");
  };

  const values = {
    chats,
    setChats,
    fetchChats,
  }

  return (
    <ChatContext.Provider value={values}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);