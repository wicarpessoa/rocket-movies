import { Container, Content } from "./styles";
import { ArrowLeft, Clock } from "phosphor-react";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


import {  useNavigate, useParams } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { MovieRate } from "../../components/MovieRate";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
export function MoviePreview() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleGoBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota ?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      console.log(response.data.tags)
      setData(response.data);
    }
    fetchNote();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <div className="buttons-wrapper">
              <ButtonText icon={ArrowLeft} title="voltar" onClick={handleGoBack}/>

              <ButtonText title="excluir" onClick={handleRemove}/>
            </div>
            <div className="scrollable">
              <header>
                <h1>{data.title}</h1>
                <MovieRate rate={data.rating} size={20} />
              </header>
              <div className="details">
                <img src={avatarUrl} alt={user.name} />
                <span>Por {user.name}</span>
                <Clock />
                <span>{data.created_at}</span>
              </div>
              <div className="tags">
                {data.tags.map((tag) => {
                  return <Tag key={tag.id} title={tag.name} size={8} />;
                })}
              </div>

              <p>{data.description}</p>
            </div>
          </Content>
        </main>
      )}
    </Container>
  );
}
