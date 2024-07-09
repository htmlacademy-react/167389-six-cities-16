import MainPage from "../../pages/main/main";
//import MainEmpty from "../Main-empty/Main-empty";
//import Favorites from "../../pages/favorites/favorites";
//import { Settings } from "../../const";

type AppScreenProps = {
  placedCount: number;
  hotelsCount: number;
}



function App ({placedCount, hotelsCount}:AppScreenProps) : JSX.Element {
  return (
    <>
     <MainPage plasedCount={placedCount}
        hotelsCount={hotelsCount} />
    </>
  )
}
export default App;
