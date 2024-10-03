
import style from './about.module.scss';
import { Button } from '../../components';

const About = () => {
    return (
        <div className={style.about}>
            <Button className={'primary'} text='get data' />
        </div>
    );
};

export default About;