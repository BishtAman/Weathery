import React from 'react'
import logo from '../img/logo.png'
export default function Nav(props) {

    return (
        <nav
            className='nav-class'
        >
            <ul className="menu">
                <li
                    className='flex items-center space-x-3'
                >
                    <img
                        alt="logo"
                        src={logo}
                        className='logo-img'
                    />
                    <span
                        className='text-lg font-thin'
                    >
                        Weathery
                    </span>
                </li>
                <li
                className='flex items-center space-x-3'
                >
                    <input
                        type='text'
                        placeholder='Enter your city'
                        className='input round-rect'
                        onChange={(e)=>{
                            props.setCityName(()=>{
                                return e.target.value
                            })
                        }}
                    />

                </li>
                <li 
                onClick={()=>{
                    props.setLoc(!props.loc)
                }}
                
                className='flex location round-rect items-center space-x-2 px-3'>
                    <img
                        alt='location'
                        src='https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png'
                        className='w-[20px] h-[20px] opacity-[0.6]'
                    />
                    <span
                    className='font-thin text-[10px]'
                    >
                        Choose current location
                    </span>
                </li>
            </ul>
        </nav>
    )
}
