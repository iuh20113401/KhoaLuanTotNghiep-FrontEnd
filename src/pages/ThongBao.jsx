import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { layThongBao } from "../services/ThongBao";
import Card from "../ui/Card";
import decodeHtml from "../utils/ChangeHtmlCode";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function NoiDungThongBao() {
  let { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["ThongBao"],
    queryFn: () => layThongBao(id),
  });
  const thongBao = data?.result;
  return (
    !isLoading && (
      <div>
        <h6>
          <Link to={"/giangVien/thongBao"}>Thông báo</Link> {">"}{" "}
          {thongBao.tieuDe}
        </h6>
        <Card className="mt-3 p-3">
          <h3 className="text-center">{thongBao.tieuDe}</h3>
          <DisplayQuillContent content={thongBao.noiDung} />
        </Card>
      </div>
    )
  );
}

export default NoiDungThongBao;
