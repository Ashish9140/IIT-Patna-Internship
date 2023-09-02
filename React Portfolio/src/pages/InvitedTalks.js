import Loader from '../components/Loader'
const InvitedTalks = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="section list">
                <div className="container">
                    <ul>
                        <b><b>Invited Talks</b></b>
                        <li> Talk on "Multi-view Clustering Techniques" at Kyoto University, Japan on July 4, 2018.
                        </li>
                        <li> Resource person of FDP on "Machine Learning and Applications" at ABV-IIITM Gwalior
                            March 26-30, 2018.</li>
                        <li> Delivered talk on "Big Data and Analytics" at Bihar Industries Association, Patna on
                            February 15, 2018.</li>
                        <li> Delivered talk on "Application of Multi-objective Optimization in Bioinformatics" at
                            Max Health Care, New Delhi on January 19, 2018.</li>
                        <li> Delivered key-note speech in the "Symposium on Clustering and Text-mining" held at
                            UPES Dehradun on December 21, 2017.</li>

                        <li> Talk on "eHealth" at Department of Statistics, Patna University on 30th October, 2017.</li>
                        <li> Talk on "Clustering Algorithms" at Netaji Subhas Institute of Technology, Bihta, Patna
                            on 19th September, 2017.</li>
                        <li> Talk on "Multiobjective Multi-view Clustering" at Department of Informatics, University of Mainz, Germany on June 28, 2017.
                        </li>
                        <li>         Invited talk "Multiobjective Based Approaches for Solving Clustering Problem: Application to Search Result Clustering" at University of Darmstadt, Germany on June 15, 2016.
                        </li>
                        <li> Talk on "Multiobjective Semi-supervised Clustering" at Department of Informatics, University of Mainz, Germany on May 10, 2016.
                        </li>
                        <li> Invited speaker for AICTE Sponsored Faculty Development Programme on "Image and Data Security" held at Government College of Engineering and Textile Technology, Berhampore, West Bengal on February 20, 2017.
                        </li>
                        <li> Invited speaker of short-term course on "Data Structures and Algorithms" at NIT Patna, December 19-20, 2015 (2 days).
                        </li>
                        <li> Invited speaker of IEI National Convention of Computer Engineers, held at Sona College of Technology, Salem, Tamilnadu, February 18, 2016.
                        </li>
                        <li>
                            Tutorial speaker on "Natural Language Processing" at International Conference at University of Allahabad (IAC3T-2016), March 25, 2016.
                        </li>
                        <li>
                            Invited speaker of 1st International Conference on Recent and Emerging Trends in Computer Science and Computational Sciences (RETCOMP) to be held on January 11-13, 2013, PES College of Engineering, Bangalore.
                        </ li>
                    </ul>
                </div>
            </section>
    )
}

export default InvitedTalks