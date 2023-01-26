import { useState } from "react";
import { ArrowLeft, Plus, Tag } from "phosphor-react";

import { Container, Form, MarkerContainer } from "./Styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Marker } from "../../components/Marker";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function MovieCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleGoBack() {
    navigate(-1);
  }

  function handleAddTag(event) {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  function handleClearFields() {
    setNewTag("");
    setTags([]);
    setTitle("");
    setDescription("");
    setRating("");
  }
  async function handleNewNote() {
    if (!title) {
      return alert("O título é obrigátorio");
    }
    if (!rating) {
      return alert(
        "Você deixou um rating no campo de adicionar, mas não clicou para salvar!"
      );
    }

    if (![0, 1, 2, 3, 4, 5].includes(Number(rating))) {
      return alert("A nota precisa ser um valor de 0 a 5");
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo de adicionar, mas não clicou para salvar!"
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      rating,
    });
    alert("Nota cadastrada!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText
              icon={ArrowLeft}
              title="voltar"
              onClick={handleGoBack}
            />

            <h1>Novo Filme</h1>
          </header>
          <div className="inputs-and-buttons-container">
            <Input
              value={title}
              type="text"
              placeholder="Título"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              value={rating}
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </div>
          <TextArea
            value={description}
            placeholder="Observações"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label>
            <h3>Marcadores</h3>
            <MarkerContainer>
              {tags.map((tag,index) => {
                return (
                  <Marker
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                );
              })}
              <Marker
                value={newTag}
                isNew
                placeholder="Novo Marcador"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </MarkerContainer>
          </label>
          <div className="inputs-and-buttons-container">
            <Button title="Excluir filme" onClick={handleClearFields} />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
