// components/Moon.tsx
import { motion } from 'framer-motion';

interface MoonProps {
  control: any;
  initial: any;
}

function Moon({ control, initial }: MoonProps)  {
    return (
        <motion.div 
            animate={control}
            initial={initial}
            transition={{ duration: 4, ease: "easeOut" }} 
            className="moon absolute top-4 left-96 w-16 h-16 z-20 overflow-visible">
            <div className="crater small"></div>
            <div className="crater medium"></div>
            <div className="crater large"></div>
            <div className="crater xsmall"></div>
            <div className="crater xlarge"></div>
        </motion.div>
      
    );
  }
  
  export default Moon;