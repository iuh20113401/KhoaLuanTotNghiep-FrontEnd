import { HiInformationCircle } from "react-icons/hi";
import StyledForm from "../../../ui/Form";
import { StyledInput, StyledSelect, StyledTextarea } from "../../../ui/Input";
import { Col1, Col2, ColLg, StyledRow } from "../../../ui/Row";
import StyledTable from "../../../ui/Table";
import Button from "../../../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { themTieuChi } from "../../../services/TieuChi";
import toast from "react-hot-toast";

function FormThemTieuChi() {
  const [LOIndex, setLOIndex] = useState(1);
  const { mutate, isPending } = useMutation({
    mutationFn: themTieuChi,
    onSuccess: () => {
      toast.success("Thêm tiêu chí thành công");
      reset();
      setLOIndex(1);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange", // Validate on change
  });
  function onSubmit(data) {
    const newData = {
      ten: "Tiêu chí khóa luận",
      LO: Array.from({ length: LOIndex }).map((x, i) => {
        return {
          stt: i + 1,
          ten: data[`LO${i + 1}-ten`],
          thangDiem: Array.from({ length: 4 }).map((x, index) => {
            return {
              diemAbet: 1,
              diemLonNhat: data[`LO1-d${index + 1}-ln`],
              diemNhoNhat: data[`LO1-d${index + 1}-nn`],
              noiDung: data[`LO${i + 1}-d${index + 1}-nd`],
            };
          }),
          isHoiDong: data[`LO${i + 1}-isHoiDong`],
          isPhanBien: data[`LO${i + 1}-isPhanBien`],
          isHuongDan: data[`LO${i + 1}-isHuongDan`],
        };
      }),
    };
    mutate(newData);
  }

  const validateRange = (value, allValues, field) => {
    const currentLO = field.split("-")[0]; // Extract LO index from the field name
    const currentd = +field.split("-")[1].split("")[1];

    if (
      (parseFloat(allValues[`${currentLO}-d${currentd}-nn`]) || 0) >=
        (parseFloat(allValues[`${currentLO}-d${currentd}-ln`]) || 10) ||
      (currentd !== 1 &&
        (parseFloat(allValues[`${currentLO}-d${currentd}-nn`]) || 0) <=
          (parseFloat(allValues[`${currentLO}-d${currentd - 1}-ln`]) || 0)) ||
      (currentd !== 4 &&
        (parseFloat(allValues[`${currentLO}-d${currentd}-ln`]) || 0) >=
          (parseFloat(allValues[`${currentLO}-d${currentd + 1}-nn`]) || 100))
    ) {
      return "Không hợp lệ, vui lòng kiểm tra lại 1";
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h5>Thêm thông tin tiêu chí</h5>
        <h6>Tiêu chỉ khóa luận</h6>
        <div>
          <StyledRow className="mt-3 mb-0">
            <Col2>
              <h6>LO1</h6>
            </Col2>
            <ColLg>
              <StyledInput
                type="text"
                placeholder={`Nhập tên LO1`}
                {...register(`LO1-ten`, {
                  required: "Tên LO là bắt buộc",
                })}
              />
              {errors[`LO1-ten`] && (
                <p className="error">{errors[`LO1-ten`]?.message}</p>
              )}
            </ColLg>
          </StyledRow>
          <StyledRow gap=".5rem" className="mt-2">
            <ColLg>
              <label>Cho hướng dân</label>
              <StyledSelect
                {...register(`LO1-isHuongDan`, {
                  required: "Tên LO là bắt buộc",
                })}
                defaultValue={"true"}
              >
                <option value={"true"}>Có</option>
                <option value={"false"}>Không</option>
              </StyledSelect>
            </ColLg>
            <ColLg>
              <label>Cho phản biên</label>
              <StyledSelect
                {...register(`LO1-isPhanBien`, {
                  required: "Tên LO là bắt buộc",
                })}
                defaultValue={"true"}
              >
                <option value={"true"}>Có</option>
                <option value={"false"}>Không</option>
              </StyledSelect>
            </ColLg>
            <ColLg>
              <label>Cho hội đồng</label>
              <StyledSelect
                {...register(`LO1-isHoiDong`, {
                  required: "Tên LO là bắt buộc",
                })}
                defaultValue={"true"}
              >
                <option value={"true"}>Có</option>
                <option value={"false"}>Không</option>
              </StyledSelect>
            </ColLg>
          </StyledRow>
          <StyledTable className="mt-0">
            <thead>
              <tr>
                <th width="25%">Điểm 1</th>
                <th width="25%">Điểm 2</th>
                <th width="25%">Điểm 3</th>
                <th width="25%">Điểm 4</th>
              </tr>
              <tr>
                {["d1", "d2", "d3", "d4"].map((d, index) => (
                  <th key={index}>
                    <StyledRow>
                      <ColLg>
                        <StyledInput
                          placeholder="Nhỏ nhất"
                          {...register(`LO1-${d}-nn`, {
                            required: `Điểm nhỏ nhất ${d} là bắt buộc`,
                            validate: (value, allValues) =>
                              validateRange(value, allValues, `LO1-${d}-nn`),
                          })}
                        />
                        {errors[`LO1-${d}-nn`] && (
                          <p className="error">
                            {errors[`LO1-${d}-nn`]?.message}
                          </p>
                        )}
                      </ColLg>
                      <ColLg className="ml-1">
                        <StyledInput
                          placeholder="Lớn nhất"
                          {...register(`LO1-${d}-ln`, {
                            required: `Điểm lớn nhất ${d} là bắt buộc`,
                            validate: (value, allValues) =>
                              validateRange(value, allValues, `LO1-${d}-ln`),
                          })}
                        />
                        {errors[`LO1-${d}-ln`] && (
                          <p className="error">
                            {errors[`LO1-${d}-ln`]?.message}
                          </p>
                        )}
                      </ColLg>
                      <Col1 className="flex align-center">
                        <div
                          className="p-2 flex align-center"
                          style={{ height: "30px" }}
                        >
                          <HiInformationCircle
                            style={{ width: "20px", height: "30px" }}
                          />
                        </div>
                      </Col1>
                    </StyledRow>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {["d1", "d2", "d3", "d4"].map((d, index) => (
                  <td key={index}>
                    <StyledTextarea
                      rows={5}
                      placeholder="Nội dung"
                      {...register(`LO1-${d}-nd`, {
                        required: "Nội dung là bắt buộc",
                      })}
                    />
                    {errors[`LO1-${d}-nd`] && (
                      <p className="error">{errors[`LO1-${d}-nd`]?.message}</p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </StyledTable>
        </div>
        <div className="mt-1">
          {Array.from({ length: LOIndex - 1 }).map((x, i) => {
            return (
              <div key={i}>
                <StyledRow>
                  <Col2>
                    <h6>LO{i + 2}</h6>
                  </Col2>

                  <ColLg>
                    <StyledInput
                      type="text"
                      placeholder={`Nhập tên LO${i + 2}`}
                      {...register(`LO${i + 2}-ten`, {
                        required: "Tên LO là bắt buộc",
                      })}
                    />
                    {errors[`LO${i + 2}-ten`] && (
                      <p className="error">
                        {errors[`LO${i + 2}-ten`]?.message}
                      </p>
                    )}
                  </ColLg>
                </StyledRow>
                <StyledRow gap=".5rem" className="mt-2">
                  <ColLg>
                    <label>Cho hướng dân</label>
                    <StyledSelect
                      {...register(`LO${i + 2}-isHuongDan`, {
                        required: "Tên LO là bắt buộc",
                      })}
                      defaultValue={"true"}
                    >
                      <option value={"true"}>Có</option>
                      <option value={"false"}>Không</option>
                    </StyledSelect>
                  </ColLg>
                  <ColLg>
                    <label>Cho phản biên</label>
                    <StyledSelect
                      {...register(`LO${i + 2}-isPhanBien`, {
                        required: "Tên LO là bắt buộc",
                      })}
                      defaultValue={"true"}
                    >
                      <option value={"true"}>Có</option>
                      <option value={"false"}>Không</option>
                    </StyledSelect>
                  </ColLg>
                  <ColLg>
                    <label>Cho hội đồng</label>
                    <StyledSelect
                      {...register(`LO${i + 2}-isHoiDong`, {
                        required: "Tên LO là bắt buộc",
                      })}
                      defaultValue={"true"}
                    >
                      <option value={"true"}>Có</option>
                      <option value={"false"}>Không</option>
                    </StyledSelect>
                  </ColLg>
                </StyledRow>
                <StyledTable>
                  <tbody>
                    <tr>
                      {["d1", "d2", "d3", "d4"].map((d, index) => (
                        <td key={index}>
                          <StyledTextarea
                            rows={5}
                            placeholder="Nội dung"
                            {...register(`LO${i + 2}-${d}-nd`, {
                              required: "Nội dung là bắt buộc",
                            })}
                          />
                          {errors[`LO${i + 2}-${d}-nd`] && (
                            <p className="error">
                              {errors[`LO${i + 2}-${d}-nd`]?.message}
                            </p>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </StyledTable>
              </div>
            );
          })}
          <Button
            disabled={isPending}
            type="button"
            onClick={() => setLOIndex((i) => ++i)}
          >
            Thêm LO
          </Button>
          <Button
            disabled={isPending}
            className="ml-3"
            type="button"
            onClick={() => setLOIndex((i) => (i === 1 ? i : --i))}
            bgcolor="var(--bs-danger)"
          >
            Xóa LO
          </Button>
        </div>
        <Button disabled={isPending} size="block">
          Tạo thông tin tiêu chí mới
        </Button>
      </StyledForm>
    </div>
  );
}

export default FormThemTieuChi;
