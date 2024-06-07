// src/App.js
import React, { useState } from 'react';

import EmployeeForm from './Employeeform';
import './App.css';


const App = () =>{
    return (
        <div>
            
            <div className="content">
                <EmployeeForm />
                
            </div>
        </div>
    );
};

export default App;
