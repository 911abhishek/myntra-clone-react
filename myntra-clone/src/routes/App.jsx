import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoaderSpinner from "../components/LoaderSpinner";

function App() {
  
const fetchStatus = useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoaderSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
