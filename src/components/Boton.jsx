export default function Boton({ children, type, onClick }) {
    return (
        <button type={type} className={`py-1 w-28 border-2 border-white rounded-xl bg-blue-500 text-white font-bold cursor-pointer shadow-sm shadow-gray-700`} onClick={onClick}>
            { children }
        </button>
    )
};