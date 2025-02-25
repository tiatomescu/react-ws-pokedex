export default function Button({buttonType, onClick, children}){
  return(
    <button
      onClick={onClick}
      className={`"add styling"
        ${buttonType ==="secondary?"? "text-[14px opacity-[0.85]": ""}`}
    >
      {children}
    </button>
  );
}