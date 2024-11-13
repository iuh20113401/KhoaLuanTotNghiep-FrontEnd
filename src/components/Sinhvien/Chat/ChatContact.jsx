import styled from "styled-components";
import Card from "../../../ui/Card";
import { ColLg, StyledRow } from "../../../ui/Row";
import Avatar from "../../../ui/Avatar";
import { StyledInput } from "../../../ui/Input";
import { Link } from "react-router-dom";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const StyledChatContact = styled.div`
  position: static;
  border-right: 1px solid #e6e6e8 !important;
  background-color: #fff;
  left: calc(-21rem - 1rem);
  height: calc(100vh - 10.9rem);
  width: 21rem;
  flex-basis: 21rem;
  transition: all 0.25s ease;
`;
const StyledContactList = styled.ul`
  margin-bottom: 0 !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 0;
  list-style: none;
  & > li {
    display: flex;
    justify-content: space-between;
    border-radius: 0.375rem;
    padding: 0.528rem 1.056rem 0.264rem;
    margin: 0.25rem 0.75rem;
    & h5 {
      color: var(--bs-primary);
    }
    cursor: pointer;

    &.active {
      color: #fff;
      box-shadow: 0px 2px 6px 0px rgba(115, 103, 240, 0.3);
      background: var(--bs-primary);
      & h6,
      p {
        color: #fff !important;
      }
    }
  }
`;
const StyledName = styled.div`
  display: block;
  & h6,
  p {
    padding: 0;
    margin: 0;
  }
`;
function ChatContact({ contact, setContact, DanhSachTroChuyen }) {
  return (
    <StyledChatContact>
      <Card.Header>
        <StyledRow gap="1.6rem">
          <Avatar src="../public/hinhanh/avatar_1.png" />
          <ColLg>
            <StyledInput placeholder="Tìm..." />
          </ColLg>
        </StyledRow>
      </Card.Header>
      <StyledContactList>
        <li>
          <h5>Chat</h5>
        </li>
        {DanhSachTroChuyen?.map((user) => (
          <li
            className={user._id.toString() === contact?._id ? "active" : ""}
            onClick={() => setContact(user)}
          >
            <StyledRow gap=".8rem">
              <Avatar src={`${SERVER}${user.hinhAnh}`} />
              <StyledName>
                <h6>{user.hoTen}</h6>
                <p className="light">
                  {user.vaiTro === 0 ? "Sinh viên" : "Giảng viên"}
                </p>
              </StyledName>
            </StyledRow>
          </li>
        ))}
      </StyledContactList>
    </StyledChatContact>
  );
}

export default ChatContact;
