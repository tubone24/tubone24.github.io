import { h, Fragment } from "../../deps.ts";
import type { PageProps } from "../../deps.ts";
import GithubProfile from "../../components/organisms/githubProfile.tsx";
import Header from "../../components/molecules/header.tsx";

const UserPage = (props: PageProps) => {
  const name = props.route?.name ?? "";
  console.log("aaaaaaaaaaaaaaa")
  console.log(name)
  return (
    <div class="mx-auto max-w-screen-md px-6 sm:px-6 md:px-8">
      <Header />
      <main>
        <div class="flex flex-wrap items-stretch w-full relative">
          <h2>This is the GitHub for {name}</h2>
          <GithubProfile username={name} />
        </div>
        <p>
          <a href="/">Go home</a>
        </p>
      </main>
    </div>
  );
}

export default UserPage;
