import React from "react";
import styled from "styled-components";
const AccordionContainer = styled.div`
  background-color: #fff;
  height: auto;
  padding: 0rem 1.6rem 0rem 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: ${({ istable }) => (istable === "true" ? "0" : "0.6rem")};
  transition: all 0.5s ease;
  border: 1px solid var(--color--secondary_4);
`;
AccordionContainer.defaultProps = {
  istable: "false",
};
const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  &:hover {
    cursor: pointer;
  }
`;
const AccordionContent = styled.div`
  opacity: ${({ isactive }) => (isactive === "true" ? "1" : "0")};
  visibility: ${({ isactive }) => (isactive === "true" ? "visible" : "hidden")};
  max-height: ${({ maxheight }) => maxheight};
  padding-bottom: ${({ isactive }) => (isactive === "true" ? "1.2rem" : "0")};
  transition: all 0.5s ease;
  overflow: hidden;
`;

export function AccordionItemBasic({
  isActive,
  onClick,
  content,
  arrow,
  icon,
  isTable = "false",
}) {
  return (
    <AccordionItem
      isActive={isActive}
      isTable={isTable}
      onClick={onClick}
      content={content}
    >
      <AccordionItem.Header icon={icon || null} arrow={arrow || null} />
      <AccordionItem.Content />
    </AccordionItem>
  );
}
export function AccordionItem({ children, isTable = null }) {
  return <AccordionContainer istable={isTable}>{children}</AccordionContainer>;
}
function AccordionHeaderContainer({ arrow = null, children, ...props }) {
  return (
    <AccordionTitle {...props}>
      <div className="flex flexColumn g-8">{children}</div>
      {arrow}
    </AccordionTitle>
  );
}
function AccordionContentContainer({ children, ...props }) {
  return <AccordionContent {...props}>{children}</AccordionContent>;
}

AccordionItem.Header = AccordionHeaderContainer;
AccordionItem.Content = AccordionContentContainer;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const ListTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.6rem;
  border: 1px solid var(--color--secondary_4);

  & > div:not(:last-child) {
    border-bottom: 1px solid var(--color--secondary_4);
  }
`;
function AccordionList({ children }) {
  return <ListContainer>{children}</ListContainer>;
}
export function AccordionListTable({ children }) {
  return <ListTableContainer>{children}</ListTableContainer>;
}

export default AccordionList;
