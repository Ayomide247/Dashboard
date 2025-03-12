import { SidebarProvider } from "./components/Context";
import AuthPage from "./components/steps/AuthPage";
// import { LoginPage, RegPage } from "./pages/index";
// AuthPage
function App() {
  return (
    <SidebarProvider>
      <AuthPage />
    </SidebarProvider>
  );
}

export default App;
