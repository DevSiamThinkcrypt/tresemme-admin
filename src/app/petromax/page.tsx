'use client';

import React from 'react';
import { NextPage } from 'next';
import { PageTable } from '@/components/library';
import { petromaxTable } from '@/models/brand';

const CatPage: NextPage = () => {
	return <PageTable table={petromaxTable} />;
};

export default CatPage;
