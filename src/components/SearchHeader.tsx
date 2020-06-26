import React from "react";
import styled from "styled-components";
import { Person } from  "./Person"
import mockData from '../mock-data.json'

export type Item = {
    id: number
    name: string
    email: string
    avatar: string
    description: string
}

const Heading = styled.h1`
    font-family: "Georgia", Times, serif;
    font-weight: 400;
    margin: 0;
`;

const Intro = styled.p`
    font-family: "Helvetica", sans-serif;
    padding: 60px 0 0;
    margin: 0;
    line-height: 1.5em;
`

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SearchHeader = () => (
  <>
    <Heading>The Person Finder</Heading>
    <Intro>
      If you just can’t find someone and need to know what they look like,
      you’ve come to the right place! Just type the name of the person you are
      looking for below into the search box!
    </Intro>
    <ListContainer>
      {mockData.map((person) => (
        <>
          <Person key={person.id} item={person}  />
        </>
      ))}
    </ListContainer>
  </>
);

export { SearchHeader };
