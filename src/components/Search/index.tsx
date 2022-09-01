import * as S from "./styles";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import safe from "../../assets/safe.svg";
import mic from "../../assets/mic.svg";
import keyboard from "../../assets/keyboard.svg";

export function Search() {
  return (
    <S.Section>
      <S.Logo src={logo} alt="Google" />
      <S.Bar>
        <img src={search} alt="Pesquisar" className="search-icon" />
        <input type="text" />
        <div className="accessibility">
          <img src={keyboard} alt="Teclado Virtual" className="keyboard-icon" />
          <img src={mic} alt="Pesquisar por Voz" className="mic-icon" />
        </div>
      </S.Bar>
      <S.Buttons>
        <S.Button>Pesquisar Google</S.Button>
        <S.Button>Estou com sorte</S.Button>
      </S.Buttons>
      <S.Text>Disponibilizado pelo Google em: <a href="#">English</a></S.Text>
    </S.Section>
  );
}