import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {

  const history = useHistory();

  //object that has info about current page
  const location = useLocation();

  //built in constructor function that can extract data from the location object.
  const queryParams = new URLSearchParams(location.search);

  
  //PLAIN ? sort=ascend
  console.log("PLAIN " + location.search)
  //PROCESSED ascend
  console.log("PROCESSED " + queryParams.get('sort'))

  const isSortingAscending = queryParams.get('sort') === "ascend";


  //sort the quotes
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);


  //query parameter part. 
const changeSortingHandler = () => {
history.push('allQuotes?sort=' + (isSortingAscending ? "descend" : "ascend"))}


  return (
    <Fragment>

<div className={classes.sorting}>
<button onClick={changeSortingHandler} >Sort {isSortingAscending ? "descending" : "ascending"}</button>

</div>


      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
