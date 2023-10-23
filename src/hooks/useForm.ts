import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({});
  const [section, setSection] = useState({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };

  return { form, onChange, onSectionChange };
};
