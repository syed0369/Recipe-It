import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
    console.log(props.markdown)
    return(
        <section className = "suggested-recipe-container">
            {
                props.markdown ? (
                    <ReactMarkdown>
                        {props.markdown.data}
                    </ReactMarkdown>
                ) : ``
            }
        </section>
    );
}
