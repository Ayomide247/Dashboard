import { Dashboard, LoginPage, SignUp } from "../../pages/index";
import { useAuthStore } from "./authStore";

const AuthPage = () => {
  const { currentPage } = useAuthStore();

  return (
    <div>
      {currentPage === "dashboard" ? (
        <Dashboard />
      ) : currentPage === "register" ? (
        <SignUp />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default AuthPage;
