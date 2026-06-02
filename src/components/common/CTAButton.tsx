import { motion } from "motion/react";
import IconPhone from "../../assets/icons/icon-phone.svg";

function CTAButton() {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer bg-secondary text-secondary-foreground p-2 pl-6 rounded-full text-2xl max-sm:text-lg flex gap-4 items-center"
    >
      Call Us Now
      <span className="bg-secondary-foreground rounded-full p-3">
        <motion.img
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          src={IconPhone}
          alt="Phone Icon"
          className="max-sm:size-4!"
        />
      </span>
    </motion.button>
  );
}

export { CTAButton };
