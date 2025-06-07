import { AxiosError } from "axios";

export async function handleAxiosError(error: unknown) {
  let modifiedErr = error;

  if (error instanceof AxiosError) {
    if (error.response && error.response.data && error.response.data.message) {
      const { data: errorData } = error.response;

      let message = "An Unexpected error";
      if (typeof errorData?.error === "string" && errorData?.error) {
        message = errorData?.error;
      } else if (
        typeof errorData?.error === "object" &&
        typeof errorData?.error?.message === "string"
      ) {
        message = errorData?.error?.message;
      } else if (typeof errorData?.message === "string" && errorData?.message) {
        message = errorData?.message;
      }

      return (modifiedErr = {
        message: message,
        status: error.response.data.error,
        errorCode: error.response.data.code,
        errorCodeMessage: errorData?.message,
      });
    } else {
      return (modifiedErr = {
        message: error.response?.data.error ?? "Something went wrong",
        explain: "Failed to process error details.",
        advice: "Please try again later.",
        errorCode: 500,
      });
    }
  }

  return modifiedErr;
}
