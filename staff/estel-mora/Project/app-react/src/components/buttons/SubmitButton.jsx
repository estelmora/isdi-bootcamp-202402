import RoundButton from './RoundButton'

function SubmitButton(props) {
    return <RoundButton className="bg-[gold]" type="submit">{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton