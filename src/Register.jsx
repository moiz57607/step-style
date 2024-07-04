import React, { useState } from 'react';

const Register = () => {
    const [state, upstate] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handelit = (e) => {
        upstate({ ...state, [e.target.name]: e.target.value });
    };

    const handelsubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch('http://127.0.0.1:8000/product/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state), // Convert state to JSON string
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Data:', data);
            // Handle success, such as redirecting to another page or displaying a success message
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // Handle error, such as displaying an error message to the user
        }
    };

    return (
        <form className="w-75 fs-4" onSubmit={handelsubmit}>
            <div>
                Register
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="username"
                            value={state.username}
                            onChange={handelit}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={state.password}
                            onChange={handelit}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={state.email}
                            onChange={handelit}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Register;
