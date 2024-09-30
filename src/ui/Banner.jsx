import styled from "styled-components";

const StyledSliderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
`;

const StyledSwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  width: 1349px;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-duration: 0.3s; /* Adjusted for smoothness */
  transition-timing-function: ease-in-out; /* Smoother transition effect */
  box-sizing: content-box;
  list-style: none;
`;

const StyledSwiperSlide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  width: 1349px;

  & > a {
    color: #333e44;
    text-decoration: none;
    background: transparent;
  }

  & img {
    width: 100%;
    height: 100%;
    border: 0 none;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    overflow: clip;
  }
`;

function StyledBanner({ content }) {
  return (
    <StyledSliderContainer>
      <StyledSwiperWrapper>
        <StyledSwiperSlide>
          <a href={content.href}>
            <picture>
              {content?.source?.map((sr, i) => (
                <source key={i} media={sr.width} srcSet={sr.src} />
              ))}
              <img
                src={content.src}
                data-src={content.dataSrc}
                alt="Khai trương VNB Phú Mỹ"
              />
            </picture>
          </a>
        </StyledSwiperSlide>
      </StyledSwiperWrapper>
    </StyledSliderContainer>
  );
}

export default StyledBanner;
