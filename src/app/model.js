// components/Modal.js
import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="relative w-1/2 max-w-2xl mx-auto my-6 p-4 bg-white rounded-lg">
            {/* Modal content */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Modal Title</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Close
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
