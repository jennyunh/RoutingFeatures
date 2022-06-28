import QuoteForm from "../components/quotes/QuoteForm";

import { useHistory } from "react-router-dom";

const AddQuote = () => {

    //push new page to the stack of pages, or
    //replace method replaces the current page.
    //push method will allow user to go back a page
    //replace method does not
    const history = useHistory();



const addQuoteHandler = (quote) => {
    console.log(quote)
history.push('/allQuotes');
}

return (
    <QuoteForm onAddQuote={addQuoteHandler} />
)
}

export default AddQuote