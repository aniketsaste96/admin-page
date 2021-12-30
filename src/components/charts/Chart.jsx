
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer,AreaChart,Area } from 'recharts';
import { PieChart, Pie, Sector, Cell,  } from 'recharts';


export default function Chart({title,data,dataKey,grid}) {

    
    return (
        
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
          
        
                <LineChart data={data}>
                    
                <XAxis dataKey="name" stroke="#5550bd"/>
                <YAxis dataKey= "Users" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" activeDot={{ r: 8 }} strokeWidth={2}></Line>
                <Tooltip/>
                {/* <Legend/> */}
               {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
               
                </LineChart>             
      
            </ResponsiveContainer>
        </div>
        
        
    )
}
