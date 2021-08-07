import { h } from "../../deps.ts";
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.4";

type PageProps = {
  index: number
  htmlUrl: string
  fullName: string
  stargazersCount: number
  description: string
  updatedAt: string
}

const GitHubRepoCard = (props: PageProps) => {
  const updateAtFormat = dayjs(props.updatedAt).format("YYYY/MM/DD");
  return (
    <div
      class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <div class="h-20 bg-green-500 flex items-center justify-between">
        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{props.index}</h1>
        <a href={props.htmlUrl} target="_blank"><p class="mr-20 text-white text-lg">{props.fullName}</p></a>
        <p class="mr-4 text-white font-thin text-lg">🌟{props.stargazersCount}</p>
      </div>

      <p class="py-6 text-lg tracking-wide ml-16">{props.description}</p>
      <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
        <p>Last Update</p>
        <p>{updateAtFormat}</p>
      </div>
    </div>
  )
}

export default GitHubRepoCard
