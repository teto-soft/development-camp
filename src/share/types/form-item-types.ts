import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type FormItemProps<TFormValues extends FieldValues> = {
  error?: FieldError;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
};
