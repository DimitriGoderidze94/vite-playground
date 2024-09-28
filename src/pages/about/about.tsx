
import style from './about.module.scss'

const About = () => {
    return (
        <div className={style.about}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-1">
                    <div className="border solid">01</div>
                    <div className="border solid">01</div>
                    <div className="border solid">02</div>
                    <div className="border solid">03</div>
                    <div className="border solid">04</div>
                    <div className="border solid">05</div>
                    <div className="border solid">06</div>
                    <div className="border solid">07</div>
                    <div className="border solid">08</div>
                    <div className="border solid">10</div>
                    <div className="border solid">11</div>
                    <div className="border solid">12</div>
                    <div className="border solid">13</div>
                    <div className="border solid">14</div>
                </div>
            </div>
        </div>
    );
};

export default About;