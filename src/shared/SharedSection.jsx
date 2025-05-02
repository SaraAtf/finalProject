import { Container } from "react-bootstrap";

export function SharedSection( { className, title, titleFormat, ...props } ) {
    return (
        <div className={`${className} p-5`}>
            <Container>
                <h2 className={`${titleFormat} mb-5 titleFont`}>{title}</h2>
                {props.children}

            </Container>
        </div>
    )
}
