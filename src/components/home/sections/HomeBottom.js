import React from 'react';
import { alt_009, alt_011, src_010, src_011 } from '../../../resources/Strings';
import ImageRow from '../../images/ImageRow';
import Pledge from './Pledge';
import WhatsOffered from './WhatsOffered';
import { c_0073 } from '../../../resources/ClassNames';
import '../../../styling/components/home/sections/HomeBottom.css';
import SongListButton from './SongListButton';

function HomeBottom() {
    return (
        <div className={c_0073}>
            <WhatsOffered />
            <ImageRow 
                source1={src_010} 
                source2={src_011} 
                alt1={alt_011} 
                alt2={alt_009} />
            <Pledge />
            <SongListButton />
        </div>
    );
}

export default HomeBottom;
