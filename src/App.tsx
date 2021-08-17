import { useSelector } from "react-redux";
import { someAsyncFetch } from "./Api";
import "./App.css";
import { Select } from "./components/Select/Select";
import { IRootState, selectItems } from "./store";

const App = (): JSX.Element => {
  const currentItem = useSelector(
    (state: IRootState) => state.selectReducer.selectedItem
  );

  const getFruits = async () => {
    const res = await someAsyncFetch();
    return res;
  };

  return (
    <main className="wrapper">
      <div>
        <h3>Custom async select with search</h3>
        <h4>Selected item is: {currentItem?.name} </h4>
        <Select
          fetchData={getFruits}
          prompt="Select..."
          id="id"
          label="name"
          storeValue={selectItems}
        />
      </div>
    </main>
  );
};

export default App;
