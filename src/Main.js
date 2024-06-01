import './App.css';
import photo from './photo.png'; 


import React from 'react';

const Main = () => {
  return (
    <div className="main-panel">
      <img src={photo} alt="Panel Image" className="panel-image" />
      <table className="data-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nov</td>
            <td>17</td>
            <td>5:00PM</td>
            <td>Peter Smith</td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>18</td>
            <td>9:00AM</td>
            <td>Luckas Potter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
