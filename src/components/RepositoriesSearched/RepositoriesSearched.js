import React from "react";
import { Button, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";

function RepositoriesSearched({ repo, expanded, onToggled }) {
  const {
    node: {
      name,
      description,
      createdAt,
      url,
      owner: { login },
      stargazers: { totalCount: totalStarCount },
    },
  } = repo;
  return (
    <div
      className="RepositoriesSearched"
      style={{ paddingLeft: 20, paddingRight: 60 }}
    >
      <p expanded={expanded} onChange={onToggled}></p>
      <Button style={{ float: "right", borderRadius: 10 }}>
        {" "}
        <StarOutlined /> star{" "}
      </Button>
      {login}
      <a href={url}>
        {" "}
        <h2 style={{ color: "#0366D6" }}> {name}</h2>
      </a>
      <br />
      <div style={{ width: 500, paddingBottom: 10 }}>
        <span
          style={{ color: "#586069", fontSize: 15, paddingTop: 2, width: 100 }}
        >
          {description}
        </span>{" "}
        <br />
      </div>
      <span id="dateSpan" style={{ color: "#586069", fontSize: 13 }}>
        {createdAt}
      </span>
      <Divider />
    </div>
  );
}

export default RepositoriesSearched;
