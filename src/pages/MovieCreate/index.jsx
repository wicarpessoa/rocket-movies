import { ArrowLeft, Plus } from "phosphor-react";

import { Container, Form, MarkerContainer } from "./Styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function MovieCreate() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={ArrowLeft} title="voltar" />
            </Link>
            <h1>Novo Filme</h1>
          </header>
          <div className="inputs-and-buttons-container">
            <Input type="text" placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <label>
            <h3>Marcadores</h3>
            <MarkerContainer>
              <Marker placeholder="Novo Marcador" value="wicar" />
              <Marker isNew placeholder="Novo Marcador" />
            </MarkerContainer>
          </label>
          <div className="inputs-and-buttons-container">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
