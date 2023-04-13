import { motion,AnimatePresence } from 'framer-motion';	// Import motion from framer-motion
import { useSnapshot } from 'valtio';	// Import useSnapshot from valtio
import state from '../store';  // Import state from store
import { CustomButton } from '../components';

import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);	// Use useSnapshot to get the state from store
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            ></img>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                SĂ <br className="xl:block hidden" />ÎNCEPEM
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">Creează-ți propriul tău design al tricoului. <strong>Dă-ți frâu liber imaginației</strong>{" "} și definește-ți tricoul - Paul Horvath.
              </p>
              <CustomButton
                type="filled"
                title="Personalizează"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                >
              </CustomButton>
            </motion.div>
          </motion.div>
        </motion.section> 
      )}
    </AnimatePresence>
  )
}

export default Home