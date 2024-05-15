
function SubmitButton(props) {
    return (
        <button
            type="submit"
            onClick={props.onClick}
            className="bg-blue-900 text-white rounded-full px-6 py-2 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition ease-in-out duration-300"
        >
            {props.children || 'Submit'}
        </button>
    )
}

export default SubmitButton
