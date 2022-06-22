import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { createBrowserHistory } from "history";

import RepoList from "./pages/RepoList";
import RepoInfo from "./pages/RepoInfo";

export default function Router() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<RepoList />} />
        <Route path="/repository/:id" element={<RepoInfo />} />
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
    </BrowserRouter>
  );
}
