import {h} from "../../deps.ts";

type PageProps = {
  username: string
}

const GithubStatsCardStreak = (props: PageProps):JSX.Element => {
  const username = props.username;
  return (
  <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}`} alt={`${username}'s stats`}/>
  )
};

export default GithubStatsCardStreak;
