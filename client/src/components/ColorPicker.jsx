import React from 'react'
import { SketchPicker } from 'react-color'
import {useSnapshot} from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full m1-3'>
      <SketchPicker 
        color = {snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          '#000000',
          '#FFFFFF',
          '#FF0000',
          '#00FF00',
          '#0000FF',
          '#FFFF00',
          '#00FFFF',
          '#FF00FF',
          '#FFA500',
          '#800000',
          '#808000',
          '#008000',
          '#800080',
          '#008080',
        ]}
      />
    </div>

  )
}

export default ColorPicker