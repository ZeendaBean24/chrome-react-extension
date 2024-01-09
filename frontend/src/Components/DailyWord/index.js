import React, { useState, useEffect } from 'react';
import { Container, Title, Definition, Example, PartOfSpeech } from './styles.js';

function DailyWord() {
    const [wordDetails, setWordDetails] = useState({
        word: '',
        definition: '',
        example: '',
        partOfSpeech: ''
    });

    useEffect(() => {
        const apiUrl = `http://localhost:3001/wordOfTheDay`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setWordDetails({
                    word: data.word,
                    definition: data.definition,
                    example: data.example,
                    partOfSpeech: data.partOfSpeech
                });
            })
            .catch(error => console.error('Error fetching word of the day:', error));
    }, []);

    return (
        <Container>
            <Title>{wordDetails.word}</Title>
            <Definition>{wordDetails.definition}</Definition>
            <Example>{wordDetails.example}</Example>
            <PartOfSpeech>{wordDetails.partOfSpeech}</PartOfSpeech>
        </Container>
    );
}

export default DailyWord;
