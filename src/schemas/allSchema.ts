import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup
    .string()
    .min(6)
    .max(32)
    .required("Set new password with min 6 to max 32 characters"),
});
