import bcrypt from "bcryptjs";

export const comparePassword = (formData: FormData) => {
  return formData.get("password") === formData.get("confirm-password");
};

export const createHashedPassword = (password: string) => {
  //   const salt = bcrypt.genSaltSync(10);
  //   const hash = bcrypt.hashSync(password, salt);
  //   return hash;
};

export const compareHashedPassword = (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compareSync(password, hashedPassword);
};
