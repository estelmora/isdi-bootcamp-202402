function AcceptButton(props) {
    return <button
        type="button" onClick={props.onClick}>
        {props.children || 'Accept'}
    </button>
}

export default AcceptButton