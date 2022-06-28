import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const history = useHistory();

  //object that has info about current page
  const location = useLocation();

const changeSortingHandler = () => {
history.push('allQuotes?sort=' + "ascend")
}

  return (
    <Fragment>

<div className={classes.sorting}>
<button onClick={changeSortingHandler} >Sort Ascending</button>

</div>


      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
