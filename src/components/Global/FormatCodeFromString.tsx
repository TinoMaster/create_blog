import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import { useEffect, useState } from "react";

export const FormatCodeFromString = ({
  codeString,
}: {
  codeString: string;
}) => {
  const [codeFormatted, setCodeFormatted] = useState<string>("");

  useEffect(() => {
    prettier
      .format(codeString, {
        parser: "babel-ts",
        plugins: [parserBabel, estreePlugin],
        trailingComma: "es5",
      })
      .then((res) => {
        setCodeFormatted(res);
      });
  }, [codeString]);

  return (
    <SyntaxHighlighter language="javascript" style={style}>
      {codeFormatted}
    </SyntaxHighlighter>
  );
};
