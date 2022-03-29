
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Comments></Comments>
    </div>
  );
}

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h2>Total Countries: {comments.length}</h2>
      {
        comments.map(comment => <ShowComments name = {comment.name.common}></ShowComments>)
      }
    </div>
  )
}

function ShowComments (props){
  console.log(props.name)
  return(
    <div>
      <h4>{props.name}</h4>
    </div>
  )
}

export default App;
