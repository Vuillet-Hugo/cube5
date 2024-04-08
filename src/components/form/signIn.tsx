import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { signIn } from "@/functions/user";

const form = z.object({
  email: z.string().email().max(100).describe("Email"),
  password: z.string().min(8).max(100).describe("Mot de passe"),
});

export const SignInForm = () => {

  return (
    <AutoForm formSchema={form}
    fieldConfig={
      {
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
      }
    }
    onSubmit={(values) => {
      signIn(values);
    }
    }
    >
      <AutoFormSubmit className="text-black">Sign In</AutoFormSubmit>
    </AutoForm>
  );
};
