import StyledBanner from "../../../ui/Banner";
import hinhAnhSRC from "../../../../public/hinhanh/QuyTinhKLTN.png";
const content = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
  href: "#",
  source: [
    {
      width: "(min-width: 1200px)",
      src: hinhAnhSRC,
    },
    {
      width: "(min-width: 992px)",
      src: hinhAnhSRC,
    },
    {
      width: "(min-width: 768px)",
      src: hinhAnhSRC,
    },
    {
      width: "(min-width: 569px)",
      src: hinhAnhSRC,
    },
  ],
};
function Banner() {
  return (
    <div>
      <StyledBanner content={content} />
    </div>
  );
}

export default Banner;
