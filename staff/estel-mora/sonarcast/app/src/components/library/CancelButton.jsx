function CancelButton(props) {
    return <button
        type="button"
        className="bg-gray-300 text-black rounded-full py-2 px-4 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        onClick={props.onClick}
    >
        {props.children || 'Cancel'}
    </button>
}

export default CancelButton