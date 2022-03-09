import React from "react";
import "./style.css";

export default function renderResult({ result }) {
  const renderList = () => {
    // console.log(Object.values(result.repos));
    const repoObjectArray = [];
    for (const property in result.repos) {
      const entry = Object.values(result.repos)[property];
      repoObjectArray.push({ name: entry.name, forks: entry.forks });
    }

    return (
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
              <td>{repo.name}</td>
              <td>{repo.forks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <section>
        <div id="avatar">
          <img width="128" height="128" src={result.avatar} />
        </div>
      </section>
      <section>{renderList()}</section>
    </>
  );
}
