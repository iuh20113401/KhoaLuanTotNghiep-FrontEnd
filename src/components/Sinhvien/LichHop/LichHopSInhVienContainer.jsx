import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import calendar's styles
import { useQuery } from "@tanstack/react-query";
import UseUser from "../../../context/UseUser";
import { layDanhSachLichHopSinhVien } from "../../../services/LichHop";
import LoadingSpinner from "../../../ui/Spinner";
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
const LichHopSiinhVienContainer = () => {
  const { data: user, isLoading: userLoading } = UseUser();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachLichHop"],
    queryFn: () => layDanhSachLichHopSinhVien(user.user._id),
    enabled: !userLoading,
  });
  const events =
    !isLoading &&
    data?.danhSachLichHop.map((lh) => {
      return {
        id: lh._id,
        title: lh.tieuDe,
        diaDiem: lh.phong,
        start: new Date(lh.batDau), // Year, month (0-indexed), day, hour, minutes
        end: new Date(lh.ketThuc),
        // Optional, for specifying full-day events
      };
    });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div style={{ height: 500 }}>
      {!isLoading && (
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
      )}
    </div>
  );
};

export default LichHopSiinhVienContainer;
