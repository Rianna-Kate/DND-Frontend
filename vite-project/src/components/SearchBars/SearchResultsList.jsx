import React, { useState } from 'react';
import { SearchResult } from './SearchResult';
import "./SearchResultsList.css";

const RESULTS_PER_PAGE = 15; // Make sure to adjust for results

export const SearchResultsList = ({ results }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
    const currentResults = results.slice(startIndex, startIndex + RESULTS_PER_PAGE);

    return (
        results.length > 0 && (
            <div className="container">
                <div className="projects">
                    {currentResults.map((result, id) => (
                        <SearchResult result={result} key={id} />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    </div>
                )}
            </div>
        )
    );
};
