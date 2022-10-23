import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { Link } from "react-router-dom";
export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Input placeholder="Pesquise pelo título" />
      <Profile>
        <div>
          <Link to="/profile">
            <strong>Wicarpessoa</strong>
          </Link>
          <span>
            <a>Sair</a>
          </span>
        </div>
        <Link to="/profile">
          <img src="https://github.com/wicarpessoa.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
