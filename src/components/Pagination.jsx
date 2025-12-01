import styles from './Pagination.module.css'
export function Pagination({totalPaginas, currentPage=1, onChangePage}) {
        
        
        const numPag = Array.from({length: totalPaginas}, (_,index) => index+1);
        
        const isFirstPage = currentPage === 1;
        const isLastPage = currentPage === totalPaginas;

        const stylePrevButton = isFirstPage ? {pointerEvents: 'none', opacity: 0.5 } : {};
        const styleNextButton = isLastPage ? {pointerEvents: 'none', opacity: 0.5 } : {};

        const handlePrevClick = (e) => {
            e.preventDefault();
            if (!isFirstPage) {
                onChangePage(currentPage-1)
            }
        }

        const handleNextClick = (e) => {
            e.preventDefault();
            if (!isLastPage) {
                onChangePage(currentPage+1)
            }
        } 

        const handleChangePage = (e, page) => {
            e.preventDefault();
            if (page!==currentPage) {
                onChangePage(page)
            }
        }

        

        
        
        return (
            <nav className={styles.paginacion}>
                <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                </a>
                {numPag.map(page=>(
                    <a 
                    key={page} 
                    href="#" 
                    className={`pag ${page===currentPage ? styles.isActive : ''}`} 
                    data-page={page}
                    onClick={(e) => handleChangePage(e,page)}
                    >
                        {page}
                    </a>
                    )
                )}
                <a href="#" style={styleNextButton} onClick={handleNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                </a>
            </nav>
        );
    }