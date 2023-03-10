import El from "./library/El";
import Navbar from "./components/Navbar";
import TaskTable from "./components/TaskTable";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import FilterAside from "./components/FilterAside";

const App = () => {
  const app = El({
    element: "div",
    child: [Navbar(), TaskTable(), Footer(), FilterAside(), Modal()],
  });

  return app;
};

export default App;
