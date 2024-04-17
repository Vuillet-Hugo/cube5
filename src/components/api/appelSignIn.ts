import axios from "axios";

async function appelSignIn() {
  try {
    const response = await axios.get("http://localhost:10051/signin");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Une erreur est survenue lors de l'appel à l'API :", error);
    throw error;
  }
}

export default appelSignIn;
