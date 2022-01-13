import Item from "./components/item";
import Card from "./components/card";

const App = () => {
  return (
  <>
    <h1>React Introduction</h1>
    <ul>
      <Item text="Item 1"/>
      <Item text="Item 2"/>
      <Item text="Item 3"/>
    </ul>

    <Card />
  </>
  ) 
}

export default App;