import './CustomerEngagement.less'
import CustomerEngageMentComponent from './CustomerEngagementComponent.js'
import {PropTypes, Component} from 'react';
import axios from 'axios';

export default class CustomerEngagementContainer extends Component {
    constructor(props) {
        super(props);
        this.getYahooWeather = this.getYahooWeather.bind(this);

        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        this.getYahooWeather();
    }
    getYahooWeather() {
        this.setState({isLoading: true});
        const yahooWeatherUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minneapolis%2C%20mn%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        axios.get(yahooWeatherUrl)
            .then(response => {
                this.setState({forecast: response.data.query.results.channel});
            })
            .catch(error => {
            });
    }

    render() {
        return (
            <div>
                <div className="page page--Customer-Engagement-App" id="Customer-Engagement-App">
                    <h2 className="page__header">Customer Engagement App</h2>
                    <div className="box box--Customer-Engagement-App">
                        <div className="box box--inner">
                            <p id="pageDesc">This page displays the best way to engage your customers over the 10 days in Minneapolis, MN.</p>
                        </div>

                        <CustomerEngageMentComponent
                            getYahooWeather={this.getYahooWeather}
                            forecast={this.state.forecast}
                        />
                    </div>
                </div>
            </div>
        )
    }
}