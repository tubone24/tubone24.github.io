import { h } from "../../deps.ts";

const Timeline = () => (
  <div
    class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
  >
    <div class="flex flex-row-reverse md:contents">
      <div
        class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
      >
        <h3 class="font-semibold text-lg mb-1">DEVOPS DEVELOPER (KDDI)</h3>
        <p class="leading-tight text-justify">
          Developing and operating some location-based services by using on-premise servers.
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
        ></div>
      </div>
    </div>
    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
        ></div>
      </div>
      <div
        class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
      >
        <h3 class="font-semibold text-lg mb-1">PROJECT MANAGER (KDDI)</h3>
        <p class="leading-tight text-justify">
          I had many experiences such as project management, team building, and handling big data.  <br />
        </p>
      </div>
    </div>
    <div class="flex flex-row-reverse md:contents">
      <div
        class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
      >
        <h3 class="font-semibold text-lg mb-1">DEVOPS DEVELOPER (KDDI)</h3>
        <p class="leading-tight text-justify">
          Developing and Operating Web-based Chatbot services by using AWS and Python, Node.js.
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
        ></div>
      </div>
    </div>
    <div class="flex flex-row-reverse md:contents">
      <div
        class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
      >
        <h3 class="font-semibold text-lg mb-1">DATA ENGINEERING DEVELOPER & TECH LEAD (KDDI)</h3>
        <p class="leading-tight text-justify">
          Developing data analysis infrastructure using AWS because of analysis of the Chat-bot's conversations.
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
        ></div>
      </div>
    </div>
    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
        ></div>
      </div>
      <div
        class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
      >
        <h3 class="font-semibold text-lg mb-1">FullStack Developer (EventHub)</h3>
        <p class="leading-tight text-justify">
          Developing an event platform using React, Nest.js (TypeScript), and AWS.
        </p>
      </div>
    </div>
  </div>
);

export default Timeline
