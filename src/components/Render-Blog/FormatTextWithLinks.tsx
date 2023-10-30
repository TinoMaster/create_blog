export function FormatTextWithLinks({ text }: { text: string }) {
  const regex = /__link:(.+?)\*\*(\w+)/g;
  const parts = [];
  let lastIndex = 0;
  const constant = true;

  while (constant) {
    const match = regex.exec(text);

    if (!match) {
      parts.push(text.slice(lastIndex));
      break;
    }

    const url = match[1];
    const name = match[2];
    parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        className="border-b font-thin inline text-blue-400"
        key={match.index}
        href={url}
        target="_blank"
      >
        {name}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  return <>{parts} </>;
}
