import React from "react";
import "./Navbar.css";

import { GET_REPOS } from "../Queries";

import { Tabs } from "antd";
import {
  ReadOutlined,
  BookOutlined,
  CodeSandboxOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

import { Query } from "react-apollo";

const { TabPane } = Tabs;

function Navbar() {
  return (
    <div className="Navbar">
      <Tabs defaultActiveKey="2" id="navTabs">
        <TabPane
          tab={
            <span>
              <ReadOutlined className="menuIcons" />
              Overview
            </span>
          }
          key="1"
        ></TabPane>

        <TabPane
          tab={
            <span id="repositoriesSpan">
              <BookOutlined />
              Repositories
              <Query query={GET_REPOS}>
                {({ loading, error, data }) => (
                  <>
                    {loading && <div> Loading....</div>}
                    {error && <div> Error....</div>}
                    {data && data.viewer && (
                      <span> {data.viewer.repositories.totalCount} </span>
                    )}
                  </>
                )}
              </Query>
            </span>
          }
          key="2"
        ></TabPane>

        <TabPane
          tab={
            <span>
              <ProjectOutlined className="menuIcons" />
              Projects
            </span>
          }
          key="3"
        ></TabPane>

        <TabPane
          tab={
            <span>
              <CodeSandboxOutlined className="menuIcons" />
              Packages
            </span>
          }
          key="4"
        ></TabPane>
      </Tabs>
    </div>
  );
}

export default Navbar;
