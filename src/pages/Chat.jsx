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
import LoadingSpinner from "../ui/Spinner";
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
    if (DanhSachTroChuyen) setContact(DanhSachTroChuyen[0]);
  }, [DanhSachTroChuyen]);
  return (
    <Card>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <StyledRow>
          <ChatContact
            contact={contact}
            setContact={setContact}
            DanhSachTroChuyen={DanhSachTroChuyen}
          />
          <ColLg>
            {contact ? (
              <>
                <ChatHIstory contact={contact} />
                <ChatContentContainer>
                  <ChatContent contact={contact} />
                </ChatContentContainer>
                <ChatFooterContainer>
                  <ChatFooter contact={contact} />
                </ChatFooterContainer>
              </>
            ) : (
              <div className="flex h-100 align-center justify-center">
                <p>Nhấn vào biểu tưởng để bắt đầu cuộc hội thoại</p>
              </div>
            )}
          </ColLg>
        </StyledRow>
      )}
    </Card>
  );
}

export default Chat;
