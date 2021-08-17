import {Container} from '@material-ui/core';
import {FeaturedPostList} from "./components/FeaturedPostList";

const featuredPosts = [
  {
    id: 'post_1',
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: 'post_2',
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


function App() {
  return (
    <Container maxWidth="lg">
      <FeaturedPostList posts={featuredPosts}/>
    </Container>

  );
}

export default App;
