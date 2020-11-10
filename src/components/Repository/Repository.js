import React from "react";
import Moment from "react-moment";
import "./Repository.css";

import { Button, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";

import { Query } from "react-apollo";
import { GET_REPOS } from "../Queries";

function Repository() {
  return (
    <div className="Repository">
      <Query query={GET_REPOS}>
        {({ loading, error, data }) => (
          <>
            {loading && <div> Loading....</div>}
            {error && <div> Error....</div>}
            {data && data.viewer && (
              <div
                style={{ paddingLeft: 20, paddingRight: 60 }}
                className="container"
              >
                {data.viewer.repositories.nodes.map((repo) => (
                  <div>
                    <Button style={{ float: "right", borderRadius: 10 }}>
                      {" "}
                      <StarOutlined /> star{" "}
                    </Button>
                    <a href={repo.url}>
                      <h2 style={{ color: "#0366D6" }}> {repo.name}</h2>{" "}
                    </a>
                    <br />
                    <div style={{ width: 500, paddingBottom: 10 }}>
                      <span
                        style={{
                          color: "#586069",
                          fontSize: 15,
                          paddingTop: 2,
                          width: 100,
                        }}
                      >
                        {repo.description}
                      </span>{" "}
                      <br />
                    </div>

                    <span
                      id="dateSpan"
                      style={{ color: "#586069", fontSize: 13 }}
                    >
                      Updated <Moment fromNow>{repo.createdAt}</Moment>
                    </span>

                    <Divider />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </Query>
    </div>
  );
}

export default Repository;
