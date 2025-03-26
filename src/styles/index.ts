import styled, { css } from "styled-components";

export const StyledBanner = styled.div`
    display: flex;
    background-image: url('/cucumbers.png');
    background-repeat: no-repeat;
    background-size: 200px 100%;
    background-color: #DADEAB;
    height: 400px;
    width: 100%;
    color: #000;
    gap: 3rem;
    padding: 100px 0 0 250px;

    @media (max-width: 768px) {
        padding: 50px 0 0 20px;
        background-image: none;
    }

    @media (max-width: 480px) {
        padding: 20px;
        font-size: 0.5rem;
        height: 150px;
    }
`;

export const StyledBannerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-left 250px;
`;

export const StyledBannerText = styled.p`
    font-weight: 900;
    font-size: 3rem;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
  background-color: #fff;
`;

export const StyledFormHeader = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;

export const FormSubtitle = styled.p`
  text-align: center;
  max-width: 460px;
  font-size: 14px;
  font-weight: 900;
  color: #333;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const errorStyles = css`
  border: 2px solid red;
  box-shadow: 0 0 5px red;
`;

export const StyledInput = styled.input<{ "aria-invalid": boolean }>`
  width: 100%;
  max-width: 360px;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  ${(props) => props["aria-invalid"] && errorStyles}
`;

export const StyledTextArea = styled.textarea<{ "aria-invalid": boolean }>`
  width: 100%;
  max-width: 360px;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  min-height: 100px;
  ${(props) => props["aria-invalid"] && errorStyles}
`;

export const StyledCheckboxGroup = styled.div<{ ["aria-invalid"]: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 360px;
  padding: 10px;
  border-radius: 6px;
  ${(props) => props["aria-invalid"] && errorStyles}
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin: 5px 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 360px;
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
  text-align: left;
  width: 100%;
  max-width: 360px;
`;

export const StyledFileInput = styled.input<{ "aria-invalid": boolean }>`
  width: 100%;
  max-width: 360px;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  ${(props) => props["aria-invalid"] && errorStyles}
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to top left, #fff 0%, white 11%, white 51%, #FAFDD5 90%);
  background-size: 30% 30%;
  background-repeat: no-repeat;
  background-color: #ffffff;
`;

export const Sidebar = styled.div`
  width: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid #e0e0e0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

export const StatusDropdown = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  color: #B6B6B6;
`;

export const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #ddd;
  table-layout: fixed;
`;

export const TableHeader = styled.th`
  background: #fff;
  padding: 10px;
  text-align: left;
  font-weight: 300;
  color: #B6B6B6;
`;

export const TableRow = styled.tr`
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const PageButton  = styled.button`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #fff;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    border: 1px solid black;
    font-weight: bold;
  }
  &:disabled {
    color: #ddd;
  }
`;
export const TableFooter = styled.td`
  padding: 10px;
  text-align: center;
`;