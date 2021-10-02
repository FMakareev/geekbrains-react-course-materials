import {useRequestApi} from "./hooks/api/useRequestApi";
import {postsApi} from "./api";


function App() {

  const getPostsState = useRequestApi({
    api: postsApi.getPosts,
    isAutoRun: true
  })

  const  getPostState = useRequestApi({
    api: postsApi.getPost,
  })
  const  getCommentsState = useRequestApi({
    api: postsApi.getComments,
  })

  return (
    <div className="App">
      {
        getPostsState.isLoading && <div>loading ...</div>
      }
      {
        getPostsState.isError && <div>error</div>
      }

      <button onClick={getPostsState.request}>
        run
      </button>
      {
        Array.isArray(getPostsState.data) && getPostsState.data.map(({title, id}, index) => <div key={id}>
          {index}. {title}
          <button onClick={() => getPostState.request(id)}>get by id</button>
          <button onClick={() => getCommentsState.request(id)}>get comments</button>
          <div>
            {
              Array.isArray(getCommentsState.data) && getCommentsState.data.map(({name, body, id}) => <div key={id}>
                <h5>{name}</h5>
                <p>
                  {body}
                </p>
              </div>)
            }
          </div>
          <br/>
        </div>)
      }
    </div>
  );
}

export default App;
