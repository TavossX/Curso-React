import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Frase />
      <Frase />
      <Pessoa
        nome="Otavio"
        idade="20"
        profissao="Estudante"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
