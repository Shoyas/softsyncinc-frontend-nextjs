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
  authorId: yup.string().optional(),
});

export const teamMemberSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  teamPersonImg: yup.string().optional(),
  designation: yup.string().required("Designation is required"),
  linkedin: yup.string().optional(),
  github: yup.string().optional(),
  email: yup.string().optional(),
  portfolio: yup.string().optional(),
});
