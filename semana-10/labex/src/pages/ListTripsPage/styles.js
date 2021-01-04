import styled from 'styled-components'
import imgBackground from'../../assets/background-space.jpg'


export const Page = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  padding: 15px;
  height: 830px;
  color: white;
`
export const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 24%);
 gap: 3px;
`
