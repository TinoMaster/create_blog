import ReactMarkDown from "react-markdown";

export const FormatInfoMarkdown = ({ info }: { info: string }) => {
  return <ReactMarkDown>{info}</ReactMarkDown>;
};
