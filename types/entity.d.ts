// entity.d.ts
// used type declaration for entites

import { IMessage } from "react-native-gifted-chat";

export {};

declare global {
  interface MetaDataAPI {
    page: number;
    limit: number;
    total: number;
  }

  interface ChatHistory {
    reaction?: string;
    id?: number;
    role: "user" | "assistant" | "system" | "session";
    content: string;
    date: Date;
    memory?: any;
  }

  interface IChatMessage extends IMessage {
    reaction?: string;
    role: "user" | "assistant" | "system" | "session";
    memory?: any;
  }
}
