import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bottom);
`;

export const Brasil = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: var(--text-dark);
`;

export const Navs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

  @media(max-width: 800px) {
    justify-content: center;
  }
`;

export const FirstNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    padding: 15px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const LastNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    padding: 15px;
    font-size: 14px;
    cursor: pointer;
  }
`;
