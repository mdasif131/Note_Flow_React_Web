import { motion } from 'framer-motion';
import { useModalContext } from '../../../contexts/ModalContext';

const Modal = ({ children, modal }) => {
  const { activeModal, setActiveModal } = useModalContext();
  const activelyDisplayedModal = modal === activeModal;
  return (
    <motion.div
      className="bg-primary-1300/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center px-24 py-32 backdrop-blur-sm max-lg:px- max-md:px-6"
      animate={activelyDisplayedModal ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
          visibility: 'hidden',
        },
        visible: {
          opactiy: 100,
          visibility: 'visible',
        },
      }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onClick={e => e.currentTarget === e.target && setActiveModal('')}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={
          activelyDisplayedModal
            ? {
                opacity: 100,
                y: 0,
              }
            : {
                opacity: 0,
                y: 30,
              }
        }
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex overflow-hidden rounded-2xl opacity-0 shadow-[0px_0px_20px_rgb(6,18,18,.10)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
