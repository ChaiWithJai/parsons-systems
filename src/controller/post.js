import { data } from '../store/store.js';

/**
 * @typedef{{
 *   id: string,
 *   title: string,
 *   url: string,
 *   points: number,
 *   author: number,
 *   createdAt: number,
 *   comments: Array<Comment>,
 * }}
 */
export let Post;

data.set('posts', []);
data.set('postLoaded', false);

/**
 * Loads posts and saves to the data store.
 * @return {!Promise<void>}
 */
export async function initializePost() {
  const post = await loadPost();
  data.set('post', post);
  data.set('postLoaded', true);
}

/**
 * Loads the post data.
 * @return {!Promise<!Array<!Post>>}
 */
async function loadPost() {
  // Fetch from this API assets/posts/1.json
  const data = await fetch("http://localhost:8080/posts/1");
  // Convert to JSON
  return data.json();
}
