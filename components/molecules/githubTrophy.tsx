import {h} from "../../deps.ts";

type PageProps = {
  username: string
}

const GithubTrophy = (props: PageProps) => {
  const username = props.username;
  return (
    <img src={`https://github-profile-trophy.vercel.app/?username=${username}`} alt={`${username}'s stats`}/>
  )
};

export default GithubTrophy;
