import React from 'react';
import './CustomerEngagement.less';
import {Proptypes} from 'react';
import DayComponent from './DayComponent';


function createActionList(forecast) {
    let action="text";
    if (forecast.length > 0) {
        return forecast.map((item,index) => {
            const tempHigh = parseInt(item.item.forecast.high);
            const weather = item.item.forecast.text;
            if(tempHigh > 75 && weather.toUpperCase() ==="SUNNY") {
                action="text"
            } else if(tempHigh < 75 && tempHigh > 55) {
                action="email"
            } else if(tempHigh < 55 || weather.toUpperCase().includes("RAIN")) {
                action="phone"
            }
            return <DayComponent date={item.item.forecast.date} day={item.item.forecast.day} action={action} index={index}/>
        });
    } else {
        return (
            <div>
                You have not yet generated a list. To generate a list, click the Update Engagement Data button.
            </div>
        )
    }

}
const CustomerEngagementComponent = ({getYahooWeather, forecast}) => {
    return (
        <div className="contents">
            <div className="container">
                <button className="button" onClick={() => { getYahooWeather()}}>Update Engagement Data</button>
                {createActionList(forecast)}
            </div>
        </div>

    )
};

export default CustomerEngagementComponent;