import { h } from "../deps.ts";
import type { DocumentProps } from "../deps.ts";

function Document(props: DocumentProps) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>tubone24</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tubone24" />
      <meta property="og:url" content="https://tubone24.github.io" />
      <meta property="og:title" content="tubone24 Landing Page" />
      <meta
        property="og:description"
        content="tubone24 Landing Page"
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/9511227?v=4"
      />
      <meta name="twitter:card" content="summary" />
      <link rel="stylesheet" href="/style/main.css" />
    </head>
    <body class="bg-white">
    {props.children}
    </body>
    </html>
  );
}

export default Document;
