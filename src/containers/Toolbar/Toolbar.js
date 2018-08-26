import React from 'react';
import MenuToggle from '../../components/Menu-Toggle/Menu-Toggle';

const toolbar = (props) => {

    return (
        <div>
            <MenuToggle toggleMenu={props.toggleMenu}/>
        </div>
    )

}

export default toolbar;