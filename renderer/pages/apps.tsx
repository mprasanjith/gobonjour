import React from "react";
import Head from "next/head";
import Link from "next/link";
import AuthOnlyLayout from "../layouts/AuthOnlyLayout";

function Next() {
  return (
    <AuthOnlyLayout>
      <React.Fragment>
        <Head>
          <title>Actions</title>
        </Head>
        <div>
          <p>
            ⚡ Electron + Next.js ⚡ -
            <Link href="/home">
              <a>Go to home page</a>
            </Link>
          </p>
        </div>
      </React.Fragment>
    </AuthOnlyLayout>
  );
}

export default Next;
