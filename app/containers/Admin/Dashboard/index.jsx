import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/containers/adminDashboardStyle.jsx";

//import {Doughnut} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';

import {pieChart} from "variables/charts.jsx";
import Timeline from "@material-ui/icons/Timeline";
//import {simpleBarChart} from "variables/charts.jsx";

// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

//import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Danger from "components/Typography/Danger.jsx";
import Warning from "@material-ui/icons/Warning";
//import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";

import ChartistGraph from "react-chartist";

class Dashboard extends React.Component {
    state = {
        
    }

    render() {
        const { classes } = this.props;
        
        const chartExample1 = {
            data: {
              labels: [1, 2],
              datasets: [
                {
                  label: "Emails",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#00c09d", "#e2e2e2"],
                  borderWidth: 0,
                  data: [60, 40]
                }
              ]
            },
            options: {
              cutoutPercentage: 70,
              legend: {
                display: false
              },
          
              tooltips: {
                backgroundColor: "#f5f5f5",
                titleFontColor: "#333",
                bodyFontColor: "#666",
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
          
              scales: {
                yAxes: [
                  {
                    display: 0,
                    ticks: {
                      display: false
                    },
                    gridLines: {
                      drawBorder: false,
                      zeroLineColor: "transparent",
                      color: "rgba(255,255,255,0.05)"
                    }
                  }
                ],
          
                xAxes: [
                  {
                    display: 0,
                    barPercentage: 1.6,
                    gridLines: {
                      drawBorder: false,
                      color: "rgba(255,255,255,0.1)",
                      zeroLineColor: "transparent"
                    },
                    ticks: {
                      display: false
                    }
                  }
                ]
              }
            }
          };

          const chartExample2 = {
            data: {
              labels: [1, 2],
              datasets: [
                {
                  label: "Emails",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["#fdb850", "#e2e2e2"],
                  borderWidth: 0,
                  data: [35, 75]
                }
              ]
            },
            options: {
              cutoutPercentage: 70,
              legend: {
                display: false
              },
          
              tooltips: {
                backgroundColor: "#f5f5f5",
                titleFontColor: "#333",
                bodyFontColor: "#666",
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
          
              scales: {
                yAxes: [
                  {
                    display: 0,
                    ticks: {
                      display: false
                    },
                    gridLines: {
                      drawBorder: false,
                      zeroLineColor: "transparent",
                      color: "rgba(255,255,255,0.05)"
                    }
                  }
                ],
          
                xAxes: [
                  {
                    display: 0,
                    barPercentage: 1.6,
                    gridLines: {
                      drawBorder: false,
                      color: "rgba(255,255,255,0.1)",
                      zeroLineColor: "transparent"
                    },
                    ticks: {
                      display: false
                    }
                  }
                ]
              }
            }
          };

        return (
            <div>
                <h1> Welcome to FMS Dashboard !</h1>

                <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            
                            <p className={classes.cardCategory}>Sat-O-Meter</p>
                            <h3 className={classes.cardTitle}>
                            68%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample1.data}
                          options={chartExample1.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                858 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem> 

                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            <p className={classes.cardCategory}>Referral</p>
                            <h3 className={classes.cardTitle}>
                            65%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample1.data}
                          options={chartExample1.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                858 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            <p className={classes.cardCategory}>Loyalty</p>
                            <h3 className={classes.cardTitle}>
                            34%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample2.data}
                          options={chartExample2.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                858 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem>            
                          
                </GridContainer>

                <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            
                            <p className={classes.cardCategory}>Sat-O-Meter</p>
                            <h3 className={classes.cardTitle}>
                            34%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample2.data}
                          options={chartExample2.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                545 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem> 

                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            <p className={classes.cardCategory}>Referral</p>
                            <h3 className={classes.cardTitle}>
                            64%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample1.data}
                          options={chartExample2.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                845 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                        <CardHeader color="warning" stats icon>
                            <p className={classes.cardCategory}>Loyalty</p>
                            <h3 className={classes.cardTitle}>
                            34%
                            </h3>
                        </CardHeader>
                        <CardBody>
                        <Pie
                          data={chartExample2.data}
                          options={chartExample2.options}
                          height={90}
                        />
                        </CardBody>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                524 Responses
                            </a>
                            </div>
                        </CardFooter>
                        </Card>
                </GridItem>            
                          
                </GridContainer>                     

                <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={3}>
                        <Card>
                            <CardHeader>
                                <h4 className={classes.cardIconTitle}>Qualitative Feedback</h4>
                            </CardHeader>
                            <CardBody>
                                <ChartistGraph
                                data={pieChart.data}
                                type="Pie"
                                options={pieChart.options}
                                width={5}/>
                            </CardBody>
                        </Card>
                    </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                            <ThumbUp />
                            </CardIcon>
                            <p className={classes.cardCategory}>Compliements</p>
                            <h3 className={classes.cardTitle}>24</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <DateRange />
                            20% of 124
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                            <ThumbDown />
                            </CardIcon>
                            <p className={classes.cardCategory}>Complaints</p>
                            <h3 className={classes.cardTitle}>50</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <LocalOffer />
                            40% of 124
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                            <Timeline />
                            </CardIcon>
                            <p className={classes.cardCategory}>Suggestions</p>
                            <h3 className={classes.cardTitle}>50</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <Update />
                            40% of 124
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
        </GridContainer>

                < HorizontalBar
                data = {{
                labels: ["Value for Money", "Language Barrier", "Functioning of AC", "Overall Satisfaction", "Time Taken To See the Consultant" ,"Meeting Specific Requirement" ,"Courtesy and Compassion of the Nursing Staff", ""],
                datasets: [{
                label: "Top 10 Complaints",
                backgroundColor: [
                    'rgba(253,156,23)',
                    'rgba(253,156,23)',
                    'rgba(253,156,23)',
                    'rgba(253,156,23)',
                    'rgba(253,156,23)',
                    'rgba(253,156,23)',
                    'rgba(253,156,23)'],
                borderColor: 'rgba(100, 99, 132,0.3)',
                data: [60,33,25,20,16,10,6]
                 }]
            }}  
                width={75}
                height={15}
                />
        <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [75, 10, 5, 5, 5]
                            }]
                        }} 
                    />
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [75, 10, 5, 5, 5]
                            }]
                        }} 
                    />
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [75, 10, 5, 5, 5]
                            }]
                        }} 
                    />
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [50, 25, 10, 10, 5]
                            }]
                        }} 
                    />
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [40, 35, 10, 10, 5]
                            }]
                        }} 
                    />
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    < Pie 
                        data = {{
                        labels: ["Excellent", "Very Good", "Good","Far", "Poor"],
                            datasets: [{
                            label: "AIFS",
                            backgroundColor: [
                                'rgba(78,189,242,1.2)',
                                'rgba(183,220,29,1.2)',
                                'rgba(253,184,80,1.2)',
                                'rgba(252,89,118,1.2)',
                                'rgba(228,148,235,1.2)'],
                            borderColor: 'rgba(100, 99, 132,0.3)',
                            data: [45, 30, 10, 10, 5]
                            }]
                        }}
                    />
                </GridItem>
            </GridContainer>

			</div>

        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
