export default function ContentIntro({title, lead, children}) {
    return (
        <>
            <h1 className="entry-title add-bottom">{title}</h1>
            <p className="lead">{lead}</p>
            {children}
        </>
    )
}