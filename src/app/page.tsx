'use client';

import { Grid } from '@chakra-ui/react';

import { Layout, Count, useAppSelector } from '@/components/library';

export default function UserFeedback() {
	return (
		<Layout
			title='Dashboard'
			path='dashboard'>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
				gap={2}>
				<Count
					title='Tresemme Leads'
					path='brand/tresemme'
				/>
				<Count
					title='Petromax Leads'
					path='brand/petromax'
				/>
			</Grid>
		</Layout>
	);
}
