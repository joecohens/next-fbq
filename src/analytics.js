import ReactPixel from 'react-facebook-pixel';

const IS_BROWSER = typeof window !== "undefined";

export function init(code) {
  if (IS_BROWSER && !window.FB_INITIALIZED && code) {
    ReactPixel.init(code);
  }
}

export function pageview() {
  ReactPixel.pageView();
}

export function event(name = "", data = {}) {
  if (name && Object.keys(data).length === 0) {
    ReactPixel.event(event, data);
  }
}

export function exception(description = "", fatal = false) {
  if (description) {
    ReactPixel.trackCustom('Error', { description, fatal });
  }
}
