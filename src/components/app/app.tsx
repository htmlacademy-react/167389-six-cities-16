import MainPage from "../../pages/main/main";
//import MainEmpty from "../Main-empty/Main-empty";
//import Favorites from "../../pages/favorites/favorites";
//import { Settings } from "../../const";

type AppScreenProps = {
  placesCount: number;
}


function App ({placesCount}:AppScreenProps) : JSX.Element {
  return (
    <>
     <MainPage placesCount={placesCount}
      />
    </>
  )
}
export default App;
