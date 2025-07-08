import DataComponent from "@/components/DataComponent";
import SearchComponent from "@/components/SearchComponent";
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async ({
  query,
}: {
  query: { [key: string]: string | string[] | undefined };
}) => {
  const test = query.test || "";
  const random = Math.random().toString(36).substring(2, 15);
  const END_POINTS = [
    "https://jsonplaceholder.typicode.com/todos?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/users?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/posts?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/comments?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/albums?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/photos?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/todos?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/users?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/posts?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/comments?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/albums?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/photos?def=" +
      random +
      "&test=" +
      test,
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
    <div>
      <SearchComponent />
      <DataComponent data={data} />
    </div>
  );
}
