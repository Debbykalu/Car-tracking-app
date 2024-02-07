import 'bulma/css/bulma.css';
import '../src/styles.css';
import { CarForm } from "./Component/CarForm";
import { CarList } from "./Component/CarList";
import { CarSearch } from "./Component/CarSearch";
import { CarValue } from "./Component/CarValue";

function App() {
  return (
    <div className="container is-fluid">
     <CarForm />
     <CarSearch />
     <CarList />
     <CarValue />
    </div>
  );
}

export default App;
