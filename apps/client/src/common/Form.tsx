// src/components/GenericForm.js

import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

export enum TextFieldType {
  Text = "text",
  Email = "email",
  Password = "password",
  Number = "number",
  Tel = "tel",
  Url = "url",
  Search = "search",
  Date = "date",
  DateTimeLocal = "datetime-local",
  Month = "month",
  Week = "week",
  Time = "time",
}

type FormProps = {
  onSubmit: (data: Record<string, any>) => void;
  defaultValues: Record<string, any>;
  fields: { name: string; label: string; type: TextFieldType }[];
};
const Form: FC<FormProps> = ({ onSubmit, defaultValues, fields }) => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: { ref, ...inputProps }, fieldState }) => (
            <TextField
              {...inputProps}
              inputRef={ref}
              label={field.label}
              type={field.type}
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
      ))}
      <Button type="submit" fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default Form;
