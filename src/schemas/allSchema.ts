import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup
    .string()
    .min(6)
    .max(32)
    .required("Set new password with min 6 to max 32 characters"),
});

export const workSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  workImg: yup.string().optional(),
  authorId: yup.string().required("Author is required"),
});
