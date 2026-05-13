import { httpClient } from "../config/AxiosHelper";
export const createRoomApi = async (roomDetail) => {

   try {
      const response = await httpClient.post(`/api/v1/rooms`, roomDetail);
      return response.data;
   } catch (error) {
      throw error;
   }
}

export const joinChatApi = async (roomId) => {

   const response = await httpClient.get(`/api/v1/rooms/${roomId}`);
   return response.data;

}