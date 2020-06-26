
import React from "react";
import styled from "styled-components";
import { Item } from "./SearchHeader"

const Container = styled.li`
  display: flex;
`;

const Avatar = styled.img`
  width: 95px;
  margin-right: 15px;
`

type Person = {
  item: Item
}

const Person = (item: Person) => (
  <Container>
    {/* I am totally blanking on the way to avoid this outer object 🤦‍♀️  */}
    <Avatar src={item.item.avatar} alt={`${item.item.name}.`} />
    <div>
      <h2>{item.item.name}</h2>
      <p>{item.item.description}</p>
    </div>
  </Container>
);

export { Person };
