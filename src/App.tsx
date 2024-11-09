import ListGroup from "./components/ListGroup/ListGroup";


function App() {
  let items=["New York", "Atlanta", "Mexico City"]

  return(
    <div>
   <ListGroup items={items} heading="Cities" onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      } } />;
   </div>
  )
}

export default App;
