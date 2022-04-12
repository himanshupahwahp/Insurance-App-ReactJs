import React from 'react'
import { Link } from "react-router-dom"

const InsurancePlan = ({ insurancePlan }) => {
    return (
        <div className="row border">
            <div className="col-md-2 border" >{insurancePlan.packageName}</div>
            <div className="col-md-2 border">{insurancePlan.insuranceName}</div>
            <div className="col-md-4 border">{insurancePlan.description}</div>
            <div className="col-md-2 border">{insurancePlan.price}</div>
            <div className="col-md-2 border">
                <Link to={{
                    pathname: "/userInfo",
                    state: insurancePlan
                }}>
                    <button type="button" className="btn btn-primary">Select</button></Link>
            </div>
        </div>
    )
}

export default InsurancePlan