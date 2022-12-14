import { Screen } from "./style/InfoStyle";
import { Trainer } from "./components/Trainer";
import PokeList from "./components/PoketList";
import HashSection from "./components/HashCompo";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFoundLOTTIE from "./components/PageNotFound";
import DashBoardView from "./components/DashboardView";
import { RecoilRoot } from 'recoil';
import { Console } from "./func/Console";

Console();

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="*" element={<PageNotFoundLOTTIE />} />
            <Route path="/" element={      
              <>
                <Trainer />
                <HashSection />
                <PokeList />
              </>
            } />
            <Route path="/:index" element={() => <DashBoardView />}/>
          </Routes>
        </Screen>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
