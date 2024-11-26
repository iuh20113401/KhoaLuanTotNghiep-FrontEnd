import { useMutation, useQuery } from "@tanstack/react-query";
import UseUser from "../context/UseUser";
import {
  capNhatAnhDaiDien,
  capNhatThongTinTaiKhoan,
  layThongTinTaiKhoan,
} from "../services/User";
import LoadingSpinner from "../ui/Spinner";
import Card from "../ui/Card";
import styled from "styled-components";
import Button from "../ui/Button";
import { useEffect, useRef, useState } from "react";
import { HiCamera } from "react-icons/hi";
import { Col2, Col9, ColLg, StyledRow } from "../ui/Row";
import { StyledInput, StyledSelect } from "../ui/Input";
import formatVieNamDate from "../utils/FormatDate";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { BiSolidPencil } from "react-icons/bi";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;

const Figure = styled.figure`
  width: 9.6rem;
  height: 9.6rem;
  border: 3px solid var(--color--secondary_5);
  border-radius: 50%;
  box-sizing: content-box;
  & > button {
    position: absolute;
    top: 60%;
    left: 55%;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    margin: auto;
    align-self: center;
    border-radius: 50%;
    justify-self: center;
  }
`;

function ThongTInTaiKhoan() {
  const { data: user, isLoading: userLoading } = UseUser();
  const userData = user.user;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ThongTinTaiKhoan"],
    queryFn: () => layThongTinTaiKhoan(userData._id),
    enabled: !userLoading && userData !== undefined,
  });
  const userInfo = data?.result;
  const inputHinhAnh = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  // Initialize the form
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      hoTen: "",
      gioiTinh: "Nam",
      soDienThoai: "",
      email: "",
      ngaySinh: null,
    },
  }); // Dynamically update default values when `userInfo` changes
  useEffect(() => {
    if (userInfo) {
      reset({
        hoTen: userInfo?.hoTen || "",
        gioiTinh: userInfo?.gioiTinh,
        soDienThoai: userInfo?.soDienThoai || "",
        email: userInfo?.email || "",
        ngaySinh: userInfo?.ngaySinh,
      });
    }
  }, [userInfo, reset]);
  const { mutate, isLoading: editLoading } = useMutation({
    mutationFn: capNhatThongTinTaiKhoan,
    onSuccess: () => {
      toast.success("Cập nhật thông tin thành công");
      setIsEdit(false);
    },
    onError: () => {
      toast.error("Cập nhật thông tin thất bại");
    },
  });
  const { mutate: capNhatAnhMutate, isLoading: capNhatAnhLoading } =
    useMutation({
      mutationFn: capNhatAnhDaiDien,
      onSuccess: () => {
        toast.success("Cập nhật ảnh đại diện thành công");
        refetch();
      },
      onError: () => {
        toast.error("Cập nhật ảnh đại diện thất bại");
      },
    });
  const handleCapNhatAnh = () => {
    if (inputHinhAnh.current && inputHinhAnh.current.files.length > 0) {
      let formData = new FormData();
      formData.append("hinhAnh", inputHinhAnh.current.files[0]);
      if (capNhatAnhMutate) {
        capNhatAnhMutate(formData);
      } else {
        console.error("capNhatAnhMutate is not defined or is not a function");
      }
      inputHinhAnh.current.value = "";
    } else {
      console.error("No file selected or inputHinhAnh.current is not defined");
    }
  };
  function onSubmit(data) {
    mutate(data);
  }
  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  return (
    <div>
      <h5>Thông tin tài khoản</h5>
      <Card className="mt-3 p-3 align-center justify-center">
        <Figure>
          <ImgBox>
            <img
              src={`${SERVER}${userInfo.hinhAnh}`}
              crossorigin="anonymous | use-credentials"
              alt="Hình đại diện"
            />
          </ImgBox>
          <Button
            size="sm"
            shadow="none"
            onClick={() => inputHinhAnh.current.click()}
          >
            <form>
              <input
                type="file"
                ref={inputHinhAnh}
                onChange={(e) => {
                  handleCapNhatAnh(e);
                }}
                disabled={editLoading}
                style={{ display: "none" }}
              />
            </form>
            <HiCamera />
          </Button>
        </Figure>
      </Card>
      <Card className="mt-2 p-3">
        <div className="mb-2 text-end">
          {isEdit ? (
            <Button onClick={() => setIsEdit(false)}>
              <BiSolidPencil />
              <span className="ml-1">Quay lại</span>
            </Button>
          ) : (
            <Button onClick={() => setIsEdit(true)}>
              <BiSolidPencil />
              <span className="ml-1">Chỉnh sửa</span>
            </Button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledRow>
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Mã số</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Mã số"
                  defaultValue={userInfo.maSo}
                  disabled={true}
                />
              </Col9>
            </ColLg>
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Họ tên</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Họ tên"
                  disabled={!isEdit}
                  {...register("hoTen")}
                />
              </Col9>
            </ColLg>
          </StyledRow>
          <StyledRow className="mt-2">
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Giới tính</b>
                </p>
              </Col2>
              <Col9>
                {isEdit ? (
                  <StyledSelect {...register("gioiTinh")}>
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </StyledSelect>
                ) : (
                  <StyledInput
                    placeholder="Giới tính"
                    value={userInfo.gioiTinh === true ? "Nam" : "Nữ"}
                    disabled={true}
                  />
                )}
              </Col9>
            </ColLg>
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Ngày sinh</b>
                </p>
              </Col2>
              <Col9>
                {isEdit ? (
                  <StyledInput
                    {...register("ngaySinh")}
                    type="date"
                    placeholder="Ngày sinh"
                  />
                ) : (
                  <StyledInput
                    type="text"
                    placeholder="Ngày sinh"
                    value={
                      userInfo.ngaySinh
                        ? formatVieNamDate(userInfo.ngaySinh)
                        : "Không có"
                    }
                    disabled={true}
                  />
                )}
              </Col9>
            </ColLg>
          </StyledRow>
          <StyledRow className="mt-2">
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Số điện thoại</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Số điện thoại"
                  defaultValue={userInfo.soDienThoai || "Không có"}
                  disabled={!isEdit}
                />
              </Col9>
            </ColLg>
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Email</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Email"
                  defaultValue={userInfo.email || "Không có"}
                  disabled={!isEdit}
                />
              </Col9>
            </ColLg>
          </StyledRow>{" "}
          <StyledRow className="mt-2">
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Khoa</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Khoa"
                  defaultValue={userInfo.khoa.ten}
                  disabled={true}
                />
              </Col9>
            </ColLg>
            <ColLg className="flex align-center">
              <Col2>
                <p>
                  <b>Bộ môn</b>
                </p>
              </Col2>
              <Col9>
                <StyledInput
                  placeholder="Khoa"
                  defaultValue={userInfo.boMon.ten}
                  disabled={true}
                />
              </Col9>
            </ColLg>
          </StyledRow>
          {isEdit && (
            <div className="mt-2 text-end">
              <Button disabled={capNhatAnhLoading}>Lưu thay đổi</Button>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
}

export default ThongTInTaiKhoan;
