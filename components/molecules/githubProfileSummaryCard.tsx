import {h} from "../../deps.ts";

type PageProps = {
  username: string
}

export const GitHubProfileSummaryCard = (props: any) => {
  const username = props.username
  return (
    <img src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=vue`} alt={`${username}'s stats`}/>
  )
};

export default GitHubProfileSummaryCard;
