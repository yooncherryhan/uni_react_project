import React from 'react'

const MessageData = ({ nam, ema, mes }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-1'>{nam}({ema})</div>
            <div>
                <p>{mes}</p>
            </div>
        </div>
    )
}
export default MessageData