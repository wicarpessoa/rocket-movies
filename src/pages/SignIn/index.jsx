import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha" type="password" icon={Lock} />
        <Button title="Entrar" />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
