import styled from "styled-components";
import FormDangKy from "../../components/Sinhvien/DangKyThucTap/FormDangKy";
import Card from "../../ui/Card";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";
const StyledDiv = styled.div`
  padding: 1.6rem;
  min-heigth: 80vh;
`;
function DangKyThucTap() {
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();

  return (
    <>
      <h5>Đăng ký thực tập doanh nghiệp</h5>
      <Card>
        <StyledDiv>
          {!caiDatLoading && <FormDangKy caiDatInfo={caiDatInfo} />}
        </StyledDiv>
      </Card>
    </>
  );
}

export default DangKyThucTap;
