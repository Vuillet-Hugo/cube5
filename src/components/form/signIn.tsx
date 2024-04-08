import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";

const form = z.object({
  email: z.string().email().max(100).describe("Email"),
  password: z.string().min(8).max(100).describe("Mot de passe"),
});

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      // const response = await axios.post(
      //   "http://localhost:10051/authentification/signin",
      //   {
      //     email: values.email,
      //     password: values.password,
      //   }
      // );
      await axios({
        method: "post",
        url: "http://localhost:10051/authentification/signin",
        data: { email: values.email, password: values.password },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res: any) => console.log(res));
      // return response.data;
      // Traitez la réponse de l'API ici, par exemple, redirigez l'utilisateur vers une autre page après une connexion réussie.
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      // Gérez l'erreur de connexion, par exemple, affichez un message d'erreur à l'utilisateur.
      console.log("Aie aie ça marche pas");
    }
  };

  return (
    <AutoForm formSchema={form} onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleEmailChange} />
      <input type="password" value={password} onChange={handlePasswordChange} />
      <AutoFormSubmit className="text-black">Sign In</AutoFormSubmit>
    </AutoForm>
  );
};
