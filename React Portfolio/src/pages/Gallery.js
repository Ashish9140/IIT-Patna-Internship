import Loader from '../components/Loader'

const Gallery = ({ load }) => {
    return (
        (load) ? <Loader /> :
            <section className="section list">
                <div className="container">
                    <b><b>Gallery</b></b>
                    <main>
                        <div class="grid-container">
                            <div class="column">
                                <img src="/images/p1.jpeg" />
                                <img src="/images/p2.jpeg" />
                                <img src="/images/p3.jpeg" />
                            </div>

                            <div class="column">
                                <img src="/images/p10.jpeg" />
                                <img src="/images/p5.jpeg" />
                                <img src="/images/p6.jpeg" />
                                <img src="/images/p7.jpeg" />
                            </div>

                            <div class="column">
                                <img src="/images/p4.jpeg" />
                                <img src="/images/p8.jpeg" />
                                <img src="/images/sriparna.jpg" />
                            </div>
                        </div>
                    </main>
                </div>
            </section>
    )
}

export default Gallery