import React, { createContext, useState } from "react";
import { TCategory } from "../types/categories.type";

export interface BlogContextType {
  category: TCategory;
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState<TCategory>("principal");

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as TCategory);
  };

  const value = { category, handleCategory };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContext;
