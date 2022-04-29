import { useEffect, useState } from "react";
import { IMessage } from "../api/interface";
import { listMessages } from "../api/message";

export default function useItems(items?: IMessage[]) {
  const [currentItems, setCurrentItems] = useState(items);
  useEffect(() => {
    async function fetchThreads() {
      const { data } = await listMessages();
      const sorted = data.sort((a, b) => {
        return new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      });
      setCurrentItems(sorted);
    }
    if (!items) {
      fetchThreads();
    }
  }, [items]);
  return { currentItems, setCurrentItems };
}