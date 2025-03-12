import { Dashboard, LoginPage, RegPage } from "../../pages/index";
import { useAuthStore } from "./authStore";

const AuthPage = () => {
  const { currentPage } = useAuthStore();

  return (
    <div>
      {currentPage === "dashboard" ? (
        <Dashboard />
      ) : currentPage === "register" ? (
        <RegPage />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default AuthPage;
