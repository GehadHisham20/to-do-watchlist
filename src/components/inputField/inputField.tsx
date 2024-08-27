import React from "react";

type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  value?: string | boolean;
  placeholder?: string;
  checked?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = React.memo(
  ({
    id,
    name,
    type,
    value,
    placeholder,
    checked,
    onChange,
    error,
    className = "inputField",
  }) => {
    return (
      <div className="formGroup">
        <input
          id={id}
          name={name}
          type={type}
          value={type === "checkbox" ? undefined : (value as string)}
          checked={type === "checkbox" ? (checked as boolean) : undefined}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
        />
        {error && <div className="errorMsg">{error}</div>}
      </div>
    );
  }
);

export default InputField;
