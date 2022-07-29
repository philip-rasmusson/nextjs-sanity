import { backgroundColor } from "styled-system"
import styled from "styled-components"

export const ButtonStyled = styled.button`
  background-color: white;
  border-radius: 2rem;
  font-size: 2rem;
  border: 1px solid hotpink;
  padding: 0.5rem 1rem;
  color: hotpink;
  cursor: pointer;

  &:hover {
    background-color: hotpink;
    color: white;
    transition: background-color;
    transition-duration: 0.5s;
  }
`
