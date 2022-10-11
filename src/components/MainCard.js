import { createDOMElement } from "../helpers/createDOMElement.js";

/** {?HTMLElement} The root element for this component. */
let rootEl;

/**
 * Renders the main card displaying the post and option to comment.
 * @return {!HTMLElement}
 */
export function MainCard() {
  // TODO:  Add Loading / Error State
  const isLoading = false;
  rootEl = createDOMElement(`<main id="main-card"></main>`);
  if (isLoading) {
    rootEl.innerHTML = "ADD MARKUP HERE!";
  } else {
    rootEl = createDOMElement(`
      <div
      class="container border pb-2 rounded-lg shadow-sm border-gray-300 lg:max-w-5xl bg-white mx-auto"
      >
        <div
          class="flex py-5 px-3 sm:py-6 sm:px-5 link__item bg-white rounded-t-lg"
        >
          <div class="flex items-center">
            <div class="font-bold opacity-75"></div>
            <div class="mx-3 cursor-pointer" title="Upvote">
              <svg
                class="w-4 h-3 fill-current text-red-500 hover:text-red-700 transition-colors duration-75"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.92383 0.692841L13.419 11.9428H0.428638L6.92383 0.692841Z"
                ></path>
            </svg>
          </div>
        </div>
        <div class="link__main">
          <div class="flex flex-col">
            <div class="flex items-baseline mb-1 flex-wrap">
              <h2
                class="mr-2 text-base sm:text-lg cursor-pointer"
                title="Test"
              >
                Modi, Merkel, Jinping, Obama and Trump back Kanye West for
                President.
              </h2>
              <p class="text-sm">(www.axios.com)</p>
            </div>
            <div class="text-xs">
              42069 pts by @DonaldTrump 22 minutes ago |
            </div>
          </div>
        </div>
      </div>
      <form class="w-full flex flex-col p-8">
        <textarea
          name="comment"
          id="comment"
          class="px-6 py-4 border rounded-sm mt-5 w-full lg:max-w-lg outline-none focus:border focus:border-gray-600 null"
          draggable="false"
          placeholder="Enter your comment"
          style="resize: none"
        ></textarea
        ><button
          type="submit"
          class="bg-red-500 text-sm text-white rounded-lg outline-none border-transparent md:max-w-xs text-left px-8 py-2 self-start transition-colors duration-75 hover:bg-red-600 mt-3"
        >
          add comment
        </button>
      </form>
    </div>
    `);
  }
  return rootEl;
}
