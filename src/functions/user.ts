import { formatedUser } from "@/components/form/formatedSpeaker";
import { SpeakerForm } from "@/types/types.d";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const createUser = async (values: SpeakerForm): Promise<any> => {
  const user = formatedUser(values);
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
