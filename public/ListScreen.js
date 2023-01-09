import React, { useState, useEffect } from 'react';

function ListScreen({ searchTerm }) {
    const [questions, setQuestions] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchQuestions() {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:3000/questions?page=${page}&search=${searchTerm}`
                );
                const data = await response.json();
                setQuestions((prevQuestions) => [...prevQuestions, ...data.questions]);
                setHasMore(data.hasMore);
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        }
        if (hasMore) {
            fetchQuestions();
        }
    }, [page, searchTerm]);

    function handleLoadMore() {
        setPage((prevPage) => prevPage + 1);
    }

    function handleShare() {

    }

    function handleDismiss() {

    }

    function handleSelect(questionId) {

    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <button onClick={handleShare}>Share</button>
            <button onClick={handleDismiss}>Dismiss</button>
            <ul>
                {questions.map((question) => (
                    <li key={question.id} onClick={() => handleSelect(question.id)}>
                        {question.title}
                    </li>
                ))}
            </ul>
            {isLoading && <div>Loading...</div>}
            {hasMore && <button onClick={handleLoadMore}>Load More</button>}
        </div>
    );
}

export default ListScreen;
