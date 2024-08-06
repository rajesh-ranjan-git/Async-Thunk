import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loadPost } from "./Slices/postSlice";

function App() {
  const dispatch = useDispatch();

  const { posts, status } = useSelector((state) => state.posts);

  console.log(posts.data.posts[0].title);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPost());
    }
  }, []);

  return (
    <div>
      <h1>Async Thunk Redux</h1>
    </div>
  );
}

export default App;
