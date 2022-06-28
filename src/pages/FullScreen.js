import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { quoteList } from "../quoteList";
import HighlightedQuote from "../components/quotes/HighlightedQuote"


const FullScreen = () => {

    //access to the dynamic link part. domain.com/:id   would be the :id part
const params = useParams();
const targetQuote = quoteList.find(quote => quote.id === params.id)

if (!targetQuote) {
    return <p>NO QUOTE FOUND.</p>
}

return (
<>
<h1>DETAIL: </h1><br/>
{params.id}<br/>

<HighlightedQuote text={targetQuote.text} author={targetQuote.author}/>
<br/>

<Link to={`/quote/${targetQuote.id}/comments`}>SHOW COMMENTS</Link>



<Route path={`/quote/${params.id}/comments`} exact>
<Comments/>
</Route>


</>
)

}

export default FullScreen