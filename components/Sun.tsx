// components/Sun.tsx
import { motion} from 'framer-motion';

interface SunProps {
  control: any;
}

function Sun({ control }: SunProps) {
  return (
      <motion.div 
          initial={{ backgroundColor: "#FEF08A" }}
          animate={control}
          transition={{ duration: 4, ease: "easeOut" }}
          className="sun bg-yellow-200 rounded-full absolute top-4 left-20 w-20 h-20 z-20 overflow-visible"
      />
  );
}

export default Sun;
