import { createDOMElement } from "../helpers/createDOMElement.js";
import { data } from "../store/store.js"
import { CommentCard } from "./CommentList.js";

/** {?HTMLElement} The root element for this component. */
let rootEl;

data.onChange(handleDataChange);

/**
 * @param {string} key
 */
function handleDataChange(key) {
  const prevRootEl = rootEl;
  if (!prevRootEl) return;
  const newMainCard = MainCard();
  const formEl = CommentForm();
  newMainCard.appendChild(formEl);

  prevRootEl.replaceWith(newMainCard);
}

/**
 * Renders the main card displaying the post and option to comment.
 * @return {!HTMLElement}
 */
export function MainCard() {
  const isLoading = !data.get('postLoaded');
  const post = data.get('post');
  rootEl = createDOMElement(`<main id="main-card"></main>`);
  if (isLoading && !post) {
    rootEl.innerHTML = '<div id="title">Loading</div>';
  } else {
    rootEl = createDOMElement(`
      <div
      class="container border pb-2 rounded-lg shadow-sm border-gray-300 lg:max-w-5xl bg-white mx-auto"
      >
        <div
          id="title"
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
                ${post.title}
              </h2>
              <p class="text-sm">(www.axios.com)</p>
            </div>
            <div class="text-xs">
              ${post.points} pts by ${post.author} 22 minutes ago |
            </div>
          </div>
        </div>
      </div>
    </div>
    `);
  }

  return rootEl;
}

function CommentForm() {
  let comment = "";
  const form = createDOMElement(`
  <form class="w-full flex flex-col p-8">
    <textarea
      name="comment"
      id="comment"
      class="px-6 py-4 border rounded-sm mt-5 w-full lg:max-w-lg outline-none focus:border focus:border-gray-600 null"
      draggable="false"
      placeholder="Enter your comment"
      style="resize: none"
    >${comment}</textarea>
    <button
      type="submit"
      class="bg-red-500 text-sm text-white rounded-lg outline-none border-transparent md:max-w-xs text-left px-8 py-2 self-start transition-colors duration-75 hover:bg-red-600 mt-3"
    >
      add comment
    </button>
  </form>
  `)
  form.addEventListener('submit', function userTyping(e) {
    e.preventDefault();
    const userInput = [...e.target.children][0].value;
    const commentSection = document.querySelector('#comment-section');
    const postId = data.get('post').id
    const userComment = {comment: userInput, author: 'Pib Bib', PostId: postId};
    
    // Do not create waterfall request by using await
    fetch('http://localhost:8080/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userComment)
    });

    // Weak optimistic rendering logic
    const NewUserComment = CommentCard(userComment);
    commentSection.appendChild(NewUserComment);
    
    e.target.children[0].value = '';
  });
  return form;
};
