import styled from "styled-components";
import FormDangKy from "../../components/Sinhvien/DangKyThucTap/FormDangKy";
import Card from "../../ui/Card";
const StyledDiv = styled.div`
  padding: 1.6rem;
`;
function DangKyThucTap() {
  return (
    <>
      <h5>Đăng ký thực tập doanh nghiệp</h5>
      <Card>
        <StyledDiv>
          <FormDangKy />
        </StyledDiv>
      </Card>
    </>
  );
}

export default DangKyThucTap;
