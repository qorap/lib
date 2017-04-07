import React from 'react';

import { Link} from 'react-router';

function Navlink(props) {
	return <Link activeClassName="is-active" {...props} />
}

export default Navlink;