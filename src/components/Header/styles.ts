import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  padding-right: 10px;
  padding-top: 2px;
`;

export const Paragraph = styled.p`
  margin: 0 10px;
  cursor: pointer;
  color: rgba(0,0,0,.87);
  &:hover {
    border-bottom: 1px solid var(--black);
  }
  font-size: 13.2px;
`;

export const Image = styled.img`
  margin: 0 6px;
  cursor: pointer;
`;