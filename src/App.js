import { CarForm } from "./Component/CarForm";
import { CarList } from "./Component/CarList";
import { CarSearch } from "./Component/CarSearch";
import { CarValue } from "./Component/CarValue";

function App() {
  return (
    <div className="App">
     <CarForm />
     <CarList />
     <CarSearch />
     <CarValue />
    </div>
  );
}

export default App;
