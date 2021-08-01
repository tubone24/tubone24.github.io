import {h} from "../../deps.ts";

type PageProps = {
  username: string
}

const GitHubStatsCard = (props: any) => {
  const username = props.username
  return (
  <img src={`https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true`} alt={`${username}'s stats`}/>
  )
};

export default GitHubStatsCard;
