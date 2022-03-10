import React from "react";
import "./style.css";

export default function renderResult({ result }) {
  const renderList = () => {
    // console.log(Object.values(result.repos));
    const repoObjectArray = [];
    for (const property in result.repos) {
      const entry = Object.values(result.repos)[property];
      repoObjectArray.push({
        name: entry.name,
        forks: entry.forks,
        url: entry.html_url
      });
    }

    return (
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>Repository Name</th>
              <th>Number of Forks</th>
            </tr>
          </thead>
          <tbody>
            {repoObjectArray.map((repo, id) => (
              <tr key={id}>
                <td>
                  <a href={repo.url}>{repo.name}</a>
                </td>
                <td>{repo.forks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section id="content">
      <div id="avatar">
        <img src={result.avatar} />
        <p>{}</p>
      </div>
      {renderList()}
    </section>
  );
}
