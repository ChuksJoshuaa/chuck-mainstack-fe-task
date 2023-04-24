import axios from "axios";
import { fetchUrl } from "./utils/url";
import { useDispatch } from "react-redux";
import {
  openSidebar,
  setData,
  setError,
  setLoader,
  setLocations,
  setSources,
} from "./redux/features/main/mainSlick";
import { useEffect, useState } from "react";
import { Home } from "./pages";

function App() {
  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState(null);

  const fetchData = async () => {
    try {
      dispatch(setLoader(true));
      await axios.get(`${fetchUrl}`).then(function (response) {
        let data = response.data;
        dispatch(setData(data));
        dispatch(setLocations(data.top_locations));
        dispatch(setSources(data.top_sources));
      });
    } catch (error) {
      console.log(error);
      dispatch(setError(true));
    } finally {
      dispatch(setLoader(false));
    }
  };

  const checkWidth = () => {
    let widthSize = null;
    if (typeof window !== "undefined") {
      widthSize = window?.innerWidth;
      setScreenSize(widthSize);
    }

    if (widthSize <= 750) {
      dispatch(openSidebar(false));
    }

    if (widthSize >= 751) {
      dispatch(openSidebar(true));
    }
    return widthSize;
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [screenSize]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
