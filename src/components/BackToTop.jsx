import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export function BackToTop() {
    const [ isVisible, setIsVisible ] = useState( false );

    const toggleVisibility = () => {
        if ( window.pageYOffset > 300 ) {
            setIsVisible( true );
        } else {
            setIsVisible( false );
        }
    };

    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } );
    };

    useEffect( () => {
        window.addEventListener( 'scroll', toggleVisibility );
        return () => {
            window.removeEventListener( 'scroll', toggleVisibility );
        };
    }, [] );

    return (
        <Button
            variant="primary"
            className={`back-to-top ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                cursor: 'pointer'
            }}
        >
            <i className="bi bi-arrow-up"></i>
        </Button>
    );
} 