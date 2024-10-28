import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{height:0, opacity: 1, transition:{duration: 0.3} }}
      animate={{height:'100%', opacity: 1, y: 0,x:0 ,transition:{duration: 0.3} }}
      exit={{height:0, opacity: 1,transition:{duration: 0.3} }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;