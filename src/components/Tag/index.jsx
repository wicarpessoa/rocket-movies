import { Container } from "./styles";

export function Tag({ title, noteTag, size = 8, ...rest }) {
  return (
    <Container noteTag={noteTag} size={size} {...rest}>
      {title}
    </Container>
  );
}
