import { useQuery } from "@tanstack/react-query";
import ChatContact from "../components/Sinhvien/Chat/ChatContact";
import ChatHIstory from "../components/Sinhvien/Chat/ChatHIstory";
import Card from "../ui/Card";
import { ColLg, StyledRow } from "../ui/Row";
import { layDanhSachTroChuyen } from "../services/User";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ChatContent from "../components/Chat/ChatContent";
import ChatFooter from "../components/Chat/ChatFooter";
const ChatContentContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
  padding: 1.5rem 1.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ChatFooterContainer = styled.div`
  width: 100%;
  height: 100px;
`;
function Chat() {
  const [contact, setContact] = useState();
  const { data, isLoading } = useQuery({
    queryKey: ["danhSachTroChuyen"],
    queryFn: layDanhSachTroChuyen,
  });
  const DanhSachTroChuyen = data?.danhSachTroChuyen;
  useEffect(() => {
    console.log(DanhSachTroChuyen);
    if (DanhSachTroChuyen) setContact(DanhSachTroChuyen[0]);
  }, [DanhSachTroChuyen]);
  return (
    !isLoading &&
    contact && (
      <Card>
        <StyledRow>
          <ChatContact
            contact={contact}
            setContact={setContact}
            DanhSachTroChuyen={DanhSachTroChuyen}
          />
          <ColLg>
            <ChatHIstory contact={contact} />
            <ChatContentContainer>
              <ChatContent contact={contact} />
            </ChatContentContainer>
            <ChatFooterContainer>
              <ChatFooter contact={contact} />
            </ChatFooterContainer>
          </ColLg>
        </StyledRow>
      </Card>
    )
  );
}

export default Chat;
