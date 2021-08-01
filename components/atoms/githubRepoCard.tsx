import { h } from "../../deps.ts";
import { styled, setup } from "../../deps.ts";

setup(h);

const StyledGitHubRepo = styled("div")`
  padding: 10px;
  margin: 10px;
  background: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
`;

type PageProps = {
  htmlUrl: string
  fullName: string
  stargazersCount: string
  description: string
}

const GitHubRepoCard = (props: any) => (
  <StyledGitHubRepo>
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
  </StyledGitHubRepo>
)

export default GitHubRepoCard
