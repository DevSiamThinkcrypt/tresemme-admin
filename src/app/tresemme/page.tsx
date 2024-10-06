'use client';

import React from 'react';
import { NextPage } from 'next';
import { PageTable } from '@/components/library';
import { tresemmeTable } from '@/models/brand';

const CatPage: NextPage = () => {
	return <PageTable table={tresemmeTable} />;
};

export default CatPage;
