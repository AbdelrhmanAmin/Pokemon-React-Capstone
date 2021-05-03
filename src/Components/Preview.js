import { useParams } from "react-router-dom";
const Preview = () => {
  let { id } = useParams();
  return (
    <div className="App">
      POKEMON: {id}
    </div>
  );
}

export default Preview;
