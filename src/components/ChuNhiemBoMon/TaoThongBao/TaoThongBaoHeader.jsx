import styled from "styled-components";
import { StyledTabHeader } from "../../../ui/Tab";

function TaoThongBaoHeader({ content, active, setActive }) {
  return (
    <div>
      <StyledTabHeader>
        {content.map((ct, index) => (
          <li class="nav-item" role="presentation" key={index}>
            <button
              type="button"
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              {ct.header}
            </button>
          </li>
        ))}
      </StyledTabHeader>
    </div>
  );
}

export default TaoThongBaoHeader;
