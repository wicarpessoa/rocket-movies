import { useState } from "react";
import { Envelope, Lock, User, ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadaastrar!");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={User}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={Envelope}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={Lock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <button onClick={handleGoBack}>
          <ArrowLeft size={16} />
          Voltar para o login
        </button>
      </Form>
      <Background />
    </Container>
  );
}
