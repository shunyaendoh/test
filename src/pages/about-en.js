import React from 'react'
import Helmet from 'react-helmet'

import { Card } from 'react-bootstrap'
import Layout from '../components/layout-en'

import thumb01 from '../assets/images/thumbs/kinder.jpg'
import thumb02 from '../assets/images/thumbs/elementary.jpg'
import thumb03 from '../assets/images/thumbs/junior_high.jpg'
import thumb04 from '../assets/images/thumbs/high.jpg'
import thumb05 from '../assets/images/thumbs/university.jpg'


class ABOUTEn extends React.Component {

    render() {
        const siteTitle = "ShunyaEndoh - ABOUT"
        const siteDescription = "This is About me!"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                <section id="one">
                        <header className="major">
                            <h2>
                                Hi, There. This is Shunya Endoh.
                            </h2>
                        </header>
                        <p>
                            I'm a 22-year-old Japanese. From Tokyo-Japan.<br /> My interests are mainly about programming.<br /> Now, I'm into Gatsby.js. That's why I created this web site.<br />Please see the details below.
                        </p>
                        <p>
                            Oops, You already clicked!
                        </p>
                        <ul className="actions">
                        </ul>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>
                                Life Events
                            </h2>
                        </header>
                        <div className="row">
                            <div className="col-12 card-center">
                                <Card border="success" style={{ width: '75%' }} className="text-center mx-auto">
                                    <Card.Header>Birth</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’97 12/15</Card.Title>
                                    <Card.Text>  
                                      Was born in Tokyo-Nishi Tokyo as a 3200g cheerful boy.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>kindergarten</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’01 4/1</Card.Title>
                                    <Card.Text>
                                      At that time, I seemed to be a gentle child and was often crying by his brothers. I was nominated as a center back by coach at the soccer club, will continue for 12 years.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb01} height="240" className="mt-0"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-5 card-left mr-4 d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb02} height="250" className="mt-4"/>
                                </div>
                            </div>
                            <div className="col-sm-6 card-right ml-4 ml-lg-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>Elementary</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’03 4/1</Card.Title>
                                    <Card.Text>
                                      Entered soccer club and selected for city selection. At school, I belonged to the personal computer club. And also I belonged to the Public Relations Committee and, was in charge of newspaper layout. Got to know programming when watching "Nico Nico Douga". I had a fun with creating alerts using Notepad app and making Sugoroku.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>Junior High</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’09 4/1</Card.Title>
                                    <Card.Text>
                                      I have a hard time gathering up my teammates. I made great achievement by being selected in Tokyo selection. I forgot about programming at this time, but it was originally an indoor, so I preferred an online game rather than a soccer game.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb03} height="250" className="mt-4"/>
                                </div>                    
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-5 card-left mr-4 d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb04} height="250" className="mt-4"/>
                                </div>
                            </div>
                            <div className="col-sm-6 card-right ml-4 ml-lg-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>High</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’12 4/1</Card.Title>
                                    <Card.Text>
                                        Join a party that creates a dance club with the desire to start something new and not good at for me. Even though there were nearly 60 members because the history of this association was short, club activities and even clubs could not be raised. As a result, we were able to practice the dance from day to day, as well as thoroughly closing the first button of the greeting and uniform, and as a result, we were able to give it to the club.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>University</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’15 4/1</Card.Title>
                                  <Card.Text>
                                      Touch C language in the first year of university. I was really excited at the beginning, but the reality was like a math quiz. I think I learned important things such as Linux commands, programming tolerance, and algorithms thanks to the C language at that time. The club was a dance club and was a sub leader.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb05} height="250" className="mt-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-12 card-center">
                                <Card border="success" style={{ width: '75%' }} className="text-center mx-auto">
                                    <Card.Header>Current</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’19 8/5</Card.Title>
                                    <Card.Text>
                                        Leave university for a year and study engineer skills and English in Cebu.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default ABOUTEn