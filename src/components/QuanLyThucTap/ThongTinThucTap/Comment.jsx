import styled from "styled-components";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { StyledTextarea } from "../../../ui/Input";
import { ColLg, StyledRow } from "../../../ui/Row";
import Avatar from "../../../ui/Avatar";
import { useMutation } from "@tanstack/react-query";
import { themComment } from "../../../services/ThucTap";
import UseUser from "../../../context/UseUser";
import { useState } from "react";
import formatVieNamDate from "../../../utils/FormatDate";

const StyledCommentSection = styled.div`
  height: 300px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  & span {
    font-size: 0.8rem;
  }
`;
function Comment({ idDoAn, comment, refetch }) {
  const [noiDung, setNoiDung] = useState("");
  const { data } = UseUser();
  const user = data?.user;
  const { mutate, isPending } = useMutation({
    mutationFn: themComment,
    onSuccess: () => {
      refetch();
      setNoiDung("");
    },
  });
  function handleThemComment(e) {
    e.preventDefault();
    if (noiDung === "") return;
    mutate({ ...user, _id: idDoAn, noiDung });
  }
  return (
    <Card className="pb-3 pl-3 pr-3">
      <Card.Header>
        <h6>
          <b>Comments</b>
        </h6>
      </Card.Header>
      <StyledCommentSection>
        {comment?.map((com) => (
          <StyledRow gap=".8rem">
            <Avatar src={`http://localhost:3000/${com.hinhAnh}`} />
            <ColLg>
              <p>
                <b>{com.hoTen}</b>
              </p>
              <p className="content light">{com.noiDung}</p>
              <span className="light">{formatVieNamDate(com.ngayTao)}</span>
            </ColLg>
          </StyledRow>
        ))}
      </StyledCommentSection>
      <form onSubmit={(e) => handleThemComment(e)}>
        <StyledTextarea
          rows={3}
          placeholder="Nhập bình luận"
          value={noiDung}
          onChange={(e) => setNoiDung(e.target.value)}
        />
        <div className=" text-end">
          <Button className="mt-2" size="sm" disabled={isPending}>
            Đăng
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Comment;
