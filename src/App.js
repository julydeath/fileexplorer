import "./App.css";
// import Outline from "./components/Outline";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import { useState } from "react";

function App() {
  //eslint-disable-next-line
  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);

  return (
    <div className="App">
      <Folder explorerData={explorerData} />
    </div>
  );
}

export default App;
