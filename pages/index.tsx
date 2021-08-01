import { h, Fragment } from "../deps.ts";
import type { PageProps, GetStaticData } from "../deps.ts";
import Button from "../components/atoms/button.tsx"
import Header from "../components/molecules/header.tsx"


interface Data {
  random: string;
}

function IndexPage(props: PageProps<Data>) {
  return (
    <>
    <Header>tubone24</Header>
      <p>This is the index page.</p>
      <p>
        <a href="/user/tubone24"><Button>Go to @tubone24 GitHub Info</Button></a>
      </p>
    </>
  );
}

export const getStaticData = (): GetStaticData<Data> => {
  return {
    data: {
      random: Math.random().toString(),
    },
  };
};

export default IndexPage;
