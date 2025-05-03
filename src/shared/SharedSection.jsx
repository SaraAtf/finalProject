import { Container } from "react-bootstrap";

export function SharedSection( { className, title, titleFormat, subTitle, ...props } ) {
    return (
        <div className={`${className} p-5`}>
            <Container>
                <h2 className={`${titleFormat} titleFont`}>{title}</h2>
                <span className="mt-0">{subTitle}</span>
                {props.children}

            </Container>
        </div>
    )
}
