import { createDOMElement } from "../helpers/createDOMElement.js";

/** {?HTMLElement} The root element for this component. */
let rootEl;

/**
 * Renders the comment section
 * @return {!HTMLElement}
 */

export function CommentList() {
  // TODO: Add Loading / Error State
  const isLoading = false;
  rootEl = createDOMElement("");

  if (isLoading) {
    rootEl.innerHTML = "ADD MARKUP HERE!";
  } else {
    rootEl = createDOMElement(`
      <div class="mt-8 mb-10">
        <h2 class="text-sm md:text-lg text-gray-800">Comments</h2>
        <div class="mt-5 pb-10">
          <div
            class="px-4 py-3 mt-3 shadow-sm bg-white flex flex-col w-full md:max-w-md rounded border-l border-red-500"
          >
            <div class="flex">
              <p class="text-base text-gray-800">
                @Oprah
                <span class="text-xs text-gray-600">over 16 minutes ago</span>
              </p>
            </div>
            <p class="text-sm mt-2 text-gray-700">
              I will personally knock on doors for his campaign.
            </p>
          </div>
          <div
            class="px-4 py-3 mt-3 shadow-sm bg-white flex flex-col w-full md:max-w-md rounded border-l border-red-500"
          >
            <div class="flex">
              <p class="text-base text-gray-800">
                @Joe Biden
                <span class="text-xs text-gray-600">over 10 minutes ago</span>
              </p>
            </div>
            <p class="text-sm mt-2 text-gray-700">
              Ye will unite this whole country and then the entire world.
            </p>
          </div>
          <div
            class="px-4 py-3 mt-3 shadow-sm bg-white flex flex-col w-full md:max-w-md rounded border-l border-red-500"
          >
            <div class="flex">
              <p class="text-base text-gray-800">
                @champagnepapi
                <span class="text-xs text-gray-600">over 3 minutes ago</span>
              </p>
            </div>
            <p class="text-sm mt-2 text-gray-700">I wish I could be him.</p>
          </div>
        </div>
      </div>
    `);
  }
  return rootEl;
}
