import React from 'react'
import insurancePlans from '../db.json'
import InsurancePlan from './InsurancePlan'

const InsurancePlans = () => {
    return (
        <div className="container border" >

            <div className="row titleContainer">
                <center>Insurance Packages</center>
            </div>
            <div className="row border">
                <div className="col-md-2 border">#</div>
                <div className="col-md-2 border">Insurer Name</div>
                <div className="col-md-4 border">Description</div>
                <div className="col-md-2 border">Price / month</div>
                <div className="col-md-2 border"></div>
            </div>

            {
                insurancePlans.map((insurancePlan) => (
                    <InsurancePlan key={insurancePlan.id} insurancePlan={insurancePlan} />
                ))
            }

        </div>
    )
}

export default InsurancePlans