import { createDOMElement } from "../helpers/createDOMElement.js";
import { data } from "../store/store.js"

/** {?HTMLElement} The root element for this component. */
let rootEl;

data.onChange(handleDataChange);

/**
 * @param {string} key
 */
function handleDataChange(key) {
  const prevRootEl = rootEl;
  if (!prevRootEl) return;
  const newCommentList = CommentList();
  prevRootEl.replaceWith(newCommentList);
}

/**
 * Renders the comment section
 * @return {!HTMLElement}
 */
export function CommentList() {
  const isLoading = !data.get('postLoaded');
  const comments = data.get('post')?.Comments;
  rootEl = createDOMElement(`
    <div id="comment-list" class="mt-8 mb-10">
      <h2 class="text-sm md:text-lg text-gray-800">Comments</h2>
      <div id="comment-section" class="mt-5 pb-10"></div>
    </div>`);
  const commentList = document.querySelector('#comment-section');
  if (isLoading) {
    rootEl.innerHTML = `
        <h2 class="text-sm md:text-lg text-gray-800">Comments</h2>
        <div id="comment-section" class="mt-5 pb-10"></div>
    `;
  } else {
    comments.forEach(comment => {
      const commentEl = CommentCard(comment);
      commentList.appendChild(commentEl);
    });
    
    rootEl = document.querySelector('#comment-list');
  }
  return rootEl;
}

/**
 * Renders a comment card.
 * @param {!Comment}
 * @return {!HTMLElement}
 */
export function CommentCard(comment) {
  return createDOMElement(`
    <div
      class="px-4 py-3 mt-3 shadow-sm bg-white flex flex-col w-full md:max-w-md rounded border-l border-red-500"
    >
      <div class="flex">
        <p class="text-base text-gray-800">
        ${comment.author}
        <span class="text-xs text-gray-600">over 16 minutes ago</span>
        </p>
      </div>
      <p class="text-sm mt-2 text-gray-700">
        ${comment.comment}
      </p>
    </div>
  `)
};
