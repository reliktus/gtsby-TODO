import React from 'react';
import { Link } from 'gatsby';
import query from './query/layoutQuery';
import {capitalizeTitle} from './helpers';
export default function Menu() {
	const MenuItem = (props) => (
		<li className="pr-4">
			<Link to={props.to}>{capitalizeTitle(props.name)}</Link>
		</li>
	);
	const data = query();
	const menuPages = data.allFile.edges.map(
		(el, index) => el.node.name !== 'index' && <MenuItem key={index} to={`/${el.node.name}`} name={el.node.name} />
	);
	const colorChange = (mode) => {
		let body = document.body;
		mode === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');
	};
	return (
		<div>
			<ul className="flex flex-row flex-no-wrap">
				<MenuItem to="/" name={'Home'} />
				{menuPages}
				{/* <ListLink to="/aboutCss/about-css-modules/">about css nested page</ListLink> */}
			</ul>{' '}
			<div class="inline-flex">
  <button onClick={()=>colorChange('default')}  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Normal
  </button>
  <button onClick={()=>colorChange('dark')} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Dark
  </button>
</div>
		</div>
	);
}
