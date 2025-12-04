"use server";

export type FormState = { error: string[] | null };

const handleForm = async (
  prevState: any,
  formData: FormData
): Promise<FormState> => {
  console.log(prevState);
  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    error: ["잘못된 비밀번호", "비밀번호가 너무 짧습니다"],
  };
};

export default handleForm;
