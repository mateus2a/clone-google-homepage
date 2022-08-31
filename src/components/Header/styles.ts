import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--black);
  }
`;

export const Image = styled.img`
  margin: 0 6px;
  cursor: pointer;
`;