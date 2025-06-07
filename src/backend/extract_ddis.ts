import { axiosAuthClient } from "../utils/axiosClient";
import { handleAxiosError } from "../utils/handleAxoisErr";

export async function extractSentenceDDIsHandler(sentence: string) {
  try {
    const response = await axiosAuthClient.post(`/extract-ddis`, {
      text: sentence,
    });
    return response.data;
  } catch (error: unknown) {
    const result = handleAxiosError(error);
    throw result;
  }
}
