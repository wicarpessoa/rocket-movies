import { useState } from "react";
import { ArrowLeft, Envelope, Lock, User, Camera } from "phosphor-react";
import { Container, Form, Avatar } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleGoBack() {
    navigate(-1)
  }
  return (
    <Container>
      <header>
        <button onClick={handleGoBack}>
          <ArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <Camera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          value={name}
          placeholder="Nome"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          icon={User}
        />
        <Input
          value={email}
          placeholder="E-mail"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          icon={Envelope}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          icon={Lock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          icon={Lock}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
