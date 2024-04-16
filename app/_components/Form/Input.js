export default function Input({fieldName, ...props}) {
    return (
        <input
            name={fieldName}
            type={'text'}
            {...props} />
    );
}