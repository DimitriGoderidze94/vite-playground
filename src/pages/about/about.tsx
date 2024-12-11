import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import style from './about.module.scss';
// import { Button, Modal } from '../../components';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from '@reduxjs/toolkit';
// import { actionCreators, State } from '../../state';
import { useQuery, gql } from '@apollo/client';


const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`;


const About = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const amount = useSelector((state: State) => state.bank)

    // const openModal = () => {
    //     setIsModalOpen(true);
    //     toast.success('Data loaded successfully!', {
    //         className: 'font-bold rounded-lg p-4 shadow-lg',
    //         duration: 4000,
    //         iconTheme: {
    //             primary: '#4ade80',
    //             secondary: '#fff',
    //         },
    //     });
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    // const dispatch = useDispatch();

    // const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

    // const [chooseDepositAmount, setDepositChooseAmount] = useState<number | ''>(1);
    // const [chooseWithdrawAmount, setWithdrawChooseAmount] = useState<number | ''>(1);

    const something = useQuery(GET_CHARACTERS);

    return (
        <div className={style.about}>
            {/* <div className={style['amount-holder']}>
                <span className={style.bank}>Bank</span>
                <span className={style.amount}>{amount}</span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
                <input className='bg-blue-200' value={chooseDepositAmount}
                    onChange={(e) => {
                        const value = e.target.value;
                        const numericValue = Number(value);
                        setDepositChooseAmount(numericValue || '');
                    }} />
                <Button className={'primary'} text='Deposit' onClick={() => depositMoney(chooseDepositAmount || 0)} />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
                <input className='bg-blue-200' value={chooseWithdrawAmount}
                    onChange={(e) => {
                        const value = e.target.value;
                        const numericValue = Number(value);
                        setWithdrawChooseAmount(numericValue || '');
                    }} />
                <Button className={'primary'} text='Withdraw' onClick={() => withdrawMoney(chooseWithdrawAmount || 0)} />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
                <Button className={'primary'} text='Bankrupt' onClick={() => bankrupt()} />
                <Toaster position="top-right" reverseOrder={false} />
                <Button className={'primary'} text='Get Data' onClick={openModal} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
                <p>current amount: {amount}</p>
            </Modal> */}
        </div>
    );
};

export default About;
