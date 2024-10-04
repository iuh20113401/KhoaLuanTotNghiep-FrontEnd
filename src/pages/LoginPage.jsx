import styled from "styled-components";
import { Col4, Col8, ColLg, StyledRow } from "../ui/Row";
import { CheckboxContainer, StyledInput } from "../ui/Input";
import StyledForm from "../ui/Form";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dangNhap } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import UseUser from "../context/UseUser";
import toast from "react-hot-toast";

const StyledLoginPage = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 !important;
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
`;
const StyledFormContainer = styled.div`
  background-color: #fff;
  padding: 3rem !important;
  align-items: center !important;
  display: flex !important;
  & > div {
    padding-top: 1.25rem !important;
    margin-top: 3rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
    width: 400px !important;
  }
`;
const Link = styled.a`
  color: #7367f0;
  text-decoration: none;
`;
function LoginPage() {
  const [maSo, setMaSo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading: userLoading } = UseUser();

  useEffect(() => {
    if (data?.user) {
      if (+data.user.vaiTro === 0) navigate("/sinhVien");
      else navigate("/giangVien");
    }
  }, [data, navigate]);

  const {
    data: user,
    mutate,
    isPending: isLoading,
  } = useMutation({
    mutationFn: dangNhap,
    mutationKey: ["user"],
    onSuccess: (data) => {
      // Update the query data
      queryClient.setQueryData(["user"], data.data);
      toast.success("Đăng nhập thành công");

      // Navigate immediately after login success based on role
      const user = data.data.user;
      if (+user?.vaiTro === 0) {
        navigate("/sinhVien", { replace: true });
      } else {
        navigate("/giangVien", { replace: true });
      }
    },
  });

  function kiemTraHopLeTaiKhoan(taiKhoan) {
    const pattern = /^\d{8,10}$/;
    return pattern.test(taiKhoan);
  }
  function kiemTraHopLeMatKhau(matKhau) {
    const pattern = /[A-z0-9]{8,}/i;
    return pattern.test(matKhau);
  }
  function handleDangNhap(e) {
    e.preventDefault();
    if (kiemTraHopLeTaiKhoan(maSo) && kiemTraHopLeMatKhau(password)) {
      mutate({ maSo, password });
    }
  }
  return (
    <StyledLoginPage>
      <StyledRow>
        <Col8>
          <StyledCoverImage>
            <img src="./hinhanh/Mobile_login-rafiki.svg" alt="Cover" />
          </StyledCoverImage>
        </Col8>
        <Col4>
          <StyledFormContainer>
            <div>
              <h4>Chào mừng👋</h4>
              <p>
                Mật khẩu lần đầu đăng nhập là 123456. Hãy đổi mật khẩu trong
                lafn đăng nhập đầu tiên
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
                    Mã số sinh viên
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
                  <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
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
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="ti ti-eye-off"></i>
                    </span>
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
                  state={isLoading ? "disabled" : ""}
                  disabled={isLoading}
                >
                  Đăng nhập
                </Button>
                <StyledInput type="hidden" />
              </StyledForm>
            </div>
          </StyledFormContainer>
        </Col4>
      </StyledRow>
    </StyledLoginPage>
  );
}

export default LoginPage;
