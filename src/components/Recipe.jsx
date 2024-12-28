import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
    return(
        <section className = "suggested-recipe-container">
            {
                props.markedDown ? (
                    <ReactMarkdown>
                        {props.markedDown}
                    </ReactMarkdown>
                ) : ``
            }
            
        </section>
    );
}
