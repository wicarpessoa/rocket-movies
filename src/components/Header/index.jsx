import { Container, Profile } from "./styles";

import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({handleChange}) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  function handleSignOut() {
    signOut();
    navigate("/");
  }
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Input placeholder="Pesquise pelo título" onChange={handleChange} />
      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <span>
            <button onClick={handleSignOut}>Sair</button>
          </span>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
