import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const UserInfo = (props) => {

    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const history = useHistory();
    const insurancePlan = props.location.state;

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        //showing error on invalid form submission
        if (!email || !age || !gender) {
            setIsFormValid(false);
        }
        else {
            try {

                //sending data to example.com
                const res = await fetch('http://example.com',
                    {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({ email, age, gender, insurancePlan })
                    });

            }
            catch (err) {
                console.log(err);
            }

            console.log(insurancePlan);

            //showing success alert and disabling fail alert
            setIsFormValid(true);
            setIsFormSubmitted(true);

            //redirecting to main page after fprm submission
            setTimeout(() => {
                history.push(`/`)
            }, 3000);
        }

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row titleContainer">
                    <center>User Info</center>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" id="inputEmail" placeholder="Email"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Age:
                    </label>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="form-control" id="inputAge" placeholder="Age"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Gender:
                    </label>
                    <input
                        type="text"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        className="form-control" id="inputGender" placeholder="Gender"
                    />
                </div>
                <div className="row"><input className="btn btn-primary" type="submit" value="Submit" /></div>
            </form>
            
            <div className="mb-3"></div>

            {isFormSubmitted && (
                <div className="alert alert-success alert-dismissible fade show">
                    <strong>Success!</strong> Your plan has been purchased!
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                </div>
            )}


            {!isFormValid && (
                <div className="alert alert-danger alert-dismissible fade show">
                    <strong>Invalid Form!</strong> Please enter all the data.
                </div>
            )}
        </div>

    )
}

export default UserInfo