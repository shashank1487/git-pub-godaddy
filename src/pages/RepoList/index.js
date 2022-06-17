import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api";

import styles from "./RepoList.module.scss";

export default function RepoList() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getAllRepos() {
      try {
        const publicRepos = localStorage.getItem("public_repos");

        if (publicRepos) {
          setRepos(JSON.parse(publicRepos));
          setError(null);
        } else {
          setLoading(true);
          const { data, status } = await api.get("/orgs/godaddy/repos");
          if (status === 200) {
            localStorage.setItem("public_repos", JSON.stringify(data));
            setRepos(data);
            setError(null);
          }
        }
      } catch (e) {
        setRepos([]);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    getAllRepos();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>External Repositories</h1>
      </div>
      <div className={styles.content}>
        {loading && <span>Loading...</span>}
        {error && <span className={styles.error}>{error}</span>}
        {repos && (
          <ul className={styles.items}>
            {repos.map(
              ({
                description,
                forks_count,
                html_url,
                id,
                language,
                name,
                open_issues_count,
                watchers,
              }) => (
                <li key={name} className={styles.item}>
                  <Link
                    to={`/repository/${id}`}
                    state={{
                      description,
                      forks_count,
                      html_url,
                      language,
                      name,
                      open_issues_count,
                      watchers,
                    }}
                  >
                    <p>{name}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
