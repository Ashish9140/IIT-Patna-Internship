import React from 'react'
import Loader from '../components/Loader'

const Administrative = ({ load, handleLoader }) => {
    return (

        (load) ? <Loader /> :

            <section className="section list">
                <div className="container">

                    <ul>
                        <b><b>Subjects Taught</b></b>
                        <li> Machine Learning (Theory for B.Tech, M.Tech and PhD students ) </li>
                        <li> Database and Data Mining (Theory for M.Tech) </li>

                        <li>
                            Operating Systems (Theory and Lab; B.Tech course)
                        </li>

                        <li>
                            Introduction to Computing (Theory and Lab; B.Tech course)
                        </li>

                        <li>
                            Artificial Intelligence (Theory; B.Tech course)
                        </li>

                        <li>
                            Pattern Recognition (M.Tech and B.Tech elective)
                        </li>
                        <li> Advanced Machine Learning (B.Tech, M.Tech, PhD elective)
                        </li>
                        <li> Digital Design </li>
                    </ul>

                    <br />

                    <ul>
                        <b><b>Administrative Activities</b></b>
                        <li> Branch Councilor, IEEE student branch, Indian Institute of Technology Patna since August 2017.</li>
                        <li> Department Academic Program Committee Secretary since August 2017 </li>

                        <li> Visvesvaraya Nodal Officer of IIT Patna since March, 2016.</li>
                        <li>
                            Senate Member of Indian Institute of Technology Patna 2012-2015.
                        </li>

                        <li>
                            Associate Hostel warden of IIT Patna Girls’ Hostel from January, 2012-December, 2012.
                        </li>

                        <li>
                            Center Supervisor of Indian Statistical Institute Selection Test at IIT Patna for the year 2013.
                        </li>

                        <li>
                            Member of the Convocation Committee of IIT Patna, 2012, 2013.
                        </li>

                        <li>
                            Guest house in-charge of IIT Patna from January 2013-May 2017.
                        </li>

                        <li>
                            Member of committee to frame a policy and prepare future plans regarding External peer reviews of IIT Patna.
                        </li>

                    </ul>

                </div >
            </section >
    )
}

export default Administrative