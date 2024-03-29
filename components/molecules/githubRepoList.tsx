import {h, Component, Fragment } from "../../deps.ts";
import GithubRepoCard from "../atoms/githubRepoCard.tsx";

type Props = {
  username: string
}

interface IState {
  results: Result[],
  username: string
}

interface Result {
  html_url: string
  description: string
  full_name: string
  stargazers_count: number
  updated_at: string
}

export default class GitHubRepoList extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = { results: [], username: props.username };
  }
  async getRepoPagenation(page: number) {
    const res = await fetch(`https://api.github.com/users/${this.state.username}/repos?type=sources&per_page=100&page=${page}`)
    return await res.json()
  }
  async getRepoList() {
    let beforeResults = [] as Result[];
    let page = 1;
    while (page < 4) {
      console.log(page);
      const result = await this.getRepoPagenation(page);
      if (result.length == 0) {
        break;
      } else {
        beforeResults = beforeResults.concat(result)
        page += 1;
      }
    }
    beforeResults.sort((a, b) => {
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      } else {
        return -1;
      }
    })
    this.setState({
      results: beforeResults.slice(0, 5)
    });
  }
  componentDidMount() {
    this.getRepoList();
  }
  render(props: Props, state: IState) {
    console.log(state.results)
    return (
        <div class="container mx-auto space-y-10">
          {state.results.map((result, index) => (
            <GithubRepoCard htmlUrl={result.html_url} description={result.description} fullName={result.full_name}
                            stargazersCount={result.stargazers_count} index={index + 1} updatedAt={result.updated_at}/>
          ))}
        </div>
    )
  }
}

