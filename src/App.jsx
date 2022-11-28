import { Screen } from "./style/InfoStyle";
import { Trainer } from "./components/Trainer";
import PokeList from "./components/PoketList";
import HashSection from "./components/HashCompo";

// import { useQuery } from "react-query"

function App() {
  return (
    <>
      <Screen>
        <Trainer />
        <HashSection />
        <PokeList />
      </Screen>
    </>
  );
}

export default App;
