import React from 'react'
import { logger } from '../utils'

import AcceptButton from './library/AcceptButton'

function Feedback({ message, level, onAcceptClick }) {
    logger.debug('Feedback → render')

    if (['warn', 'error'].includes(level)) {
        logger[level](message)
    }

    return (
        <div className="p-4 mb-4 border rounded bg-white shadow-md">
            <h3 className={`text-lg font-semibold ${level === 'error' ? 'text-red-500' : 'text-yellow-500'}`}>
                {message}
            </h3>
            <AcceptButton onClick={onAcceptClick}>
                Accept
            </AcceptButton>
        </div>
    )
}

export default Feedback
