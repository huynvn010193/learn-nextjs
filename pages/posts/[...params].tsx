import { useRouter } from "next/router";
import * as React from "react";

export interface ParamsPageProps {}

export default function ParamsPagePage(props: ParamsPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>ParamsPagePage</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
