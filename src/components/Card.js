import { Card, Image, Text, Button, Group } from "@mantine/core";

const Cardcomponent = ({ name, src, onAdd }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={`/assets/image/${src}.jpg`} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={onAdd}>
        Ekle
      </Button>
    </Card>
  );
};

export default Cardcomponent;
