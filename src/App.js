import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Otavio";

  const newName = name.toUpperCase();
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu Primeiro Projeto</p>
      <h1>{newName}</h1>
      <img src={url} alt="Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
