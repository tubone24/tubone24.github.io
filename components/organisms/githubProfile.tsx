import {h, Fragment} from "../../deps.ts";
import GitHubStatsCard from "../molecules/githubStatsCard.tsx";
import GithubProfileSummaryCard from "../molecules/githubProfileSummaryCard.tsx";
import GithubStatsCardMostLang from "../molecules/githubStatsCardMostLang.tsx";
import GithubStatsCardStreak from "../molecules/githubStatsCardStreak.tsx";
import GithubRepoList from "../molecules/githubRepoList.tsx";
import type { PageProps } from "../../deps.ts";

interface Props {
  username: string | string[]
}

const GitHubProfile = (props: Props) => {
  console.log(props)
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  let username
  if (Array.isArray(props.username)) {
    username = props.username[0]
  } else {
    username = props.username
  }
  console.log(username)
  return (
    <>
      <p>
        <h2>Summary GitHub stats</h2>
        <GitHubStatsCard username={username}/>
        <GithubProfileSummaryCard username={username}/>
        <GithubStatsCardStreak username={username} />
      </p>
      <p>
        <GithubStatsCardMostLang username={username} />
      </p>
      <div>
        <h2>Most stargazers</h2>
        {/*dext.tsはComponentsにPropsを渡せない。代わりにroutes値わたしができるが面倒なのでPReactのComponents Propsを生かしたままts-ignoreでごまかす*/}
        {/*@ts-ignore*/}
        <GithubRepoList username="tubone24" />
      </div>
    </>
  )
};

export default GitHubProfile
