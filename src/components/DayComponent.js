import React from 'react';
import './CustomerEngagement.less';

const DayComponent = ({date, day, action, index}) => {
    return (
        <div id={`day-component-${index}`} className="box box--inner day-component">
            <p className="day-text">{day} {date}</p>
            <p>The best way to contact the customer will be via {action}.</p>
        </div>
    )
};

export default DayComponent;