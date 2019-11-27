import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "../styles/base.css"

import Categories from "./CategoryList"
import Posts from "./PostList"
import CreatePost from "./PostForm"
import Post from "./ViewPost"


function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/:slug" component={Posts} />
          <Route exact path="/:slug/post" component={CreatePost} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>  
      </div>
    </Router>
  )
}

export default App
