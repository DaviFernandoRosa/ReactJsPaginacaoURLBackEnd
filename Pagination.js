import React from 'react';
import '../App.css'

const Pagination = ({pages, currentPage, setCurrentPage, itensPerPage}) => {
    const pag = Math.ceil(pages / itensPerPage);
    const first = Math.max(currentPage - Math.ceil((Math.min(9, pag) - 1) / 2), 1);

    function onPageChange(page) {
        setCurrentPage(page);
    }

    return (
        <ul className="pagination">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                >
                    Anterior
                </button>
            </li>
            {Array.from({length: Math.min(9, pag)})
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={page === currentPage ? 'pagination__item--active' : null}
                        >
                            {page}
                        </button>

                    </li>
                ))}
            <li>
                <button onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === pag}
                >
                    Próxima
                </button>
            </li>
        </ul>

    );


};

export default Pagination;