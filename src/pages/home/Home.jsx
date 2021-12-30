import Chart from '../../components/charts/Chart'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import'./home.css'
import {UserData} from '../../dummyData.js'

export default function Home() {
    return (
        <div className="home">
           
            <Featuredinfo/>
            <Chart data ={UserData} title="Active Users Analytics" grid dataKey="Users"/>
            <div className="homeWidgets"></div>
        </div>
    )
}
