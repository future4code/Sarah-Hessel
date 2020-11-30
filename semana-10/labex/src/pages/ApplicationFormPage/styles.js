import styled from 'styled-components';
import imgBackground from '../../assets/background-space.jpg'

export const FormContainer = styled.form`
background-color: white;
border-radius: 10px;
display: grid;
margin-left: 500px;
margin-right: 500px;
margin-top: 20px;
margin-bottom: 30px;
padding-bottom: 10px;
gap: 15px;
`
export const Page = styled.div`
background-image: url(${imgBackground});
background-size: cover;
padding-top: 30px;
height: 810px;
color: white;
`