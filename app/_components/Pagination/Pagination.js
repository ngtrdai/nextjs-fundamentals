export default function Pagination({ pagination, setPage }) {
    const { currentPage, totalPages } = pagination;
    return (
        <nav className={"pagination"}>
            <span className={
                currentPage === 1 ? "page-numbers prev inactive" : "page-numbers prev"
            } onClick={() => setPage(currentPage - 1)}>Prev</span>
            {
                Array.from({ length: totalPages }, (_, i) => {
                    return (
                        <span key={i} className={
                            currentPage === i + 1 ? "page-numbers current" : "page-numbers"
                        } onClick={() => setPage(i + 1)}>{i + 1}</span>
                    )
                })
            }
            <span className={
                currentPage === totalPages ? "page-numbers next inactive" : "page-numbers next"
            } onClick={() => setPage(currentPage + 1)}>Next</span>
        </nav>
    );
}