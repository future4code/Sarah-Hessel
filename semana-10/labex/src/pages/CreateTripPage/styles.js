import styled from "styled-components";
import imgBackground from'../../assets/background-space.jpg'

export const FormContainer = styled.form`
  background-color: white;
  border-radius: 10px;
  display: grid;
  gap: 16px;
  margin-left: 400px;
  margin-right: 400px;
`
export const Page = styled.form`
  color: white;
  background-image: url(${imgBackground});
  padding-bottom: 400px;
  padding-top: 50px;
`