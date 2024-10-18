import React from 'react';
import { useOutsideClick } from '../../costum-hooks';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const modalRef = useOutsideClick(onClose, isOpen);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                ref={modalRef}
                className={`bg-blue-100 rounded-lg shadow-lg w-1/3 p-6 transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-75'
                    }`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        className=" bg-blue-200 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
