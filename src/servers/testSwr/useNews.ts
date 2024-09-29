import useSWR from "swr";

const fetcher = (url: string, options?: RequestInit) =>
  fetch(url, options).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });

export function useNews() {
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)
  return {
    data,
    isLoading,
    error,
  }
}

export function usePagePost(page:number) {
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`, fetcher)
  return {
    data,
    isLoading,
    error,
  }
}