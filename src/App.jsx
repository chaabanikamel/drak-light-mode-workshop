import InputsForms from "./compontens/InputsForms";
import ContextProvider from "./contextInputs/ContextInputs";
function App() {
  return (
    <div>
      <ContextProvider>
        <InputsForms />
      </ContextProvider>
    </div>
  );
}

export default App;
