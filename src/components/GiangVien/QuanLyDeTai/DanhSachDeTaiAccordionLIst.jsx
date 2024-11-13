import ChiTietDeTaiAccordion from "./ChiTietDeTaiAccordion";

function DanhSachDeTaiAccordionLIst({ danhSachDeTai, sortedDoAn, setIsEdit }) {
  return (
    <div>
      <div className="p-3">
        <h6>Danh sách đề tài</h6>
      </div>
      {sortedDoAn.map((deTai) => (
        <ChiTietDeTaiAccordion
          deTai={deTai}
          key={deTai._id}
          setIsEdit={setIsEdit}
        />
      ))}
    </div>
  );
}

export default DanhSachDeTaiAccordionLIst;
