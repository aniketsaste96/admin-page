import React from 'react'
import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Featuredinfo() {
    return (
        <div className="featured"> 
        <div className="featuredItem">
            <span className="featureTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,686</span>
                <span className="featuredMoney">-$11<ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,686</span>
                <span className="featuredMoneyRate">-$7<ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$42,686</span>
                <span className="featuredMoneyRate">+$80<ArrowUpwardIcon className="featuredIcon "/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$42,686</span>
                <span className="featuredMoneyRate">+$80<ArrowUpwardIcon className="featuredIcon "/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
            
        </div>
    )
}
