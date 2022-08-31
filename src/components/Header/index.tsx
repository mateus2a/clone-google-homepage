import * as S from "./styles";
import photoOne from "../../assets/photoOne.svg";
import menuOne from "../../assets/menuOne.svg";

export function Header() {
  return (
    <S.Header>
      <S.Paragraph>Gmail</S.Paragraph>
      <S.Paragraph>Imagens</S.Paragraph>
      <S.Image src={menuOne} alt="Menu" />
      <S.Image src={photoOne} alt="Your profile picture" />
    </S.Header>
  );
}