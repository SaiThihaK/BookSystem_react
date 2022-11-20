import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./page/Add/Add";
import Book from "./page/Book/Book";

import Update from "./page/Update/Update";
import "./Style/Style.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
