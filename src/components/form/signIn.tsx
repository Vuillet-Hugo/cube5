import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { signIn } from "@/functions/user";
import { Dispatch, SetStateAction } from "react";
const form = z.object({
  email: z.string().email().max(100).describe("Email"),
  password: z.string().min(8).max(100).describe("Mot de passe"),
});

export const SignInForm = ({
  setIsAuth,
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AutoForm
      formSchema={form}
      fieldConfig={{
        email: {
          inputProps: {
            type: "email",
            placeholder: "Email",
            required: true,
          },
        },
        password: {
          inputProps: {
            type: "password",
            placeholder: "Mot de passe",
            required: true,
          },
        },
      }}
      onSubmit={async (values) => {
        const res = await signIn(values);
        if (res) {
          setIsAuth(true);
        }
      }}
    >
      <AutoFormSubmit className="text-black">Sign In</AutoFormSubmit>
    </AutoForm>
  );
};
