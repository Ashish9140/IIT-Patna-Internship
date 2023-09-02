import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Publication = ({ load, handleLoader }) => {
    return (
        (load) ? <Loader /> :
            <section className="section list">
                <div className="container">
                    <ul>
                        <b><b>Publication</b></b>
                        <li>

                            Book : <br /> S. Bandyopadhyay and S. Saha, “Unsupervised Classification: Similarity Measures, <br /> Classical and Metaheuristic Approaches, and Applications”, 2012 ( published in 2012).
                        </li>
                        <li>
                            <Link to="/publication/journals" onClick={handleLoader} style={{ textDecoration: "underline" }}>Journals</Link>
                        </li>
                        <li>
                            <Link to="/publication/conference" onClick={handleLoader} style={{ textDecoration: "underline" }}>Conference Publications</Link>
                        </li>
                    </ul>
                </div>
            </section>
    )
}

export default Publication