import style from "./button.module.scss";

function ButtonIcon({ color = null, children }) {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className={style.btn_icon}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
