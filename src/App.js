import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage.tsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";
import FileReportPage from "./Pages/FileReportPage";
import ReferencePage from "./Pages/ReferencePage";
import { COERegulationsPage } from "./Pages/COERegulationsPage";
import ProducePage from "./Pages/ProductTypePage";
import UpdatesPage from "./Pages/UpdatesPage";
import AlertsPage from "./Pages/AlertsPage";
import SearchResultsPage from "./Pages/SearchResultsPage";

export default class App extends React.Component {
    constructor(params){
        super(params);
        this.state = {loaded: false}
    }
    componentDidMount() {
        fetch("data.json").then(data => data.json()).then(data => this.setState({ loaded: true, data: data }));
        if (!this.state.loaded)
            {
                fetch("/data.json").then(data => data.json()).then(data => this.setState({ loaded: true, data: data }));
            }
    }
    render(){
        if (!this.state.loaded)
            return "loading...";
        

        return (
            <>
                <Router>
                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route exact path="/">
                                <Homepage data={this.state.data} />
                             </Route>
                            <Route path="/about">
                                <AboutPage />
                            </Route>
                            <Route path="/reactdefault">
                                <Homepage data={this.state.data} />
                            </Route>
                            <Route path="/snapInfo">
                                <SNAPInfoPage />
                            </Route>
                            <Route exact path="/report">
                                <FileReportPage />
                            </Route>
                            <Route path="/references">
                                <ReferencePage />
                            </Route>
                            <Route path="/coeregulations">
                                <COERegulationsPage />
                            </Route>
                            <Route path="/search">
                                <SearchResultsPage />
                            </Route>
                            <Route path="/updates">
                                <UpdatesPage />
                            </Route>
                            <Route path="/Alerts">
                                <AlertsPage />
                            </Route>
                            <Route path="/:id">
                                <Homepage data={this.state.data} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}

/*function subCat() {
    let { path, url } = useRouteMatch();
    return (
        );
}*/

function ReactDefault() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
