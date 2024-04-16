export default function FormField({children, ...props}) {
    const classNames = ["form-field"];

    if (props.className) {
        classNames.push(props.className);
        delete props.className;
    }
    return (
        <div className={classNames.join(" ")}>
            {children}
            {
                props.error && <div className="ss-error">{props.error}</div>
            }
        </div>
    );
}