import { proxy } from 'valtio';

const state = proxy({
    intro: true, //is the intro playing or not
    color: '#EFBD48', // default color - modifiable
    isLogoTexture: true, //are we using a texture or a color for the logo
    isFullTexture: false, //are we using a texture or a color for the background
    logoDecal: './threejs.png', //default logo texture
    fullDecal: './threejs.png', //default background texture
});

export default state;