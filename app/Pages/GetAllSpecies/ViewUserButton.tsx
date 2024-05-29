'use client'
import React from 'react'

interface viewUserButtonProps {
    id: string, 
}

const viewUserButton: React.FC<viewUserButtonProps> = ({id}) => {
    const HandleClick = () => {
        alert(`user id adalah: ${id}`) 
    }

    return (
        <div>
            <button onClick={HandleClick}>Lihat User</button>
        </div>
    )
}

export default viewUserButton
