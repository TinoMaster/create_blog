import React, { createContext, useEffect, useState } from "react";
import { TSection } from "../types/categories.type";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";

export interface BlogContextType {
  category: TSection;
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<IBlog>>;
  form: IBlog;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [category, seTSection] = useState<TSection>("principal");
  const [valueLocalStorage, setValueLocalStorage] = useLocalStorage("form");
  const [form, setForm] = useState<IBlog>(
    valueLocalStorage || blogs.initialBlog
  );

  useEffect(() => {
    setValueLocalStorage(form);
    // eslint-disable-next-line
  }, [form]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    seTSection(e.target.value as TSection);
  };

  const value = { category, handleCategory, setForm, form };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContext;
