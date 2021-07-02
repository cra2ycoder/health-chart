// import Link from "next/link";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IndexPage() {
  const { data, error } = useSwr("/api/googlesheet", fetcher);
  console.log({ data, error });
  return <button>create file</button>;
}
