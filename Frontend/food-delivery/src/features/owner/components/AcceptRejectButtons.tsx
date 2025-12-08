import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
    onAccept: () => void;
    onReject: () => void;
}

const AcceptRejectButtons: React.FC<Props> = ({ onAccept, onReject }) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={onAccept}
                className="flex items-center justify-center p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                title="Nhận đơn"
            >
                <CheckIcon className="w-5 h-5" />
                <span className="ml-1 text-sm font-bold">Nhận</span>
            </button>
            <button
                onClick={onReject}
                className="flex items-center justify-center p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                title="Từ chối"
            >
                <XMarkIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default AcceptRejectButtons;