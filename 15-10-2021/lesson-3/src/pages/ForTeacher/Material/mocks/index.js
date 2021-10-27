import faker from "faker";

export const createAlbumItem = () => ({
  id: faker.datatype.uuid(),
  title: faker.animal.cat(),
  description: faker.lorem.paragraph(),
  image: {
    id: faker.datatype.uuid(),
    src: faker.image.animals(),
    alt: faker.animal.cat()
  }
});
