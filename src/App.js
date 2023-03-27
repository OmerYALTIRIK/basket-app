import React from "react";
import { useState } from "react";
import "./App.css";
import { Container, SimpleGrid, List, ThemeIcon, Input, Button, Group, Drawer, Indicator, Badge } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";
import { IconBasket } from "@tabler/icons-react";
import Card from "./components/Card";

const storeItems = [
  { id: 100, name: "Fotoğraf Makinası", src: "camera", price: 20 },
  { id: 101, name: "Kulaklık", src: "headphone", price: 10 },
  { id: 102, name: "Oyun Konsolu", src: "joystick", price: 25 },
  { id: 103, name: "Retro Fotoğraf Makinası", src: "retro-cam", price: 25 },
  { id: 104, name: "Oyuncak Araba", src: "toy-car", price: 25 },
  { id: 105, name: "Kol Saati", src: "watch", price: 25 },
];

function App() {
  let [basketItems, setBasketItems] = useState([]); //useState ile basketItems değişkeni oluşturduk ve bunun başlangıç değer
  let [searchValue, setSearchValue] = useState(""); //useState ile search değişkeni oluşturduk ve bunun başlangıç değeri boş bir string
  let filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  let [opened, setOpened] = useState(false);
  let addToBasket = ({ id, name }) => {
    let item = basketItems.find((item) => item.id === id);
    if (item) {
      item.count++;
      setBasketItems([...basketItems]);
      return;
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama" ml={20}>
          <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
        <Indicator color={"red"} label={basketItems.length} size="22">
          <Button onClick={() => setOpened(true)}>
            <IconBasket size={22} />
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return <Card key={name} name={name} src={src} onAdd={() => addToBasket({ id, name })} />; //bir nesneyi map ile döndürürken unique key vermek zorundayız
        })}
      </SimpleGrid>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Sepetim" padding={"md"} size="md">
        <List
          className="List"
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <CircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ name, count }, index) => {
            return (
              <List.Item key={index}>
                <Group>
                  <div>{name}</div> <Badge>{count}</Badge>
                </Group>
              </List.Item>
            );
          })}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
