import { axiosAuthClient } from "../utils/axiosClient";
import { handleAxiosError } from "../utils/handleAxoisErr";

export async function extractSentenceDDIsHandler(sentence: string) {
  try {
    const response = await axiosAuthClient.post(`/extract-ddis`, {
      text: sentence,
    });
    console.log("response :"+ response.data)
    return response.data;
  } catch (error: unknown) {
    const result = handleAxiosError(error);
    throw result;
  }
}

export async function extractSentenceDrugsHandler(sentence: string) {
  try {
    const response = await axiosAuthClient.post(`/extract-drugs`, {
      text: sentence,
    });
    console.log("response :"+ response.data)
    return response.data;
  } catch (error: unknown) {
    const result = handleAxiosError(error);
    throw result;
  }
}


