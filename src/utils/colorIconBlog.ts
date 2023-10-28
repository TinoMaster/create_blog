import { TCategoryBlog } from "../types/blog.type";

export const whatColorIs: (category: TCategoryBlog) => string = (category) => {
  let result = "";
  switch (category) {
    case "javascript":
      result = "bg-[#F7E025]";
      break;
    case "typescript":
      result = "bg-[#377CC8]";
      break;
    case "react":
      result = "bg-[#66DBFB]";
      break;
    case "next":
      result = "bg-[#080808]";
      break;
    case "node":
      result = "bg-[#8FC708]";
      break;
    case "ui":
      result = "bg-[#EF237B]";
      break;
    case "tailwind":
      result = "bg-[#3EBFF8]";
      break;
    case "curious":
      result = "bg-[#2A2A2A]";
      break;
    case "vsCode":
      result = "bg-[#F7E025]";
      break;
  }
  return result;
};
