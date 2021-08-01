import { styled, setup } from "../../deps.ts";
import {h} from "../../deps.ts";

setup(h);

const H1 = styled("h1")`
  background: dodgerblue;
  color: white;
  text-align: center;
`;

export default H1;
