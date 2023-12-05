import { motion } from 'framer-motion';

interface PopUpProps {
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <motion.div
        className="popup-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {/* Nội dung của pop-up */}
        <h2>Giới thiệu về bản thân</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <button onClick={onClose}>Đóng</button>
      </motion.div>
    </div>
  );
};

export default PopUp;