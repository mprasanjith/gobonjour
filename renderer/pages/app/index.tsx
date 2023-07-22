import React from "react";
import Head from "next/head";
import Link from "next/link";
import AuthOnlyLayout from "../../layouts/AuthOnlyLayout";
import { Navigation } from "../../layouts/Navigation";

function Next() {
  return (
    <AuthOnlyLayout>
      <Head>
        <title>Actions</title>
      </Head>
      <div>
        <Navigation />
        <div>
          
        </div>
      </div>
    </AuthOnlyLayout>
  );
}

export default Next;
