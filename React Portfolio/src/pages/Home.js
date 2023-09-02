import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Home = ({ load, handleLoader }) => {
    return (
        (load) ? <Loader /> :
            <section className="home section active">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Myself <span className="name">Dr. Sriparna Saha</span></h3>
                            <p>I'm a Associate Professor at Indian Institute of Technology, Patna.
                            </p>
                            <Link to="/contact" className="btn hire-me" onClick={handleLoader}>Contact Me</Link>
                        </div>
                        <div className="home-img padd-15">
                            <img src="images/sriparna.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Home