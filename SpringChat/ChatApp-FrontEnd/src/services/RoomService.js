import { httpClient } from "../config/AxiosHelper";


// create room api
export const createRoomApi = async (roomDetail) => {

   try {
      const response = await httpClient.post(`/api/v1/rooms`, roomDetail);
      return response.data;
   } catch (error) {
      throw error;
   }
} 

// join chat api
export const joinChatApi = async (roomId) => {

   const response = await httpClient.get(`/api/v1/rooms/${roomId}`);
   return response.data;

}

// load messages api
export const getMessages = async (roomId) =>{

   const response = await httpClient.get(`/api/v1/rooms/${roomId}/messages`);
   return response.data;
}