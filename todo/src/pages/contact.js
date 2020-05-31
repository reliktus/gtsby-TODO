import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function Contact({ pageContext, location }) {
	const { breadcrumb: { crumbs } } = pageContext;
	const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');

	return (
		<Layout crumbs={crumbs} crumbLabel={customCrumbLabel}>
			<div>
				<h1>I'd love to talk! Email me at the address below</h1>
				<p>
					<a href="mailto:me@example.com">me@example.com</a>
				</p>
				<p>
					<Link to="/">Home</Link>
				</p>
			</div>
		</Layout>
	);
}
