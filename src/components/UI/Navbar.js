import { NavLink } from "react-router-dom";

import classes from "../UI/Navbar.module.css";

const Navbar = () => {

return <header className={classes.header}>

<ul className={classes.ul}>
<li>
    <NavLink activeClassName={classes.active} to="/allQuotes">All Quotes</NavLink>
</li>

<li>
    <NavLink to="/addQuote">Add a Quote</NavLink>
</li>

<li>
    <NavLink to="/quote/:id">Quote</NavLink>
</li>

</ul>

</header>

}

export default Navbar