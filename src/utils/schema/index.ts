import * as yup from "yup";

export const todoSchema = yup.object().shape({
  Task: yup
    .string()
    .required("Input cannot be empty")
    .min(8, "Task should have at least 8 characters")
    .max(40, "Task cannot be more than 40 characters")
    .matches(/^[^0-9]*$/, "Field should not contain numbers"),
});
