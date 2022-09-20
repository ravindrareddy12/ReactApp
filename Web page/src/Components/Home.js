import React from 'react';
import axios from 'axios';
import Wallpaper from './Wallpaper'
import QuickSearch from './QuickSearches'

// Class Component
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: [],
            mealType: []
        }
    }

    componentDidMount() {
        axios(
            {
                method: 'GET',
                url: 'https://final-product1.herokuapp.com/city/getcitylist',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ location: response.data })).catch()
        axios(
            {
                method: 'GET',
                url: 'https://final-product1.herokuapp.com/meals/getAllmeals',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ mealType: response.data })).catch()
    }

    render() {
        const { location, mealType } = this.state;
        return (<div className="app">
            <Wallpaper locationValues={location} />
            <QuickSearch quicksearch={mealType} />
        </div>);
    }
}

export default Home;
