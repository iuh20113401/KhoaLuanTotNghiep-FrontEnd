import { useState } from "react";
import UseUser from "../../context/UseUser";
import io from "socket.io-client";
import { StyledInput } from "../../ui/Input";
import { Col10, Col2, StyledRow } from "../../ui/Row";
import Button from "../../ui/Button";

function ChatFooter({ contact }) {
  const [inputMessage, setInputMessage] = useState("");
  const { data, isLoading } = UseUser();
  const User = data?.user;

  const sendMessage = () => {
    if (inputMessage.trim() && User?._id && contact?._id) {
      const socket = io("http://localhost:3000");
      socket.emit("chatMessage", {
        content: inputMessage,
        userId: User._id,
        partnerId: contact._id,
      });
      setInputMessage(""); // Clear input after sending the message
    }
  };

  return (
    <div>
      <StyledRow>
        <Col10>
          <StyledInput
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
          />
        </Col10>
        <Col2>
          <Button size="block" onClick={sendMessage}>
            Send
          </Button>
        </Col2>
      </StyledRow>
    </div>
  );
}

export default ChatFooter;
