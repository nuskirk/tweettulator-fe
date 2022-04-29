import { useEffect, useState } from "react";
import { ICreateMessage } from "../api/interface";
import { createMessage } from "../api/message";
import ItemComponent from "../components/Item";
import Modal from "../components/Modal";
import useAuth from "../hooks/useAuth";
import useItems from "../hooks/useItem";

export default function ListItemComponent() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { currentItems, setCurrentItems } = useItems();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    console.log("Current items: ", currentItems);
  }, [currentItems]);

  const handleCreateMessage = async (payload: ICreateMessage) => {
    const { data } = await createMessage(payload);
    const _items = [...currentItems!, data].sort((a, b) => {
      return (
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      );
    });
    setCurrentItems(_items);
    setShowModal(false);
  };
  return (
    <>
      <div className="flex justify-center space-x-2">
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          New Thread
        </button>
      </div>

      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          onSubmit={() =>
            handleCreateMessage({
              text: newMessage,
              writer: user,
            })
          }
          inputChanged={(e) => setNewMessage(e.target.value)}
          title="New Thread"
        />
      )}
      {currentItems &&
        currentItems.map((msg, index) => {
          return (
            <ItemComponent key={index} {...msg} hasReply={!msg.reps?.length} />
          );
        })}
    </>
  );
}
