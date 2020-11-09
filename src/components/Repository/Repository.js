import React from "react";
import "./Repository.css";

import { Button, Divider } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import { Query } from "react-apollo";
import { gql } from "apollo-boost";


const GET_REPOS = gql`

query { 
  viewer {                 
              repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}){
               nodes {
                 ... on Repository {
                id                       
                name
                url
                description
                homepageUrl
                createdAt
              }
             }
            }}
          }
`;

function Repository() {
    return (

      <div className="Repository" >

            <Query query={GET_REPOS}>
              {({loading, error, data}) => (
                <>

               { loading && <div> Loading....</div>}
               { error && <div> Error....</div>}
               {data && data.viewer && (
                

                      <div style={{paddingLeft: 20, paddingRight: 60 }} className="container">

                   {data.viewer.repositories.nodes.map((repo) => (
                                <div >

               <Button style={{float: 'right', borderRadius: 10}} > <StarOutlined />  star  </Button>
               <a href={repo.url}>

              
                      <h2 style={{color: '#0366D6'}}> {repo.name}</h2>  </a><br/>
                      <div style={{ width: 500, paddingBottom:10}}>
                      <span  style={{color: '#586069', fontSize: 15, paddingTop:2, width: 100}} >
                      {repo.description}
                      </span> <br/>
                      </div>

                      <span id="dateSpan" style={{color: '#586069', fontSize: 13, }} >{repo.createdAt}</span>

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