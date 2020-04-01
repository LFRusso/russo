import React from 'react';
import PostHeader from './PostHeader'
import { findByLabelText } from '@testing-library/react';

const Post2 = () => {
    
    const paletteJojo2 = ["#f0bd00", "#fd1676", "#f21889", "#e2e8f6", "#4779ea", "#000000"];
    const paletteJojo = ["#EFEFEF", "#e1e55a", "#f3cf56", "#ea5b54","#ec7283","#98797f", "#5d3791", "#0b0a22"];
    const paletteSite = ["#022B3A", "#EFEFEF", "#C2C1C2", "#DE4842", "#F4B685"];
    const paletteVaporwave = ["#ff71ce", "#01cdfe", "#05ffa1", "#b967ff", "#fffb96"]

    const palette1 = paletteJojo.map((color) =>
        <div className="color-div col-1" style={{backgroundColor: color}}>
            <span className="color-name">{color}</span>
        </div>
    );

    const palette2 = paletteSite.map((color) =>
        <div className="color-div col-1" style={{backgroundColor: color}}>
            <span className="color-name">{color}</span>
        </div>
    );

    const palette3 = paletteVaporwave.map((color) =>
        <div className="color-div col-1" style={{backgroundColor: color}}>
            <span className="color-name">{color}</span>
        </div>
    ); 

    return(
        <div>
            <PostHeader>Teste de Paletas</PostHeader>
            <div className="post-content row">

                <span className="palette-name">Paleta desse site</span>
                <div className="palette row">
                    {palette2}
                </div>

                <span className="palette-name">Diamond is Unbreakable</span>
                <div className="palette row">
                    {palette1}
                </div>

                <span className="palette-name">Vaporwave</span>
                <div className="palette row">
                    {palette3}
                </div>
            </div>
        </div>
    );
}

export default Post2;