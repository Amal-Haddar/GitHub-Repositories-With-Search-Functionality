import React from "react";
import "./LeftSidebar.css";

import { Button } from "antd";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_VIEWER = gql`
  query {
    viewer {
      avatarUrl
      login
      bio
    }
  }
`;

function LeftSidebar() {
  return (
    <div className="LeftSidebar">
      <Query query={GET_VIEWER}>
        {({ loading, error, data }) => (
          <>
            {loading && <div> Loading....</div>}
            {error && <div> Error....</div>}
            {data && data.viewer && (
              <div>
                <img
                  src={data.viewer.avatarUrl}
                  alt={data.viewer.login}
                  className="roundedImage"
                ></img>

                <h2> {data.viewer.login} </h2>

                <p style={{ width: 280 }}> {data.viewer.bio} </p>
                <Button id="editButton"> Edit profile </Button>
              </div>
            )}
          </>
        )}
      </Query>
    </div>
  );
}

export default LeftSidebar;
