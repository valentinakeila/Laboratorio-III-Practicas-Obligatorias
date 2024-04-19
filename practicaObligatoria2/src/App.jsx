import MyTable from "./components/myTable/MyTable";

const App = () => {

  const netIncomes = [
    {brand: "McDonalds", income: 1291283},
    {brand: "Burger King", income: 1927361},
    {brand: "KFC", income: 1098463}
  ];

  return <MyTable netIncomesArray={netIncomes}/>;
};

export default App;
