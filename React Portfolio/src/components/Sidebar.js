import { Link } from "react-router-dom";

const Sidebar = ({ handleLoader }) => {

    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    const handleClick = (element) => {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        handleActive();
        element.classList.add("active");
    }

    // Aside


    const handleActive = () => {
        const nav = document.querySelector(".nav");
        const navList = nav.querySelectorAll("li");
        const totalNavList = navList.length;
        for (let i = 0; i < totalNavList; i++) {
            if (navList[i].querySelector("a").classList.contains("active")) {
                navList[i].querySelector("a").classList.remove("active");
            }
        }
    }

    const handleMode = () => {
        const dayNight = document.querySelector(".day-night");
        dayNight.querySelector('i').classList.toggle("fa-sun");
        dayNight.querySelector('i').classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    }


    return (
        <>
            <div className="aside">
                <div className="nav-toggler" onClick={handleClick}>
                    <span> </span>
                </div>
                <ul className="nav">
                    <li><Link to="/" className="active" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa fa-home"></i>Home</Link></li>
                    <li><Link to="/about" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa fa-user"></i>About</Link></li>
                    <li><Link to="/gallery" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i class="fa-regular fa-images"></i>Gallery</Link></li>
                    <li><Link to="/awards" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-award"></i>Awards</Link></li>
                    <li><Link to="/research" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-brands fa-researchgate"></i>Reseach</Link></li>
                    <li><Link to="/positions" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-hat-cowboy-side"></i>Positions</Link></li>
                    <li><Link to="/projects" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-diagram-project"></i>Projects</Link></li>
                    <li><Link to="/academic" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-sleigh"></i>Academic</Link></li>
                    <li><Link to="/publication" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-book-atlas"></i>Publications</Link></li>
                    <li><Link to="/talks" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-walkie-talkie"></i>Invited Talks</Link></li>
                    <li><Link to="/contact" onClick={(e) => { handleLoader(); handleClick(e.target) }}><i className="fa-solid fa-file-contract"></i>Contact</Link></li>
                </ul>
            </div >
            <div className="day-night s-icon" onClick={handleMode}>
                <i className="fas fa-moon"></i>
            </div>
        </>
    )
}

export default Sidebar