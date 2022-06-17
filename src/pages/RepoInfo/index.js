import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { GoBug, GoRepoForked, GoWatch } from "react-icons/go";

import styles from "./RepoInfo.module.scss";

export default function RepoInfo() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className={styles.container}>
      <Link to="/">
        <h2>Back to Repositories</h2>
      </Link>

      <div className={styles.card}>
        <div className={styles.item}>
          <a href={data.html_url} rel="noopener noreferrer" target="_blank">
            <h1 className={styles.title}>{data.name}</h1>
          </a>
        </div>
        <div className={styles.item}>
          {data.forks_count !== undefined && (
            <span className={styles.tags}>
              <GoRepoForked />
              {`${+data.forks_count} ${
                data.forks_count === 1 ? "fork" : "forks"
              }`}
            </span>
          )}
          {data.open_issues_count !== undefined && (
            <span className={styles.tags}>
              <GoBug />
              {`${+data.open_issues_count} open ${
                data.open_issues_count === 1 ? "issue" : "issues"
              }`}
            </span>
          )}
          {data.watchers !== undefined && (
            <span className={styles.tags}>
              <GoWatch />
              {`${+data.watchers} ${
                data.watchers === 1 ? "watcher" : "watchers"
              }`}
            </span>
          )}
        </div>
        <div className={styles.item}>
          <p className={styles.description}>
            {data.description || "No description available"}
          </p>
        </div>
        <div className={styles.item}>
          <strong>
            <p className={styles.language}>
              {data.language || "No language info available"}
            </p>
          </strong>
        </div>
      </div>
    </div>
  );
}
