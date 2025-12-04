"use client";

import FormButton from "@/components/ui/form-btn";
import FormInput from "@/components/ui/form-input";
import SocialLogin from "@/components/ui/social-login";
import { useFormState } from "react-dom";
import handleForm, { FormState } from "./actions";

const initialState: FormState = { error: null };

export default function LogIn() {
  const [state, action, isPending] = useFormState(handleForm, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[...(state.error ?? [])]}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
