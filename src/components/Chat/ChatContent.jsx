import { useQuery } from "@tanstack/react-query";
import io from "socket.io-client";
import { layMessages } from "../../services/Chat";
import { useEffect, useState } from "react";
import UseUser from "../../context/UseUser";
import { MessageDiv, MessageWrapper } from "../../ui/Message";

function ChatContent({ contact }) {
  const [messages, setMessages] = useState([]);
  const { data: user, isLoading: userLoading } = UseUser();
  const User = user?.user;

  // Fetch old messages once using react-query
  const { data: oldMessages, isLoading: messagesLoading } = useQuery({
    queryKey: ["Messages", contact._id], // Unique key for the contact
    queryFn: () => layMessages(contact._id),

    enabled: !!contact?._id, // Only fetch when the contact is available
  });
  useEffect(() => {
    if (oldMessages) setMessages(oldMessages.messages);
  }, [oldMessages]);
  useEffect(() => {
    if (userLoading || messagesLoading || !User?._id || !contact?._id) return;

    // Initialize socket connection when User and contact data are ready
    const socket = io("http://localhost:3000");

    // Join room for the two users
    socket.emit("joinRoom", { userId: User._id, partnerId: contact._id });

    // Listen for new real-time messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]); // Append new messages
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, [User?._id, contact?._id, userLoading, messagesLoading]);
  console.log(messages);
  return (
    <div className="chat-window">
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
