import * as S from "./styles";


export function Footer() {
  return (
    <S.Footer>
      <S.Brasil>Brasil</S.Brasil>
      <S.Navs>
        <S.FirstNav>
          <p>Sobre</p>
          <p>Publicidade</p>
          <p>Negócios</p>
          <p>Como funciona a Pesquisa</p>
        </S.FirstNav>
        <S.LastNav>
          <p>Privacidade</p>
          <p>Termos</p>
          <p>Configurações</p>
        </S.LastNav>
      </S.Navs>
    </S.Footer>
  );
}