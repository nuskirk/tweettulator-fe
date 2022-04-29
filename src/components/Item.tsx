import clsx from "clsx";
import { useState } from "react";
import { IMessage } from "../api/interface";
import { createMessage, listMessages } from "../api/message";
import useAuth from "../hooks/useAuth";
import useItems from "../hooks/useItem";
import { Operator } from "../interfaces";
import { reflectOperator } from "../utils";
import Modal from "./Modal";

const styles = {
  container: clsx("w-full max-w-sm lg:flex lg:max-w-full justify-center"),
  roundedWrapper: clsx(
    "h-48 flex-none overflow-hidden rounded-t bg-cover text-center",
    "lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
  ),
  roundedBorder: clsx(
    "flex flex-col justify-between rounded-b  bg-white p-4",
    "border border-gray-400",
    "leading-normal rounded",
    "mb-8 min-w-[50%]"
  ),
  btnReply: clsx("flex justify-end bg-blue"),
  nestedReply: clsx("ml-16"),
};

type MessageProps = Pick<
  IMessage,
  "reps" | "parentId" | "writer" | "text" | "_id"
> & {
  parent?: IMessage;
  hasReply?: boolean;
};

export default function ItemComponent(props: MessageProps) {
  const { user } = useAuth();
  const { setCurrentItems } = useItems();
  const [showModal, setShowModal] = useState(false);
  const [currentReply, setCurrentReply] = useState("");

  let result: any;

  if (props.parent) {
    const calcString = props.parent.reps!.map((message) => message.text);
    const childIndex = props.parent.reps!.findIndex(
      (message: any) => message._id === props._id
    );
    const childrenCalcString = calcString.slice(0, childIndex + 1);

    result = parseFloat(props.parent.text);

    childrenCalcString.forEach((calcString) => {
      const op = calcString[0] as Operator;
      result = reflectOperator(op, result.toString(), calcString.substring(1));
    });
  }

  const handleReply = async (msgId: string) => {
    await createMessage({
      parentId: msgId,
      text: currentReply,
      writer: user,
    });

    const { data } = await listMessages();
    setCurrentItems(data);

    setShowModal(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div
          className={clsx(
            styles.roundedBorder,
            props.parentId && styles.nestedReply
          )}
        >
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="mb-2 flex text-xl font-bold text-gray-900 ">
                Current message: {props.text}
              </div>
              {props.parent && (
                <div className="mb-2 flex text-xl font-bold text-gray-900 ">
                  Result: {result}
                </div>
              )}
            </div>

            <h4 className="text-base text-gray-700">{props.text}</h4>
          </div>
          <div className="flex items-center">
            <img
              className="mr-4 h-10 w-10 rounded-full"
              src={"https://ui-avatars.com/api/?name=" + props.writer}
              alt="User avatar"
            />
            <div className="text-sm">
              <p className="font-bold leading-none text-gray-900">
                {props.writer}
              </p>
              <p className="text-gray-600">{new Date().toDateString()}</p>
            </div>
          </div>
          {props.hasReply && (
            <button
              className={styles.btnReply}
              onClick={() => setShowModal(true)}
            >
              Reply
            </button>
          )}
        </div>
      </div>
      {/* Modal Reply */}
      {showModal ? (
        <>
          <Modal
            closeModal={() => setShowModal(false)}
            inputChanged={(e) => setCurrentReply(e.target.value)}
            title={"Reply to: " + props.text}
            onSubmit={() => handleReply(props._id!)}
          />
        </>
      ) : null}
      {props.reps &&
        props.reps
          .sort((a, b) => {
            return (
              new Date(a.createdAt!).getTime() -
              new Date(b.createdAt!).getTime()
            );
          })
          .map((child, index) => (
            <ItemComponent
              key={child._id}
              {...child}
              parent={props}
              hasReply={index === props.reps!.length - 1}
            />
          ))}
    </>
  );
}
