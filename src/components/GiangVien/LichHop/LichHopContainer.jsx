import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import calendar's styles
import Button from "../../../ui/Button";
import { HiCalendar } from "react-icons/hi";
import TaoLichHopCanvas from "./TaoLichHopCanvas";
import { useQuery } from "@tanstack/react-query";
import UseUser from "../../../context/UseUser";
import { layDanhSachLichHop } from "../../../services/LichHop";
const localizer = momentLocalizer(moment);

const vietnameseMessages = {
  date: "Ngày",
  time: "Thời gian",
  event: "Sự kiện",
  allDay: "Cả ngày",
  week: "Tuần",
  work_week: "Tuần làm việc",
  day: "Ngày",
  month: "Tháng",
  previous: "Trước",
  next: "Tiếp",
  yesterday: "Hôm qua",
  tomorrow: "Ngày mai",
  today: "Hôm nay",
  agenda: "Lịch trình",
  noEventsInRange: "Không có sự kiện trong khoảng thời gian này.",
  showMore: (total) => `+ thêm ${total} sự kiện`,
};
const CustomEvent = ({ event }) => {
  return (
    <>
      <span data-tooltip-id={`event-${event.id}`}>
        <strong>{event.title}</strong>
        <br />
        {event.diaDiem}
      </span>
      <ReactTooltip
        id={`event-${event.id}`}
        place="top"
        effect="solid"
        style={{ zIndex: 1000 }}
      >
        <div>
          <strong>{event.title}</strong>
          <br />
          <span>Địa điểm: {event.diaDiem}</span>
          <br />
          <span>Bắt đầu: {new Date(event.start).toLocaleString()}</span>
          <br />
          <span>Kết thúc: {new Date(event.end).toLocaleString()}</span>
        </div>
      </ReactTooltip>
    </>
  );
};
const LichHopContainer = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const { data: user, isLoading: userLoading } = UseUser();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachLichHop"],
    queryFn: () => layDanhSachLichHop(user.user._id),
  });
  const events =
    !isLoading &&
    data?.danhSachLichHop.map((lh) => {
      return {
        id: lh._id,
        title: lh.tieuDe,
        diaDiem: lh.phong,
        start: moment.tz(lh.batDau, "Asia/Ho_Chi_Minh").toDate(),
        end: moment.tz(lh.ketThuc, "Asia/Ho_Chi_Minh").toDate(),
      };
    });
  console.log(events);
  return (
    <div style={{ height: "auto" }}>
      <Button
        className="mb-2"
        bgcolor="var(--bs-blue)"
        onClick={() => setShowCanvas(true)}
      >
        <span>
          <HiCalendar />
        </span>
        Tạo thông tin lịch họp
      </Button>
      {!isLoading && events && (
        <div style={{ height: "500px" }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={vietnameseMessages}
            components={{
              event: CustomEvent, // Custom event component
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}
      {showCanvas && (
        <TaoLichHopCanvas refetch={refetch} setShowCanvas={setShowCanvas} />
      )}
    </div>
  );
};

export default LichHopContainer;
