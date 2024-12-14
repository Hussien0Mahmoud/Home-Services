import { CgDarkMode } from "react-icons/cg";
import PropTypes from "prop-types";

function BtnTheme({ changeTheme }) {
  return (
    <div>
      <CgDarkMode
        onClick={changeTheme}
        className="fixed bg-main-color bottom-2 2xl:bottom-5 right-2 2xl:right-5 text-3xl md:text-5xl cursor-pointer text-light-tertiary dark:text-dark-tertiary z-50"
      />
    </div>
  );
}

BtnTheme.propTypes = {
  changeTheme: PropTypes.func.isRequired, 
};

export default BtnTheme;
