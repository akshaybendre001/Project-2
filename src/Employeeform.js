
import React, { useState } from 'react';
import './Employeeform.css';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeEmail: '',
        firstName: '',
        lastName: '',
        departmentNumber: '',
        salary: '',
        contractor: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(name);  //event is triggered here
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem('employeeData', JSON.stringify(formData));
        alert('Employee data saved successfully!');
        clearForm();
    };

    const clearForm = () => {
        setFormData({
            employeeId: '',
            employeeEmail: '',
            firstName: '',
            lastName: '',
            departmentNumber: '',
            salary: '',
            contractor: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Employee Registration Form</h1>
            <fieldset>
                <legend>Employee Details</legend>
                <label htmlFor="employeeId">Employee ID</label>
                <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    placeholder="Enter ID here"
                /><br /><br />

                <label htmlFor="employeeEmail">Employee Email</label>
                <input
                    type="email"
                    id="employeeEmail"
                    name="employeeEmail"
                    value={formData.employeeEmail}
                    onChange={handleChange}
                    placeholder="@p99soft.com"
                /><br /><br />

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="departmentNumber">Department Number</label>
                <input
                    type="number"
                    id="departmentNumber"
                    name="departmentNumber"
                    value={formData.departmentNumber}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="salary">Salary</label>
                <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    maxLength="8"
                /><br /><br />

                <label htmlFor="contractor">Contractor</label>
                <input
                    type="checkbox"
                    id="contractor"
                    name="contractor"
                    checked={formData.contractor}
                    onChange={handleChange}
                /> Yes<br /><br />

                <div className="mydiv">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={clearForm}>Clear Form</button>
                </div>
            </fieldset>
        </form>
    );
};

export default EmployeeForm;
