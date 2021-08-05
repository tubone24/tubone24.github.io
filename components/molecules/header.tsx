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
          GitHub Stats
        </a>
      </div>
      <div class="mt-2">
        <a
          href="https://github.com/tubone24"
          class="hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Header
