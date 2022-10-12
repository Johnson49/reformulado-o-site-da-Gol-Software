import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";
import GlobalStyle from "./app.style"
export const App: React.FC  = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <GlobalStyle />
    </BrowserRouter>

  );
};
