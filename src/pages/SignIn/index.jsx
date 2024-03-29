import { useState } from "react";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }
  const signInDisabled = (!email | !password) ? true : false;
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          icon={Envelope}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
        />
        <Button title="Entrar" onClick={handleSignIn} disabled ={signInDisabled} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
