import client from "./base_client";
import { ICreateMessage, IMessage } from "./interface";

export async function listMessages() {
  const { data } = await client.get("/v1/messages");
  return data as { data: IMessage[] };
}

export async function createMessage(message: ICreateMessage) {
  const { data } = await client.post("/v1/messages", message);
  return data;
}