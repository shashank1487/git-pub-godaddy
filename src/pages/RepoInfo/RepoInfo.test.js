import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import RepoInfo from "./index";

const mockState = {
  description: "A PHP client for Go Daddy® REST APIs",
  forks_count: 16,
  html_url: "https://github.com/godaddy/gdapi-php",
  language: "PHP",
  name: "gdapi-php",
  open_issues_count: 2,
  watchers: 30,
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useLocation: () => ({
    hash: "",
    key: "rd8e106h",
    pathname: "/repository/4967118",
    search: "",
    state: mockState,
  }),
}));

describe("RepoInfo test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders <RepoInfo> component using data from useLocation state", async () => {
    render(
      <Router>
        <RepoInfo />
      </Router>
    );

    expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
      "Back to Repositories"
    );
    expect(screen.getAllByRole("heading")[1]).toHaveTextContent(mockState.name);
    expect(screen.getByTestId("forks")).toHaveTextContent(
      `${mockState.forks_count} forks`
    );
    expect(screen.getByTestId("issues")).toHaveTextContent(
      `${mockState.open_issues_count} open issues`
    );
    expect(screen.getByTestId("watchers")).toHaveTextContent(
      `${mockState.watchers} watchers`
    );
    expect(screen.getByTestId("description")).toHaveTextContent(
      `${mockState.description}`
    );
    expect(screen.getByTestId("language")).toHaveTextContent(
      `${mockState.language}`
    );
  });
});
