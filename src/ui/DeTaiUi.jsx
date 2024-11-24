import { useRef, useState } from "react";
import styled from "styled-components";
import decodeHtml from "../utils/ChangeHtmlCode";
function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
const Container = styled.article`
  width: 98%;
  margin: auto;
  height: auto;
  padding: 1.6rem;
  background-color: #fff;
  box-shadow: 0 0rem 0.1rem 0.05rem rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  transition: all 0.5s ease;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  position: relative;
  margin-bottom: 0.8rem;
  overflow: visible;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.8rem 0.4rem;
  }
`;
// const rotateAndeTairanslate = keyframes`
//   0% {
//     transform: rotateY(0) translateX(0);
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.3;
//   }
//   100% {
//     transform: rotateY(180deg) ;
//     opacity: 0;
//   }
// `;

// const translateAndRotateBack = keyframes`
//   0% {
//     transform: rotateY(180deg);
//     opacity:0;
//   }
//   50% {
//     opacity:0.5;
//   }
//   100% {
//     transform: rotateY(0);
//       opacity:1;
//        }
// `;
const FrontContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  backface-visibility: hidden;
  transition: all 0.3s ease;
`;

const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backface-visibility: hidden;
  gap: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const LeftContent = styled.aside`
  width: 9.6rem;
  height: 6.4rem;
  border-radius: 50%;
  & > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 3.2rem;
    height: 1.8rem;
  }
`;

const RigthContent = styled.aside`
  width: 75%;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.4rem;
  }
`;
const HiddentElement = styled.div`
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  max-height: ${({ maxheight }) => maxheight};
`;
const ButtonContainer = styled.div`
  width: 10%;
  margin: auto;
`;
function DeTaiUi({ hidden, left, rigth, buttonContent }) {
  const [active, setActive] = useState(false);
  const detailsRef = useRef(null);
  const maxHeight = active ? `${detailsRef.current.scrollHeight}px` : "0";
  return (
    <Container
      onClick={(e) => {
        if (e.target.localName === "button" || e.target.localName === "svg")
          return;
        setActive((a) => !a);
      }}
    >
      <DeTaiUi.FrontContainer>
        <LeftContent>{left}</LeftContent>
        <RigthContent>
          {rigth}
          <HiddentElement ref={detailsRef} maxheight={maxHeight}>
            {hidden}
          </HiddentElement>
        </RigthContent>
        <ButtonContainer>{buttonContent}</ButtonContainer>
      </DeTaiUi.FrontContainer>
    </Container>
  );
}
DeTaiUi.BackContainer = BackContainer;
DeTaiUi.FrontContainer = FrontContainer;
DeTaiUi.HiddentElement = HiddentElement;
DeTaiUi.RigthContent = RigthContent;
DeTaiUi.LeftContent = LeftContent;
DeTaiUi.DisplayQuillContent = DisplayQuillContent;
export default DeTaiUi;
