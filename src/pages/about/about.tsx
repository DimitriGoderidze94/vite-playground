
import style from './about.module.scss'

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style['col-6']}>
                        <div className={style.check}>
                            hi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;