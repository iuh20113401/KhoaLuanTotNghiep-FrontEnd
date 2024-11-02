import StyledBanner from "../../../ui/Banner";
import hinhAnhSRC from "../../../../public/hinhanh/QuyTinhKLTN.png";
const content = {
  src: hinhAnhSRC,
};
function Banner() {
  return (
    <div>
      <StyledBanner content={content} />
    </div>
  );
}

export default Banner;
