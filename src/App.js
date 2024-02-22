import Contact from "./components/contact/Contact";
import FirstFrame from "./components/first/FirstFrame";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ProjectDemo from "./components/project/ProjectDemo";
import About from "./components/about/About";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstFrame />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<ProjectDemo />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
