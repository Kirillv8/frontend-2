import { DataObject } from "../interface/interface";
import { createTemplateForDataWebSocket } from "./createTemplateForDataWebSocket";
export const websocket = (token: string | undefined, messages: string) => {
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
  const message = {
    text: messages,
  };
  socket.onopen = (event) => {
    socket.send(JSON.stringify({ text: messages }));
    socket.onmessage = (event) => {
      const data: DataObject = JSON.parse(`${event.data}`);
      
      if (data !== null) {
        createTemplateForDataWebSocket(data);
      }
    };
  };
};

