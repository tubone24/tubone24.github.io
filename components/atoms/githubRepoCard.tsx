import { h } from "../../deps.ts";

type PageProps = {
  htmlUrl: string
  fullName: string
  stargazersCount: number
  description: string
}

const GitHubRepoCard = (props: PageProps) => (
  <div class="result">
    <div>
      <a href={props.htmlUrl} target="_blank">
        {props.fullName}
      </a>
      🌟<strong>{props.stargazersCount}</strong>
    </div>
    <p>
      {props.description}
    </p>
  </div>
)

export default GitHubRepoCard
