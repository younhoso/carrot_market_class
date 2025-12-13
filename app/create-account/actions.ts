"use server";
import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => {
  password === confirm_password;
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .min(3, "Way too short!!")
      .max(10, "That is too long")
      .toLowerCase()
      .trim()
      .transform((username) => `🔥 ${username}`)
      .refine(checkUsername, "No potatoes allowed!!"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(10)
      .regex(
        passwordRegex,
        "비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야 합니다."
      ),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: "두 비밀번호가 동일해야 합니다!",
    path: ["confirm_password"],
  });

const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
};

export default createAccount;
