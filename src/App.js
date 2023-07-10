import "./App.css";
import RouteList from "./routes/RouteList";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <RouteList />
      </AuthProvider>
    </>
  );
}

export default App;
