/**
 * Creates a dom element from an html string.
 * @param {string} html
 * @return {!HTMLElement}
 */
export function createDOMElement(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
