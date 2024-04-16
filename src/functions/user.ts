import { FormatedSpeaker, FormatedStudent } from "@/types/user";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const createUser = async (
  values: FormatedSpeaker | FormatedStudent
): Promise<any> => {
  const user = values;
  try {
    const response = await axios.post(`${apiUrl}authentification/signup`, user);
    if (response.data.code === 1) {
      alert(response.data.message);
    } else {
      alert(response.data.message);
    }
    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signIn = async (values: {
  email: string;
  password: string;
}): Promise<any> => {
  try {
    const response = await axios.post(
      `${apiUrl}authentification/signin`,
      values
    );
    if (response.data.code === 1) {
      alert(response.data.message);
      localStorage.setItem("token", response.data.payload.token);
      return true;
    } else {
      alert(response.data.message);
      return false;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
