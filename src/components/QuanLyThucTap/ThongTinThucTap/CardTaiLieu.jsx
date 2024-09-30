import { SERVER } from "../../../context/env";
import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import { Col10, Col2, StyledRow } from "../../../ui/Row";
import { Link } from "react-router-dom";
function CardTaiLieu({ taiLieu }) {
  return (
    <>
      <h5>Tài liệu</h5>
      <div className="mt-1">
        {taiLieu.map((tl) => (
          <StyledRow className="align-center mt-1">
            <Col10>
              <p>{tl.tenTaiLieu}</p>
            </Col10>
            <Col2>
              <Link to={`${SERVER}${tl.duongDan}`}>
                <Button variation="icon">
                  <HiDownload />
                </Button>
              </Link>
            </Col2>
          </StyledRow>
        ))}
      </div>
    </>
  );
}

export default CardTaiLieu;
