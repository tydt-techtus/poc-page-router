import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const random = Math.random().toString(36).substring(2, 15);
  const END_POINTS = [
    "https://jsonplaceholder.typicode.com/todos?abc=" + random,
    "https://jsonplaceholder.typicode.com/users?abc=" + random,
    "https://jsonplaceholder.typicode.com/posts?abc=" + random,
    "https://jsonplaceholder.typicode.com/comments?abc=" + random,
    "https://jsonplaceholder.typicode.com/albums?abc=" + random,
    "https://jsonplaceholder.typicode.com/photos?abc=" + random,
    "https://jsonplaceholder.typicode.com/todos?def=" + random,
    "https://jsonplaceholder.typicode.com/users?def=" + random,
    "https://jsonplaceholder.typicode.com/posts?def=" + random,
    "https://jsonplaceholder.typicode.com/comments?def=" + random,
    "https://jsonplaceholder.typicode.com/albums?def=" + random,
    "https://jsonplaceholder.typicode.com/photos?def=" + random,
  ];

  const promises = END_POINTS.map((endpoint) =>
    fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }).then((res) => res.json())
  );

  const data = await Promise.all(promises);
  return {
    props: {
      data,
    },
  };
};

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
