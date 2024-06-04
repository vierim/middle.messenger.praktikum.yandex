import { Component } from "../component";

export default function renderDOM(selector: string, block: Component) {
  const element = document.querySelector(selector);
  if(!element) {
    return;
  }

  const content = block.getContent();

  if(content) {
    element.appendChild(content);
  }
  
  return element;
}
