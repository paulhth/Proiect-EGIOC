import { proxy } from 'valtio';

const state = proxy({
    intro: true, //is the intro playing or not
    color: '#2BDE7E', // default color - modifiable
    isLogoTexture: true, //are we using a texture or a color for the logo
    isFullTexture: false, //are we using a texture or a color for the background
    logoDecal: './threejs.png', //default logo texture
    fullDecal: './threejs.png', //default background texture
    rotation: { x: 0, y: 0, z: 0 }, // t-shirt rotation
});

export default state;