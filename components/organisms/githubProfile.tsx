import {h, Fragment} from "../../deps.ts";
import GitHubStatsCard from "../molecules/githubStatsCard.tsx";
import GithubProfileSummaryCard from "../molecules/githubProfileSummaryCard.tsx";
import GithubStatsCardMostLang from "../molecules/githubStatsCardMostLang.tsx";
import GithubStatsCardStreak from "../molecules/githubStatsCardStreak.tsx";
import GithubTrophy from "../molecules/githubTrophy.tsx";
import type { PageProps } from "../../deps.ts";

interface Props {
  username: string | string[]
}

const GitHubProfile = (props: Props) => {
  console.log(props)
  let username
  if (Array.isArray(props.username)) {
    username = props.username[0]
  } else {
    username = props.username
  }
  console.log(username)
  return (
    <>
        <GitHubStatsCard username={username}/>
        <GithubProfileSummaryCard username={username}/>
        <GithubStatsCardStreak username={username} />
        <GithubStatsCardMostLang username={username} />
        <GithubTrophy username={username} />
    </>
  )
};

export default GitHubProfile
