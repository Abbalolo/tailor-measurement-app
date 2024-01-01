import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddForm from "./pages/Home/AddForm/AddForm";
import { DataProvider } from "./components/context/Data";
import AddCapForm from "./pages/Home/AddForm/AddCapForm";
import HistoryDetails from "./components/histories/HistoryDetails";

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addform" element={<AddForm />} />
          <Route path="addcapform" element={<AddCapForm />} />
          <Route path="history/:historyId" element={<HistoryDetails />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
