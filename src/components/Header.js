import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <div className ='header'>
            <img className='logo' src='images/muse.webp' alt='header-image' />
            <h2 className='app-subtitle'>Let's look at some basketball stat</h2>
        </div>
    );
}