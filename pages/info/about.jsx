import React from "react";
import Link from "next/link";
import { Header } from "components";
import PropTypes from "prop-types";

class AboutPage extends React.Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>You can reload to see how the page change.</p>
          <Link href="/">
            <button type="button">Home</button>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;
AboutPage.propTypes = {
  isServer: PropTypes.bool.isRequired,
};
