import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0, x: "100vw" ,transition:{duration: 0.3} }}
      animate={{ opacity: 1, y: 0,x:0 ,transition:{duration: 0.3} }}
      exit={{opacity: 0, x: "100vw" ,transition:{duration: 0.3} }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;