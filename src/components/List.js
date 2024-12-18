import Item from "./Item";
function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={2002} />
        <Item marca="Lamborghini" ano_lancamento={2022} />
        <Item marca="Aston Martin" ano_lancamento={2008} />
        <Item marca="Honda" ano_lancamento={1994} />
      </ul>
    </>
  );
}

export default List;
