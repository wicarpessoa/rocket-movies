import { Container } from "./styles";
import { Star } from "phosphor-react";

export function MovieRate({ rate, size = 16 }) {
  let listRates = [];
  for (var i = 0; i < rate; i++) {
    listRates.push("fill");
  }
  for (var i = 0; i < +(5 - rate); i++) {
    listRates.push("regular");
  }
  return (
    <Container>
      {console.log(listRates)}
      {listRates.map((rate, index) => {
        return <Star key={index} weight={rate} size={size} />;
      })}
    </Container>
  );
}
