import { useQuery } from "@tanstack/react-query";
import io from "socket.io-client";
import { layMessages } from "../../services/Chat";
import { useEffect, useState } from "react";
import UseUser from "../../context/UseUser";
import { MessageDiv, MessageWrapper } from "../../ui/Message";
import LoadingSpinner from "../../ui/Spinner";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function ChatContent({ contact }) {
  const [messages, setMessages] = useState([]);
  const { data: user, isLoading: userLoading } = UseUser();
  const User = user?.user;

  // Fetch old messages once using react-query
  const { data: oldMessages, isLoading: messagesLoading } = useQuery({
    queryKey: ["Messages", contact?._id], // Unique key for the contact
    queryFn: () => layMessages(contact?._id),

    enabled: !contact?._id,
  });
  useEffect(() => {
    if (oldMessages) setMessages(oldMessages.messages);
  }, [oldMessages]);
  useEffect(() => {
    if (userLoading || messagesLoading || !User?._id || !contact?._id) return;

    const socket = io(`${SERVER}`);

    socket.emit("joinRoom", { userId: User._id, partnerId: contact._id });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [User?._id, contact?._id, userLoading, messagesLoading]);
  return (
    <div className="chat-window">
      {messagesLoading && <LoadingSpinner />}
      {messages?.map((msg, index) => (
        <MessageWrapper className={msg.sender === User._id ? "you" : ""}>
          <MessageDiv
            key={index}
            className={msg.sender === User._id ? "you" : ""}
          >
            {msg.content}
          </MessageDiv>
        </MessageWrapper>
      ))}
    </div>
  );
}

export default ChatContent;
