import React from "react";
import { useState } from "react";
import "./App.css";
import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import Card from "./components/Card";

const storeItems = [
  { name: "Fotoğraf Makinası", src: "camera", price: 20 },
  { name: "Kulaklık", src: "headphone", price: 10 },
  { name: "Oyun Konsolu", src: "joystick", price: 25 },
  { name: "Retro Fotoğraf Makinası", src: "retro-cam", price: 25 },
  { name: "Oyuncak Araba", src: "toy-car", price: 25 },
  { name: "Kol Saati", src: "watch", price: 25 },
];

function App() {
  let [basketItems, setBasketItems] = useState([]); //useState ile basketItems değişkeni oluşturduk ve bunun başlangıç değer
  let [searchValue, setSearchValue] = useState(""); //useState ile search değişkeni oluşturduk ve bunun başlangıç değeri boş bir string
  let filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  return (
    <Container>
      <Input.Wrapper label="Arama">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, src }) => {
          return <Card key={name} name={name} src={src} onAdd={() => setBasketItems([...basketItems, { name }])} />; //bir nesneyi map ile döndürürken unique key vermek zorundayız
        })}
      </SimpleGrid>

      <List
        className="List"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        {basketItems.map(({ name }, index) => {
          return <List.Item key={name + index}>{name}</List.Item>;
        })}
      </List>
    </Container>
  );
}

export default App;
