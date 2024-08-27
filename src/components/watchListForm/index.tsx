import React, { useState, useEffect, useCallback } from "react";
import { IWatchItem } from "types/watchItem";
import Modal from "components/modal/Modal";
import InputField from "components/inputField/inputField";

interface WatchListFormProps {
  visible: boolean;
  onCancel: () => void;
  onFinish: (values: IWatchItem) => void;
  title: string;
  okText: string;
  initialValues?: IWatchItem;
}

const initialValue = {
  _id: "",
  title: "",
  description: "",
  completed: false,
};

export default function WatchListForm({
  visible,
  onCancel,
  onFinish,
  title,
  okText,
  initialValues = initialValue,
}: WatchListFormProps) {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  // to make sure to render only input field changed
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    },
    []
  );
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formValues.title) {
      errors.title = "Please enter the title!";
    }
    if (!formValues.description) {
      errors.description = "Please enter the description!";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onFinish(formValues);
      setFormValues(initialValues);
      setErrors({});
    }
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      title={title}
      okText={okText}
    >
      <InputField
        type="text"
        id="text"
        name="title"
        value={formValues.title}
        error={errors.title}
        onChange={handleChange}
        placeholder="Title"
        className="inputField"
      />
      <InputField
        name="description"
        id="description"
        value={formValues.description}
        error={errors.description}
        onChange={handleChange}
        placeholder="Description"
        type="textarea"
        className="textareaField"
      />
    </Modal>
  );
}
