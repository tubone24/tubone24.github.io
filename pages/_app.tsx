import { h } from "../deps.ts";
import {ChakraProvider} from "../deps.ts";
import type { AppProps } from "../deps.ts";

function App(props: AppProps) {
  return (
    <div>{props.children}</div>
  );
}

export default App;
