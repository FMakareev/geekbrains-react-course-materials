import {RefExample} from "./examples/RefExample";
import {Layout} from "./components/Layout";
import faker from 'faker';
import {AlbumItem} from "./components/AlbumItem";
import {AlbumList} from "./components/AlbumList";
import {useEffect, useMemo, useState} from "react";

const createAlbumItem = () => ({
  id: faker.datatype.uuid(),
  title: faker.animal.cat(),
  description:faker.lorem.paragraph(),
  image: {
    id: faker.datatype.uuid(),
    src: faker.image.animals(),
    alt: faker.animal.cat(),
  }
})

const list = Array.from({length: 10}).map(createAlbumItem)

function App() {


  const [items, setItems] = useState(list);

  const addItems = () => {
    const newItems = [...items];
    newItems.push(createAlbumItem());

    setItems(newItems)
  }

  return (
    <Layout>
      <button onClick={addItems}>
        add album
      </button>
      <AlbumList list={items}/>
    </Layout>
  );
}

export default App;
