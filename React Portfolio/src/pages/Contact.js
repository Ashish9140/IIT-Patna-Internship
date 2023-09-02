import Loader from '../components/Loader'

const Contact = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="section list">
                <div className="container">
                    <ul>
                        <b><b>Contact</b></b>
                        <li>Dr. Sriparna Saha
                            Associate Professor
                            Department of Computer Science and Engineering <br />
                            Indian Institute of Technology Patna
                            Bihta, Patna -801103 (Bihar) <br />
                            E-mail: sriparna@iitp.ac.in/sriparna.saha@gmail.com <br />
                            Tel : +91-612-302 8128</li>
                        <li>Linkedin : <a href="https://www.linkedin.com/in/sriparna-saha-1a1338161/?originalSubdomain=in" target="_blank">Linkedin</a> </li>
                        <li>Google Scholar : <a href="https://scholar.google.co.in/citations?user=Fj7jA_AAAAAJ&hl=en" target="_blank">Google Scholara</a> </li>
                        <li>IIT Patna Home page : <a href="http://www.iitp.ac.in/~sriparna" target="_blank">http://www.iitp.ac.in/~sriparna</a> </li>
                    </ul>
                </div>
            </section>
    )
}

export default Contact