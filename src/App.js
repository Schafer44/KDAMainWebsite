import React from "react";
import "./App.css";
import { Homepage } from "./Pages/Homepage";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";
import FileReportPage from "./Pages/FileReportPage";
import ReferencePage from "./Pages/ReferencePage";
import { COERegulationsPage } from "./Pages/COERegulationsPage";
import UpdatesPage from "./Pages/UpdatesPage";
import AlertsPage from "./Pages/AlertsPage";
import SearchResultsPage from "./Pages/SearchResultsPage";
import KDANavbar from "./Components/KDANavbar";
import KDAFooter from "./Components/KDAFooter";
import SearchBody from "./Components/SearchBody";

export default class App extends React.Component {
    constructor(params){
        super(params);
        this.state = { loaded: false, searchTerms: "" }
        this.search = this.search.bind(this)
    }
    componentDidMount() {
        //Fetches data.json to be sent to all futrue pages that may need the data.
        if (!this.state.loaded)
            {
                fetch("/data.json").then(data => data.json()).then(data => this.setState({ loaded: true, info: data }));
            }
    }

    search(terms) {
        this.setState({ searchTerms:terms })
    }

    render(){
        if (!this.state.loaded)
            return "loading...";
        return (
            <>
                <Router>

                    <KDANavbar data={this.state.info.data} searchTerms={this.state.searchTerms} search={this.search}>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/about">
                                <AboutPage />
                            </Route>
                            <Route path="/reactdefault">
                                <Homepage data={this.state.info.data} />
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
                            <Route path="/search/:terms" render={({ match }) => {
                                return <SearchBody data={this.state.info.data} search={match.params.terms} />
                            }}/>
                            <Route path="/updates">
                                <UpdatesPage updates={this.state.info.updates}/>
                            </Route>
                            <Route path="/Alerts">
                                <AlertsPage alerts={this.state.info.alerts}/>
                            </Route>
                            <Route path="/:id" render={({ match }) => {
                                console.log(match);
                                return <Homepage name={match.params.id} data={this.state.info.data[match.params.id]} />
                            }} />
                            <Route path="/" exact render={({ match }) => {
                                console.log(match);
                                return <Homepage name="Home" data={this.state.info.data["Home"]} />
                            }} />
                        </Switch>
                        
                    </KDANavbar>
                    <KDAFooter>
                    </KDAFooter>
                </Router>
            </>
        );
    }
}
