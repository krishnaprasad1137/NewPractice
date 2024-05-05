import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Abount from './About';
import About from './About';
import Task from './Task';
import TaskTwo from './TaskTwo';
// import Barchart from './Barchart';
import NewBarchart from './NewBarchart';
import ClassCategoryPractice from './ClassCategortPractice';
import ClassComponentLifeCycle from './ClassComponentLifeCycle';
import CauseOfAccidents from './CauseOfAccidents';
import AgeGroupsChart from './AgeGroupsChart';
import Accidents_Incidents from './Accidents_Incidents';
import PoliceStationNames from './PoliceStationNames';
import ClassComponentLufe from './ClassComponentLife';
import ApiIntegrationNew from './ApiIntegrationNew';
import Habits from './Habits';
import HabitsNew from './HabitsNew';
import Products from './Products';
// import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Products />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
