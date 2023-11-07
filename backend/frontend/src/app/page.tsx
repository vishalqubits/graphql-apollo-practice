"use client";

import { useAddBookMutation } from "../../client/__client_generated__/apollo-hooks/graphql";

export default function Home() {
  const [addBook] = useAddBookMutation();
  return (
    <>
      <div>Books list:</div>
      <button
        onClick={async () => {
          await addBook({
            variables: {
              input: {
                author: "vishal",
                title: "book 3",
              },
            },
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
