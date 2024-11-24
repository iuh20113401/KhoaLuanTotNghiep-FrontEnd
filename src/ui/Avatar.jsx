import styled, { css } from "styled-components";
const sizes = {
  xl: css`
    width: 4rem;
    height: 4rem;
  `,
  lg: css`
    width: 3.5rem;
    height: 3.5rem;
  `,
  md: css`
    width: 3rem;
    height: 3rem;
  `,
  n: "",
  sm: css`
    width: 2rem;
    height: 2rem;
  `,
  xs: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
const StyledAvatar = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50% !important;
    vertical-align: middle;
  }
  ${(props) => sizes[props.size]}
`;
function Avatar({ src, ...props }) {
  return (
    <StyledAvatar {...props}>
      <img
        src={src || "./public/hinhanh/iuh_logo_1.png"}
        alt="avatar"
        crossorigin="anonymous | use-credentials"
      />
    </StyledAvatar>
  );
}

export default Avatar;
