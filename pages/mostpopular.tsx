import { h, Fragment } from "../deps.ts";
import type { PageProps, GetStaticData } from "../deps.ts";
import Header from "../components/molecules/header.tsx";
import GithubRepoList from "../components/molecules/githubRepoList.tsx";

function MostPopular() {
  return (
    <div class="mx-auto max-w-screen-md px-6 sm:px-6 md:px-8">
      <Header />
      <main>
        <div class="flex flex-wrap items-stretch w-full relative space-y-10">
          <h2>Most stargazers</h2>
          {/*dext.tsはComponentsにPropsを渡せない。代わりにroutes値わたしができるが面倒なのでPReactのComponents Propsを生かしたままts-ignoreでごまかす*/}
          {/*@ts-ignore*/}
          <GithubRepoList username="tubone24" />
        </div>
        <p>
          <a href="/">Go home</a>
        </p>
      </main>
    </div>
  );
}

export default MostPopular;
