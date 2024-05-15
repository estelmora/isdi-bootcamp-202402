import React from 'react'
import { logger } from '../utils'

import CancelButton from './library/CancelButton'
import AcceptButton from './library/AcceptButton'

function Confirm({ message, onAcceptClick, onCancelClick }) {
    logger.debug('Confirm → render')

    return (
        <div className="p-4 mb-4 border rounded bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">{message}</h3>
            <div className="flex justify-end space-x-4">
                <CancelButton onClick={onCancelClick}>Cancel</CancelButton>
                <AcceptButton onClick={onAcceptClick}>Accept</AcceptButton>
            </div>
        </div>
    )
}

export default Confirm
