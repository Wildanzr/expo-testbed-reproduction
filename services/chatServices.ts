import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = "https://api.ana.tokenminds.co";
const CHAT_HISTORY_URL = `${BASE_URL}/chat-history`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWl0YUBwdXJwbGVtaW5kcy5jbyIsInN1YiI6MTQsImlhdCI6MTcxMjIwMDYxNSwiZXhwIjoxNzE0NzkyNjE1fQ.77ew2IM_2iUR6aFwlV-w6gv5Fvdl5z30GVlNCgWEd50";

interface BaseResponse {
  responseOk: boolean;
  responseJSON: any;
}

interface AddChatProps {
  message: string;
  type: "user" | "assistant" | "session";
}

export const getChatsApiCall = async (page?: number): Promise<BaseResponse> => {
  page = page ?? 1;
  try {
    const accessToken = "Bearer " + TOKEN;
    const config: AxiosRequestConfig = {
      url: `${CHAT_HISTORY_URL}?page=${page}&limit=50`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    const response = await axios.request(config);

    const responseOk = response.status === 200 || response.status === 201;
    const responseJSON = response.data;
    return { responseOk, responseJSON };
  } catch (error: any) {
    console.log(error);
    const responseJSON = error.response.data;
    const responseOk = false;
    return { responseOk, responseJSON };
  }
};
