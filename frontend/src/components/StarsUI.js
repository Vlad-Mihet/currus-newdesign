import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import starFilled from '@iconify/icons-ant-design/star-filled';
import starHalf from '@iconify/icons-bi/star-half';
import starIcon from '@iconify/icons-bi/star';

const StarsUI = ({ rating }) => {
        return (
            <>
                {rating > 4.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} /> </>:
                 rating > 4 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 3.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} /> </> :
                 rating > 3 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 2.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 2 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 1.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 1 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 rating > 0.5 ? <>
                <Icon icon={starFilled} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </> :
                 <>
                <Icon icon={starHalf} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color: '#fcc455', fontSize: '24px'}} />
                <Icon icon={starIcon} style={{color:"#fcc455", fontSize: '24px'}} /> </>}
            </>
        )
    }

export default StarsUI