import { h, Fragment } from "../deps.ts";
import type { PageProps, GetStaticData } from "../deps.ts";
import Header from "../components/molecules/header.tsx";
import Timeline from "../components/molecules/timeline.tsx";

function IndexPage() {
  return (
    <div class="mx-auto max-w-screen-md px-6 sm:px-6 md:px-8">
      <Header />
      <main>
        <Timeline />
      </main>
    </div>
  );
}

export default IndexPage;
