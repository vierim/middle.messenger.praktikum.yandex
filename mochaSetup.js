import { JSDOM } from 'jsdom';

const jsdom = new JSDOM(`<body></body>`);

globalThis.window = jsdom.window;
globalThis.document = jsdom.window.document;
globalThis.history = jsdom.window.history;
globalThis.Node = jsdom.window.Node;
globalThis.MouseEvent = jsdom.window.MouseEvent;
globalThis.XMLHttpRequest = jsdom.window.XMLHttpRequest;
