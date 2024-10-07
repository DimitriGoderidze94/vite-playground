import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import style from './about.module.scss';
import { Button, Modal } from '../../components';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        toast.success('Data loaded successfully!', {
            className: 'font-bold rounded-lg p-4 shadow-lg',
            duration: 4000,
            iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
            },
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.about}>
            <Toaster position="top-right" reverseOrder={false} />
            <Button className={'primary'} text='Get Data' onClick={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
                <p>This is the modal content!</p>
            </Modal>
        </div>
    );
};

export default About;
