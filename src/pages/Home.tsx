import { useState } from "react";
import { createMessage } from "../api/message";
import ItemComponent from "../components/Item";
import Modal from "../components/Modal";
import useAuth from "../hooks/useAuth";
import useItems from "../hooks/useItem";

export default function HomePage() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { currentItems, setCurrentItems } = useItems();
  const [newMessage, setNewMessage] = useState("");

  const handleNewThread = async () => {
    const { data } = await createMessage({
      text: newMessage,
      writer: user,
    });
    setCurrentItems([...currentItems!, data]);
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
          onSubmit={handleNewThread}
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
