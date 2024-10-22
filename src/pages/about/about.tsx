import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import style from './about.module.scss';
import { Button, Modal } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../../state';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const amount = useSelector((state: State) => state.bank)

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

    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

    const [chooseAmount, setChooseAmount] = useState(1);

    return (
        <div className={style.about}>
            <h1>current amount: {amount}</h1>
            <div className="flex items-center justify-center gap-4 mb-4">
                <input type="number" value={chooseAmount} onChange={(e) => setChooseAmount(Number(e.target.value))} />
                <Button className={'primary'} text='Deposit' onClick={() => depositMoney(chooseAmount)} />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
                <input type="number" value={chooseAmount} onChange={(e) => setChooseAmount(Number(e.target.value))} />
                <Button className={'primary'} text='Withdraw' onClick={() => withdrawMoney(chooseAmount)} />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
                <Button className={'primary'} text='Bankrupt' onClick={() => bankrupt()} />
                <Toaster position="top-right" reverseOrder={false} />
                <Button className={'primary'} text='Get Data' onClick={openModal} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
                <p>This is the modal content!</p>
            </Modal>
        </div>
    );
};

export default About;
