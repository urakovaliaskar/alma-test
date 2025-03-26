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