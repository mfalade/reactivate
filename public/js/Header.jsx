import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
    const { currentUser } = this.props;
		return (
			<div>
				<h3>Welcome { currentUser } to Reactivate..</h3>
				<p>Feel free to browse our collections of users and their ages</p>
				<p>This is a shitty app, lowkey</p>
			</div>
		);
	}
}

Header.propTypes = {
	currentUser: PropTypes.string.isRequired
}

export default Header;