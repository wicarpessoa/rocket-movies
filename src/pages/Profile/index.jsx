import { ArrowLeft, Envelope, Lock, User, Camera } from "phosphor-react";
import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/wicarpessoa.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <Camera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Envelope} />
        <Input placeholder="Senha atual" type="password" icon={Lock} />
        <Input placeholder="Nova senha" type="password" icon={Lock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
