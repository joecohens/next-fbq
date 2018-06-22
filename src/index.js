import { Component, createElement } from "react";

import * as analytics from "./analytics";

function isLocal() {
  return location.hostname === "localhost";
}

export default code => Page => {
  class WithFacebookPixel extends Component {
    componentDidMount() {
      if (isLocal()) return;
      analytics.init(code);
      analytics.pageview();
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
