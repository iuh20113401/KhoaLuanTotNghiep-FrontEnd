import styled from "styled-components";
import Avatar from "../../../ui/Avatar";
import Card from "../../../ui/Card";
import { Col10, Col2, StyledRow } from "../../../ui/Row";

const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const StyledName = styled.div`
  margin-left: 0.8rem;
  display: block;
  & h6,
  p {
    padding: 0;
    margin: 0;
  }
`;
function ChatHIstory({ contact }) {
  return (
    <div>
      <Card.Header>
        <StyledRow>
          <Col10>
            <StyledRow>
              <Avatar src={`${SERVER}${contact?.hinhAnh}`} />
              <StyledName>
                <h6>{contact.hoTen}</h6>
                <p className="light">
                  {contact.vaiTro === 0 ? "Sinh viên" : "Giảng viên"}
                </p>
              </StyledName>
            </StyledRow>
          </Col10>
          <Col2></Col2>
        </StyledRow>
      </Card.Header>
    </div>
  );
}

export default ChatHIstory;
