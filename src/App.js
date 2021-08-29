import { Route } from "react-router-dom";
import "./app.styles.scss";
import "./global.styles.scss";

import Sidebar from "./components/sidebar/sidebar.component";
import Header from "./components/header/header.component";
import Overview from "./pages/overview/overview.page";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__container">
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__content">
          <Route exact path="/overview" component={Overview} />
        </div>
      </div>
    </div>
  );
}

export default App;
