import { useEffect, useState } from 'react';
import './Typing.css';

function Typing({ sentences }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentSentence = sentences[currentSentenceIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(currentSentence.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
                }
            } else {
                if (charIndex < currentSentence.length) {
                    setDisplayedText(currentSentence.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        };

        const timeoutId = setTimeout(handleTyping, isDeleting ? 50 : 150);
        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, currentSentenceIndex, sentences]);

    return (
        <span className='typed'>{displayedText}</span>
    );
}

export default Typing;
