import { GetStaticProps } from 'next';
import React from 'react';
import { WithLayout } from '../layout/layout';

function Search(props:any): JSX.Element {
  console.log(props);
	return (
		<>
			Search
		</>
	);
}

export default WithLayout(Search);
