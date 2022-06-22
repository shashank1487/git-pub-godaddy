import { BrowserRouter as Router } from "react-router-dom";
import mockAxios from "axios";
import { render, screen, waitFor, within } from "@testing-library/react";

import RepoList from "./index";

const successMockData = {
  data: [
    {
      id: 4967118,
      node_id: "MDEwOlJlcG9zaXRvcnk0OTY3MTE4",
      name: "gdapi-php",
      full_name: "godaddy/gdapi-php",
      private: false,
      owner: {
        login: "godaddy",
        id: 1406546,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjE0MDY1NDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/1406546?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/godaddy",
        html_url: "https://github.com/godaddy",
        followers_url: "https://api.github.com/users/godaddy/followers",
        following_url:
          "https://api.github.com/users/godaddy/following{/other_user}",
        gists_url: "https://api.github.com/users/godaddy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/godaddy/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/godaddy/subscriptions",
        organizations_url: "https://api.github.com/users/godaddy/orgs",
        repos_url: "https://api.github.com/users/godaddy/repos",
        events_url: "https://api.github.com/users/godaddy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/godaddy/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/godaddy/gdapi-php",
      description: "A PHP client for Go Daddy® REST APIs",
      fork: false,
      url: "https://api.github.com/repos/godaddy/gdapi-php",
      forks_url: "https://api.github.com/repos/godaddy/gdapi-php/forks",
      keys_url: "https://api.github.com/repos/godaddy/gdapi-php/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/godaddy/gdapi-php/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/godaddy/gdapi-php/teams",
      hooks_url: "https://api.github.com/repos/godaddy/gdapi-php/hooks",
      issue_events_url:
        "https://api.github.com/repos/godaddy/gdapi-php/issues/events{/number}",
      events_url: "https://api.github.com/repos/godaddy/gdapi-php/events",
      assignees_url:
        "https://api.github.com/repos/godaddy/gdapi-php/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/godaddy/gdapi-php/branches{/branch}",
      tags_url: "https://api.github.com/repos/godaddy/gdapi-php/tags",
      blobs_url:
        "https://api.github.com/repos/godaddy/gdapi-php/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/godaddy/gdapi-php/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/godaddy/gdapi-php/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/godaddy/gdapi-php/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/godaddy/gdapi-php/statuses/{sha}",
      languages_url: "https://api.github.com/repos/godaddy/gdapi-php/languages",
      stargazers_url:
        "https://api.github.com/repos/godaddy/gdapi-php/stargazers",
      contributors_url:
        "https://api.github.com/repos/godaddy/gdapi-php/contributors",
      subscribers_url:
        "https://api.github.com/repos/godaddy/gdapi-php/subscribers",
      subscription_url:
        "https://api.github.com/repos/godaddy/gdapi-php/subscription",
      commits_url:
        "https://api.github.com/repos/godaddy/gdapi-php/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/godaddy/gdapi-php/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/godaddy/gdapi-php/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/godaddy/gdapi-php/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/godaddy/gdapi-php/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/godaddy/gdapi-php/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/godaddy/gdapi-php/merges",
      archive_url:
        "https://api.github.com/repos/godaddy/gdapi-php/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/godaddy/gdapi-php/downloads",
      issues_url:
        "https://api.github.com/repos/godaddy/gdapi-php/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/godaddy/gdapi-php/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/godaddy/gdapi-php/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/godaddy/gdapi-php/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/godaddy/gdapi-php/labels{/name}",
      releases_url:
        "https://api.github.com/repos/godaddy/gdapi-php/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/godaddy/gdapi-php/deployments",
      created_at: "2012-07-10T00:55:55Z",
      updated_at: "2021-04-15T19:33:18Z",
      pushed_at: "2014-02-18T00:28:39Z",
      git_url: "git://github.com/godaddy/gdapi-php.git",
      ssh_url: "git@github.com:godaddy/gdapi-php.git",
      clone_url: "https://github.com/godaddy/gdapi-php.git",
      svn_url: "https://github.com/godaddy/gdapi-php",
      homepage: "",
      size: 323,
      stargazers_count: 30,
      watchers_count: 30,
      language: "PHP",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 16,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 2,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 16,
      open_issues: 2,
      watchers: 30,
      default_branch: "master",
      permissions: {
        admin: false,
        maintain: false,
        push: false,
        triage: false,
        pull: true,
      },
    },
    {
      id: 5540434,
      node_id: "MDEwOlJlcG9zaXRvcnk1NTQwNDM0",
      name: "lazy-social-buttons",
      full_name: "godaddy/lazy-social-buttons",
      private: false,
      owner: {
        login: "godaddy",
        id: 1406546,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjE0MDY1NDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/1406546?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/godaddy",
        html_url: "https://github.com/godaddy",
        followers_url: "https://api.github.com/users/godaddy/followers",
        following_url:
          "https://api.github.com/users/godaddy/following{/other_user}",
        gists_url: "https://api.github.com/users/godaddy/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/godaddy/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/godaddy/subscriptions",
        organizations_url: "https://api.github.com/users/godaddy/orgs",
        repos_url: "https://api.github.com/users/godaddy/repos",
        events_url: "https://api.github.com/users/godaddy/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/godaddy/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/godaddy/lazy-social-buttons",
      description:
        "A JavaScript plugin to place social buttons on a page on user interaction (mouseover) to spare the initial page load from the 300kb+ download requests for social APIs.",
      fork: false,
      url: "https://api.github.com/repos/godaddy/lazy-social-buttons",
      forks_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/forks",
      keys_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/teams",
      hooks_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/hooks",
      issue_events_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/events",
      assignees_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/branches{/branch}",
      tags_url: "https://api.github.com/repos/godaddy/lazy-social-buttons/tags",
      blobs_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/languages",
      stargazers_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/stargazers",
      contributors_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/contributors",
      subscribers_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/subscribers",
      subscription_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/subscription",
      commits_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/merges",
      archive_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/downloads",
      issues_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/labels{/name}",
      releases_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/godaddy/lazy-social-buttons/deployments",
      created_at: "2012-08-24T13:13:05Z",
      updated_at: "2019-07-03T20:47:17Z",
      pushed_at: "2012-09-26T21:09:04Z",
      git_url: "git://github.com/godaddy/lazy-social-buttons.git",
      ssh_url: "git@github.com:godaddy/lazy-social-buttons.git",
      clone_url: "https://github.com/godaddy/lazy-social-buttons.git",
      svn_url: "https://github.com/godaddy/lazy-social-buttons",
      homepage: "",
      size: 658,
      stargazers_count: 25,
      watchers_count: 25,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      forks_count: 7,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 7,
      open_issues: 0,
      watchers: 25,
      default_branch: "master",
      permissions: {
        admin: false,
        maintain: false,
        push: false,
        triage: false,
        pull: true,
      },
    },
  ],
  status: 200,
};

const errorMockData = {
  data: [],
  status: 500,
};

describe("RepoList test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders <RepoList> component with loading text first and then displays the repo list", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(successMockData)
    );
    render(
      <Router>
        <RepoList />
      </Router>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(
      "External Repositories"
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      const list = screen.getByRole("list");
      const { getAllByRole } = within(list);
      const listItems = getAllByRole("listitem");
      expect(listItems).toHaveLength(2);

      listItems.forEach((item, index) => {
        const { getByText } = within(item);
        const { name } = successMockData.data[index];
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  test("renders empty component when the api returns an error", async () => {
    localStorage.removeItem("public_repos");
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(errorMockData));

    render(
      <Router>
        <RepoList />
      </Router>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(
      "External Repositories"
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      const list = screen.getByRole("list");
      const { queryByRole } = within(list);
      const listItems = queryByRole("listitem");
      expect(listItems).toBeNull();
    });
  });
});
