import { useRef, useState } from "react";
import decodeHtml from "../utils/ChangeHtmlCode";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}

function DeTaiUi({ hidden, left, right, buttonContent }) {
  const [active, setActive] = useState(false);
  const detailsRef = useRef(null);
  const maxHeight = active ? `${detailsRef.current?.scrollHeight}px` : "0";

  return (
    <article
      className="w-[98%] mx-auto h-auto p-4 bg-white 
                 shadow-[0_0rem_0.1rem_0.05rem_rgba(0,0,0,0.2)] 
                 rounded-md transition-all duration-500 overflow-hidden 
                 hover:cursor-pointer relative mb-2 overflow-visible"
      onClick={(e) => {
        if (e.target.localName === "button" || e.target.localName === "svg")
          return;
        setActive((a) => !a);
      }}
    >
      <div className="w-full h-auto flex">
        <aside className="w-24 h-5 rounded-full md:w-24 md:h-5">{left}</aside>
        <aside className="w-3/4 px-4 flex flex-col gap-1 md:px-1">
          {right}
          <div
            ref={detailsRef}
            className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{ maxHeight }}
          >
            {hidden}
          </div>
        </aside>
        <div className="w-1/10 mx-auto">{buttonContent}</div>
      </div>
    </article>
  );
}

DeTaiUi.BackContainer = function BackContainer({ children, ...props }) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full 
                 flex flex-col items-center justify-center gap-2"
      {...props}
    >
      {children}
    </div>
  );
};

DeTaiUi.FrontContainer = function FrontContainer({ children, ...props }) {
  return (
    <div className="w-full h-auto flex" {...props}>
      {children}
    </div>
  );
};

DeTaiUi.HiddentElement = function HiddentElement({ children, ...props }) {
  return (
    <div
      className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      {...props}
    >
      {children}
    </div>
  );
};

DeTaiUi.RightContent = function RightContent({ children, ...props }) {
  return (
    <aside className="w-3/4 px-4 flex flex-col gap-1 md:px-1" {...props}>
      {children}
    </aside>
  );
};

DeTaiUi.LeftContent = function LeftContent({ children, ...props }) {
  return (
    <aside className="w-24 h-16 rounded-full md:w-8 md:h-5" {...props}>
      {children}
    </aside>
  );
};

DeTaiUi.DisplayQuillContent = DisplayQuillContent;

export default DeTaiUi;
