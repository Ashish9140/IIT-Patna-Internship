import Loader from '../components/Loader'

const Research = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="awards section list">
                <div className="container">
                    <ul>
                        <b><b>Research Areas</b></b>
                        <li>Machine Learning</li>
                        <li>Text Mining</li>
                        <li>Pattern Recognition</li>
                        <li>Multiobjective Optimization</li>
                        <li>Bio-Text Mining</li>
                        <li>Bioinformatics</li>
                        <li>Soft Computing </li>
                    </ul>

                    <br />

                    <ul>
                        <b><b>Membership to Different Professional Bodies </b></b>
                        <li>
                            Senior Member, Institute of Electrical and Electronics Engineers (IEEE), Membership id: 92981362. </li>
                        <li>ife membership (no. L-177) to Indian Unit for Pattern Recognition and Artificial Intelligence (IUPRAI).</li>
                        <li>Core Committee Member of Bioclues Organization (An affiliate of International Society for Computational Biology and Asia-Pacific Bioinformatics Network).</li>
                        <li>Member, The Association of Computer, Electronics and Electrical Engineers (ACEEE), Membership id: 7000077.</li >
                        <li>ember, Association for Computing Machinery, Membership id: 0058815.</li >
                        <li>Member, International Association of Computer Science and Information Technology (IACSIT), Senior Membership id: 80350477.</li >
                        <li>Member, International Association of Engineers (IAENG), Menbership id:153510.</li >
                    </ul>

                </div >
            </section >
    )
}

export default Research