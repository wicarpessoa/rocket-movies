import { Envelope, Lock, User, ArrowLeft } from "phosphor-react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha" type="password" icon={Lock} />
        <Button title="Cadastrar" />
        <Link to="/">
          <ArrowLeft size={16} />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
