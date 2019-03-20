import Link from "next/link";
import React from "react";
import { Header, Downer } from "components";

/**
 * @return {Index}
 */
function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/info/about">
          <button type="button">About Me</button>
        </Link>
      </section>
      <Downer />
      <section>
        <h1>hh</h1>
        <h2>hhh</h2>
      </section>
    </main>
  );
}

export default Index;
