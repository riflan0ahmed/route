import AuthProvider from "./context/Auth";
import Pages from "./pages/Pages";

function App() {
    return (
        <AuthProvider>
            <Pages />
        </AuthProvider>
    );
}

export default App;
