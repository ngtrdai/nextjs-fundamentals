export default function TextArea({fieldName, ...props}) {
    return (
        <textarea
            name={fieldName}
            {...props} />
    )
}