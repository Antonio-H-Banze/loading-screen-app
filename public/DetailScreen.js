import React, { useState, useEffect } from 'react';

function DetailScreen({ questionId }) {
    const [question, setQuestion] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchQuestion() {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:3000/questions/${questionId}`
                );
                const data = await response.json();
                setQuestion(data.question);
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        }
        fetchQuestion();
    }, [questionId]);

    function handleVote(answerId) {

    }

    function handleShare() {

    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{question.title}</h1>
            <p>{question.description}</p>
            {question.answers.map((answer) => (
                <div key={answer.id}>
                    <p>{answer.text}</p>
                    <button onClick={() => handleVote(answer.id)}>Vote</button>
                </div>
            ))}
            <button onClick={handleShare}>Share</button>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
}

export default DetailScreen;
