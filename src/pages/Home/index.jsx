import { Plus } from "phosphor-react";

import { Container, Content, MoviesNotes } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { MovieNote } from "../../components/MovieNote";
import { MovieRate } from "../../components/MovieRate";
import { Tag } from "../../components/Tag";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState(["wwwww","wwwww","www"]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${""}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);
  return (
    <Container>
      <Header handleChange={(e)=> setSearch(e.target.value)} />
      <main>
        <Content>
          <header>
            <h1>Meus Filmes</h1>
            <Link to="/new">
              <Button title="Adicionar Filme" icon={Plus} />
            </Link>
          </header>
          <MoviesNotes>
            {notes.map((note) => {
              return (
                <MovieNote key={note.id} to={`/details/${note.id}`}>
                  <h2>{note.title}</h2>
                  <MovieRate rate={note.rating} size={12} />
                  <p>{note.description}</p>
                  <div className="tags">
                    {note.tags.map((tag, index) => {
                      return (
                        <Tag key={tag.id} title={tag.name} noteTag={true} size={6} />
                      );
                    })}
                  </div>
                </MovieNote>
              );
            })}

            
          </MoviesNotes>
        </Content>
      </main>
    </Container>
  );
}
