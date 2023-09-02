import Loader from '../components/Loader'

const About = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="about section list">
                <div className="container">
                    <ul>
                        <b><b>About</b></b>
                        <li>I received the M.Tech and Ph.D. degrees in computer science from Indian Statistical Institute Kolkata, Kolkata, India, in 2005 and 2011, respectively.</li>
                        <li>I am currently an Associate Professor in the Department of Computer Science and Engineering, Indian Institute of Technology Patna, India.</li>
                        <li>I am the author of a book published by Springer-Verlag.</li>
                        <li>I have authored or coauthored more than 290 papers.</li>
                        <li>My current research interests include deep learning, natural language processing, machine learning, information extraction, text mining, bioinformatics and multiobjective optimization.</li>
                        <li>My h-index is 30 and total citation count of her papers is 5221 (according to Google scholar).</li>
                        <li>I am also a senior member of IEEE.</li>
                        <li>I am the recipient of the Lt Rashi Roy Memorial Gold Medal from the Indian Statistical Institute for outstanding performance in MTech (computer science).</li>
                        <li>I am the recipient of the Google India Women in Engineering Award, 2008, NASI YOUNG SCIENTIST PLATINUM JUBILEE AWARD 2016, BIRD Award 2016, IEI Young Engineers' Award 2016, SERB WOMEN IN EXCELLENCE AWARD 2018 and SERB Early Career Research Award 2018.</li>
                        <li>I am the recipient of DUO-India fellowship 2020, Humboldt Research Fellowship, Indo-U.S.</li>
                        <li>I am Fellowship for Women in STEMM (WISTEMM) Women Overseas Fellowship program 2018 and CNRS fellowship.</li>
                        <li>I had also received India4EU fellowship of the European Union to work as a Post-doctoral Research Fellow in the University of Trento, Italy from September 2010-January 2011.</li>
                        <li>I was also the recipient of Erasmus Mundus Mobility with Asia (EMMA) fellowship of the European Union to work as a Post-doctoral Research Fellow in the Heidelberg University, Germany from September 2009-June 2010.</li>
                        <li>I had visited University of Caen, France as a visiting scientist during the period October 2013, December 2013, May-July, 2014 and May-June, 2015; University of Mainz, Germany as a visiting scientist from April-September 2016, April-August 2017; University of Kyoto, Japan as a visiting professor from June-July 2018. She won the best paper awards in CLINICAL-NLP workshop of COLING 2016, IEEE-INDICON 2015, International Conference on Advances in Computing, Communications and Informatics (ICACCI 2012).</li>
                    </ul>
                </div>
            </section>
    )
}

export default About
