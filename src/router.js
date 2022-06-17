import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import RepoList from "./pages/RepoList";
import RepoInfo from "./pages/RepoInfo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RepoList />} />
        <Route path="/repository/:id" element={<RepoInfo />} />
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
    </BrowserRouter>
  );
}
