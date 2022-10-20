import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Input placeholder="Pesquise pelo título" />
      <Profile>

        <div>
          <strong>Wicarpessoa</strong>
          <span>
            <a>Sair</a>
          </span>
        </div>
        <img src="https://github.com/wicarpessoa.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
