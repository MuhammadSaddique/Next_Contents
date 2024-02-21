import next from "next";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div
      className={`${styles.main} min-h-screen bg-main-color flex items-center justify-center text-center text-white`}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Start your new project with LevelFive in just a few clicks!!!
        </h1>
        <p className="text-sm">
          Book a free call and let’s see if we’re a good fit.
        </p>
      </div>
    </div>
  );
};

export default Header;
