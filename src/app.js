import { createDOMElement } from "./helpers/createDOMElement.js";
import { MainCard } from "./components/MainCard.js";
import { CommentList } from "./components/CommentList.js";
import { initializePost } from "./controller/post.js";

const rootEl = document.getElementById("app");

// Initial app render.
refreshApp();
// Re-render the app when the url changes.
window.addEventListener("popstate", refreshApp);

// Load the post data
initializePost();

/** Renders a fresh copy of the app and inserts it into the DOM. */
function refreshApp() {
  rootEl.innerHTML = "";
  rootEl.appendChild(app());
}

/**
 * Renders the entire app.
 * @return {!HTMLElement}
 */
function app() {
  // TODO:  Add Router Logic
  const postId = new URL(location.href).searchParams.get("post");
  const appBody = AppBody();
  if (postId) {
    // Migrate MainCard and Comments here
    // after main page list is created
  } else {
    rootEl.appendChild(NavHeader());

    // APP BODY
    rootEl.appendChild(appBody)
    appBody.appendChild(MainCard());
    appBody.appendChild(CommentList());
  }
  return appBody;
}

function AppBody() {
  return createDOMElement(`
    <main id="main-card" class="p-16"></main>
  `)
}

/**
 * Renders the header.
 * @return {!HTMLElement}
 */
function NavHeader() {
  return createDOMElement(`
    <nav class="py-4 md:py-8 shadow-sm bg-white px-8 xl:px-0 flex flex-col">
      <span class="text-3xl font-bold active">🗺️ Digital Immigrants 🗺️</span>
      <span class="text-sm italic">Damn, it feels good to be an immigrant!</span>
    </nav>
  `);
}
