import { motion } from 'framer-motion';
import Menu from '../../icons/Menu'
import { useMobileMenuContext } from '../../../contexts/MobileMenuContex';

const MobileMenuIcon = () => {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  return (
    <motion.button
    animate={{rotate: mobileMenuOpened ? 90 : 0}}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='cursor-pointer justify-center items-center max-lg:flex hidden'
      onClick={() => setMobileMenuOpened(true)}
    >
      <Menu className="stroke-primary-50 h-7 w-7" width={2} />
    </motion.button>
  );
}

export default MobileMenuIcon