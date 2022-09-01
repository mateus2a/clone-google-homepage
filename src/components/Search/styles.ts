import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72vh;
`;

export const Logo = styled.img`
  width: 272px;
  height: 92px;
  margin-bottom: 30px;
`;


export const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 24px;
  width: 96%;
  max-width: 575px;

  > img {
    padding-left: 8px;
  }

  input {
    height: 44px;
    border: none;
    flex-grow: 2;
  }

  .accessibility {
    flex-grow: 0.1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  padding-top: 18px;
`;

export const Button = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  line-height: 27px;
`;

export const Text = styled.p`
  color: var(--text-message);
  font-size: small;
  line-height: 24px;
  margin-top: 16px;
  a {
    text-decoration: none;
  }
`;