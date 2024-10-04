
import { useState } from 'react';
import style from './about.module.scss';
import { Button, Modal } from '../../components';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={style.about}>
            <Button className={'primary'} text='get data' onClick={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
                <p>This is the modal content!</p>
            </Modal>
        </div>
    );
};

export default About;