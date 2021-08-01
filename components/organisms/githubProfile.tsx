import {h, Fragment} from "../../deps.ts";
import GitHubStatsCard from "../molecules/githubStatsCard.tsx";
import GithubProfileSummaryCard from "../molecules/githubProfileSummaryCard.tsx";
import GithubStatsCardMostLang from "../molecules/githubStatsCardMostLang.tsx";
import GithubStatsCardStreak from "../molecules/githubStatsCardStreak.tsx";
import GithubRepoList from "../molecules/githubRepoList.tsx";

type PageProps = {
  username: string
}

const GitHubProfile = (props: any) => {
  const username = props.username;
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
        <GithubRepoList username="tubone24" />
      </div>
    </>
  )
};

export default GitHubProfile
