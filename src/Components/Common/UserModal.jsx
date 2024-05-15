import React from 'react'

function UserModal({ config }) {
    return (
        <div>
            <div className='fixed top-0 opacity-85 w-full h-full z-50 bg-loginColor flex justify-center items-center'>
                <div className='min-h-[150px] min-w-[20rem] bg-white opacity-100 z-50'>

                    <div>
                        <p>Login</p>
                        <input type="text" />
                        <button></button>
                        <p>or</p>
                        <button></button>
                        <button></button>
                    </div>

                </div>
            </div>
 

        </div>
    )
}

export default UserModal