import { h } from "../../deps.ts";

const Header = () => (
  <section class="my-8">
    <h1 class="text-3xl font-bold">tubone24</h1>
    <div class="flex flex-wrap justify-between w-full">
      <div class="mt-2">
        <a
          href="/"
          class="hover:underline"
        >
          About me
        </a>
        <a
          href="/user/tubone24"
          class="hover:underline ml-4"
        >
          Stats
        </a>
        <a
          href="/mostpopular"
          class="hover:underline ml-4"
        >
          Most Stargazers
        </a>
      </div>
      <div class="mt-2">
        <a
          href="https://blog.tubone-project24.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline ml-4"
        >
          Blog
        </a>
        <a
          href="https://portfolio.tubone-project24.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline ml-4"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tubone24"
          class="hover:underline ml-4"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Header
