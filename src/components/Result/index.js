import React from "react";

export default function ({ result }) {
  return (
    <>
      <section>
        <div>
          <img width="128" height="128" src={result.avatar} />
        </div>
      </section>
    </>
  );
}
