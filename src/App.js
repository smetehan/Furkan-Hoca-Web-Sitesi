import Container from "react-bootstrap/Container";
import NavBar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Container className="text-center mt-4 p-4">
          <AppRouter />
        </Container>
      </AuthContextProvider>
    </>
  );
}

export default App;
