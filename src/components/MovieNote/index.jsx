import { Container, Content } from "./styles";

export function MovieNote({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Content>{children}</Content>
    </Container>
  );
}
