export default function renderDOM(selector: any, block: any) {
  const element = document.querySelector(selector);
  element.appendChild(block.getContent());
  
  return element;
}
