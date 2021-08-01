import {h} from "../../deps.ts";

type PageProps = {
  username: string
}

const GithubStatsCardMostLang = (props: any) => {
  const username = props.username;
  return (
  <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`} alt={`${username}'s stats`}/>
  )
};

export default GithubStatsCardMostLang;
