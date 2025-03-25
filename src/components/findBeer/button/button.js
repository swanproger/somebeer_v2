export default function EnterBeerButton({ children, onClick, isActive }) {
    return (
        <button className={isActive ? "btn active" : "btn"} onClick={onClick}>
            {children}
        </button>
    );
}
