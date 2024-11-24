import styled from "styled-components";
import { ColLg, StyledRow } from "../ui/Row";
import { CheckboxContainer, StyledInput } from "../ui/Input";
import StyledForm from "../ui/Form";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dangNhap } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import UseUser from "../context/UseUser";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/Spinner";

const StyledLoginPage = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 !important;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 768px) {
    position: relative;
    display: block;
  }
`;
const StyledCoverImage = styled.div`
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  & > img {
    max-height: 65%;
    max-width: 65%;
    z-index: 1;
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  @media (max-width: 768px) {
    display: block;
    z-index: 0;
  }
`;
const StyledFormContainer = styled.div`
  background-color: #fff;
  padding: 2rem !important;
  align-items: center !important;
  display: flex !important;
  & > div {
    margin-top: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
  @media (max-width: 768px) {
    padding: 1.5rem !important;
    max-width: 90%;
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 100;
    & > div {
      margin-top: 0rem !important;
    }
  }
`;
const StyledOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 50;
  }
`;
const Link = styled.a`
  color: #7367f0;
  text-decoration: none;
`;
function LoginPage() {
  const [maSo, setMaSo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ maSo: "", password: "" });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = UseUser();
  useEffect(() => {
    if (data?.user) {
      if (+data.user.vaiTro === 0) navigate("/sinhVien");
      else navigate("/giangVien");
    }
  }, [data?.user, navigate]);

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: dangNhap,
    mutationKey: ["user"],
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data);

      toast.success("Đăng nhập thành công");

      const user = data.data.user;
      if (+user?.vaiTro === 0) {
        navigate("/sinhVien", { replace: true });
      } else {
        navigate("/giangVien", { replace: true });
      }
    },
    onError: (data) => {
      toast.error("Sai thông tin tài khoản hoặc mật khẩu");
    },
  });
  useEffect(() => {
    function kiemTraHopLeTaiKhoan(taiKhoan) {
      const pattern = /^\d{8,10}$/;
      setError((pre) => ({ ...pre, maSo: pattern.test(taiKhoan) }));
      return pattern.test(taiKhoan);
    }
    function kiemTraHopLeMatKhau(matKhau) {
      const pattern = /[A-z0-9]{8,}/i;
      setError((pre) => ({ ...pre, password: pattern.test(matKhau) }));
      return pattern.test(matKhau);
    }
    if (maSo) kiemTraHopLeTaiKhoan(maSo);
    if (password) kiemTraHopLeMatKhau(password);
  }, [password, maSo]);

  function handleDangNhap(e) {
    e.preventDefault();
    mutate({ maSo, password });
  }
  return (
    <StyledLoginPage>
      <StyledCoverImage>
        <img src="./hinhanh/Mobile_login-rafiki.svg" alt="Cover" />
      </StyledCoverImage>
      <StyledFormContainer>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <h5>Chào mừng👋</h5>
            <p>
              Mật khẩu lần đầu đăng nhập là 123456. Hãy đổi mật khẩu trong lần
              đăng nhập đầu tiên
            </p>

            <StyledForm
              className="mt-3"
              id="formAuthentication"
              action="index.html"
              method="GET"
              novalidate="novalidate"
              onSubmit={handleDangNhap}
              disabled={isLoading}
            >
              <div>
                <label htmlFor="email" class="form-label">
                  Tài khoản
                </label>
                <StyledInput
                  type="text"
                  className="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autoFocus=""
                  value={maSo}
                  onChange={(e) => setMaSo(e.target.value)}
                />
                {error.maSo === false && (
                  <p class="error">
                    Tài khoản là mã số sinh viên hoặc giảng viên của bạn
                  </p>
                )}
              </div>
              <div>
                <label class="form-label" htmlFor="password">
                  Mật khẩu
                </label>
                <div class="input-group input-group-merge has-validation">
                  <StyledInput
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="············"
                    aria-describedby="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
              <StyledRow>
                <ColLg>
                  <CheckboxContainer label="Ghi nhớ tài khoản" />
                </ColLg>
                <ColLg>
                  <Link href="auth-forgot-password-cover.html">
                    <p class="mb-0">Forgot Password?</p>
                  </Link>
                </ColLg>
              </StyledRow>
              <Button
                size="block"
                disabled={error.maSo !== true || error.password !== true}
                state={
                  error.maSo !== true || error.password !== true
                    ? "disabled"
                    : ""
                }
              >
                Đăng nhập
              </Button>
              <StyledInput type="hidden" />
            </StyledForm>
          </div>
        )}
      </StyledFormContainer>{" "}
      <StyledOverlay />
    </StyledLoginPage>
  );
}

export default LoginPage;
