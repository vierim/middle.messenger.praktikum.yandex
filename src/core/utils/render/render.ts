import type { RenderEngine } from "./types";

const renderDOM: RenderEngine<Element> = (element, block) => {
  if(!element) {
    return;
  }

  const content = block.getContent();

  if(content) {
    element.innerHTML = '';
    element.appendChild(content);

    block.dispatchComponentDidMount();
  }
  
  return element;
}

export default renderDOM;
