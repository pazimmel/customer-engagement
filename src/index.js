import "babel-polyfill";
import React from 'react';
import {ReactDom, render} from 'react-dom';

window.React = React;

const app = document.getElementById('app');
import CustomerEngagementContainer from './components/CustomerEngagementContainer.js'

render(
    <CustomerEngagementContainer/>, app
);