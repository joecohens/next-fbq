import { Component, createElement } from "react";

import * as analytics from "./analytics";

function isLocal() {
  return location.hostname === "localhost";
}

export default (code, { isApp = true } = {}) => Page => {
  class WithFacebookPixel extends Component {
    componentDidMount() {
      this.isLocal = isLocal();
      if (this.isLocal) return;
      analytics.init(code);
      analytics.pageview();
    }

    componentDidUpdate() {
      if (isApp) {
        if (this.isLocal) return;
        analytics.init(code);
        analytics.pageview();
      }
    }

    render() {
      return createElement(Page, this.props);
    }
  }

  if (Page.getInitialProps) {
    WithFacebookPixel.getInitialProps = Page.getInitialProps;
  }

  return WithFacebookPixel;
};
