import React from 'react';
import { Link } from 'gatsby';
import query from './query/layoutQuery';
import helpers from './helpers';
// export default class Menu extends React.Component {
export default function Menu() {
	// render() {
	const ListLink = (props) => (
		<li style={{ display: `inline-block`, marginRight: `1rem` }}>
			<Link to={props.to}>{props.children}</Link>
		</li>
	);
	const data = query();
	const menuPages = data.allFile.edges.map((el, index) =>
		el.node.name != 'index' && (
			<ListLink key={index} to={`/${el.node.name}`}>
				{helpers(el.node.name)}
			</ListLink>
		)
	);
	return (
		<div>
			<ul>
				<ListLink to="/">Home</ListLink>
				{menuPages}
				{/* <ListLink to="/aboutCss/about-css-modules/">about css nested page</ListLink> */}
			</ul>{' '}
		</div>
	);
	// }
}


