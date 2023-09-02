import Loader from '../components/Loader'

const Position = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="awards section list">
                <div className="container">
                    <ul>
                        <b><b>Academic Positions</b></b>
                        <li> Served as Associate Dean Research and Development of Indian Institute of Technology Patna
                            from 10th April 2019--9th July 2021.</li>

                        <li> Serving as an Associate Professor in the Department of Computer Science and Engineering, IIT Patna, India  from July 24, 2018.</li>
                        <li>
                            Assistant Professor in the Department of Computer Science and Engineering,
                            IIT Patna, India from January 27th, 2011--July 23, 2018.
                        </li>
                        <li>Visiting Scientist of Department of Computer Science, University of California San Diego,
                            USA for the period December 2018-February 2019.
                        </li>
                        <li>Visiting Scientist of Department of Intelligent Science and Technology, Kyoto University,
                            Japan for the period June-July, 2018.</li>

                        <li> Visiting Scientist, University of Mainz, Germany as a recipient of Humboldt Research Fellowship for the periods April-September, 2016 and April-August, 2017. </li>
                        <li> Visiting Scientist, University of Caen, France as a recipient of CNRS fellowship for the periods October 2013, December 2013, May-July, 2014, May-June, 2015.
                        </li>
                        <li>
                            Postdoctoral research fellow in Department of Information Engineering and Computer Science, University of Trento, Italy from September, 2010 - January, 2011.
                        </li>
                        <li>
                            Post Doctoral Research Fellow, Image Processing and Modeling, Interdisciplinary Center for Scientific Computing (IWR),
                            University of Heidelberg, Germany from 1st September, 2009 to 30th June, 2010.
                        </li>
                        <li>
                            Senior Research Fellow, Indian Statistical Institute, Kolkata, India, from August 2007 to 31st August, 2009.
                        </li>
                        <li>
                            Junior Research Fellow, Indian Statistical Institute, Kolkata, India, from August 2005 to August 2007.
                        </li> </ul>

                    <br />

                    <ul><b><b>Academic Qualifications </b></b>
                        <li>Ph.D. thesis titled "Single and Multiobjective Approaches to Clustering with Point Symmetry" submitted to Indian Statistical Institute, Kolkata, India on 26th August, 2009; viva voce
                            examination held on January 21, 2011.
                            Supervisor: Prof. (Dr.) Sanghamitra Bandyopadhyay, Professor, Machine Intelligence Unit,
                            Indian Statistical Institute, Kolkata, India</li>
                        <li> Master of Technology in Computer Science, Indian Statistical Institute, Kolkata, India, 2005,
                            Ranked First with 87.42% marks.</li>
                        <li> Bachelor of Technology in Computer Science and Engineering from Kalyani Govt. Engineering
                            College, India, 2003, Ranked Third with 85.88% marks (1st class).</li>
                        <li> Passed Higher Secondary (10+2 level) Examination in 1999 with 89.0% marks.</li>
                        <li> Passed Madhyamik (10 level) Examination in 1997 with 90.5% marks. </li>
                    </ul>

                </div>
            </section>
    )
}

export default Position