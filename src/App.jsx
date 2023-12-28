import "./App.css";
import BaseComingSoon from "./components/base-coming-soon";
import { TailwindIndicator } from "./components/indicator";

function App() {
  return (
    <div className="body">
      <BaseComingSoon />
      <TailwindIndicator />
    </div>
  );
}

export default App;
