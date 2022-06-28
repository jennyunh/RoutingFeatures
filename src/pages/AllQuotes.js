
import Navbar from "../components/UI/Navbar";
import QuoteList from "../components/quotes/QuoteList";
import Card from "../components/UI/Card";
import { quoteList } from "../quoteList";

const AllQuotes = () => {

  return (
  <>
  <Card>
  <QuoteList quotes={quoteList}/>
  </Card>

  </>)

}

export default AllQuotes