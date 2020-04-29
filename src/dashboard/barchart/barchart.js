import React, { Component } from 'react';
// import {
//   XYPlot,
//   XAxis, // Shows the values on x axis
//   YAxis, // Shows the values on y axis
//   VerticalBarSeries,
//   LabelSeries
// } from 'react-vis';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {Bar} from 'react-chartjs-2';
import Linebar from '../barchart/linechart/linehart';
import Piechart from '../barchart/piechart/piechart';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


export default class barchart extends Component {
    render() {
      // const data = this.props.data;
      // const chartWidth =400 ;
      // const chartHeight = 400;
      // const chartDomain = [0, chartHeight];
        return (
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1r"}}>        
              <Grid container spacing={3}>              
                    {/* barchart method 1    */}
                        {/* <XYPlot 
                            xType="ordinal" 
                            width={chartWidth} 
                            height={chartHeight} 
                            yDomain={chartDomain}
                            >
                            <XAxis />
                            <YAxis />
                            <VerticalBarSeries
                                data={data}
                            />
                            <LabelSeries
                                data={data.map(obj => {
                                    return { ...obj, label: obj.y.toString() }
                                })}
                                labelAnchorX="middle"
                                labelAnchorY="text-after-edge"
                                />
                        </XYPlot> */}

                      {/* second method by chart.js  */}  

                      <div className="col-md-4">
                            <div className="card">
                              <div className="card-header card-header-danger" style={{padding: "1px", borderRadius:"1px"}}>
                              <Card  variant="outlined">            
                                  <Bar
                                    data={state}
                                    options={{
                                      title:{
                                        display:true,
                                        text:'Average Rainfall per month',
                                        fontSize:20
                                      },
                                      legend:{
                                        display:true,
                                        position:'right'
                                        }
                                     }}
                                  />
                              </Card> 
                    
                              </div>
                              <div className="card-body">
                                <h3>Bar Chart</h3>
                              </div>
                            </div>
                      </div>  

                      {/* line chart */}

                      <div className="col-md-4">
                            <div className="card">
                              <div className="card-header card-header-danger" style={{padding: "1px", borderRadius:"1px"}}>
                              <Card  variant="outlined">  
                                  <Linebar />
                              </Card>
                    
                              </div>
                              <div className="card-body">
                                <h3>Line Chart</h3>
                              </div>
                            </div>
                      </div>
                      
                      {/* pie chart */}
                      <div className="col-md-4">
                            <div className="card">
                              <div className="card-header card-header-danger" style={{padding: "1px", borderRadius:"1px"}}>
                                  <Card  variant="outlined">  
                                      <Piechart />
                                  </Card> 
                              </div>
                              <div className="card-body">
                                  <h3>Pie Chart</h3>
                              </div>
                            </div>
                      </div>
                </Grid>                                
          </div>
        );
            
        
    }
}
