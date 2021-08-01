import { h, Fragment } from "../../deps.ts";
import type { PageProps } from "../../deps.ts";
import GithubProfile from "../../components/organisms/githubProfile.tsx";

function UserPage(props: PageProps) {
  const name = props.route?.name ?? "";
  console.log(name)
  return (
    <>
      <h1>This is the GitHub for {name}</h1>
      <GithubProfile username={name} />
      <p>
        <a href="/">Go home</a>
      </p>
    </>
  );
}

export default UserPage;
