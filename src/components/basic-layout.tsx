import React from 'react';
import {Outlet} from 'react-router-dom'

import  GitHub from "../assets/github-mark.svg";

const BasicLayout = () => {
    return (
        <div>
            <Outlet/>
            <a href={'https://github.com/galactus299/Sample-React-Starter'}>
                <img src={GitHub} alt={'github'} className={'fixed bottom-2 right-2  z-50 rounded w-[50px] h-[50px]'}/>
            </a>
        </div>
    );
};

export default BasicLayout;