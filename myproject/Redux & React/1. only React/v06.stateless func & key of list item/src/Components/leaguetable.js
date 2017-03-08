import $ from 'jquery'
import React, { Component } from 'react'
import { LeaguTableList } from './c'

export default class LeagueTableWidget extends Component {
    constructor(props) {
        super(props)
        this.state = { teams: [], loading: 'veri bekleniyor...' }
        this.readLeagueTableFromAPI = this.readLeagueTableFromAPI.bind(this);

    }

    readLeagueTableFromAPI() {
        this.setState({ loading: 'veri okunuyor...' })
        //http://api.canliskor.com.tr/soccer/mservice/LeagueStage?TournamentID=1&includeFixture=1
        let url = 'https://jsonplaceholder.typicode.com/posts';
        $.getJSON(url).done(teams => this.setState({ teams: teams, loading: 'veri okundu....' })).fail(err => console.log(err))
    }

    componentWillMount() {
        this.readLeagueTableFromAPI();
    }

    render() {
        return (<div>
            {/* <button onClick={this.readLeagueTableFromAPI}>Get leagutable list</button>*/}
            <p className={"bg-primary"}>{this.state.loading}</p>
            <LeaguTableList teams={this.state.teams} />
        </div>)
    }
}


