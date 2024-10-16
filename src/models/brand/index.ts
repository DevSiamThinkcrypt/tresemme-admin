import {
	CreateLayoutProps,
	TableObjectProps,
	convertToTableFields,
	convertToViewFields,
	createFormFields,
} from '@/components/library';

import schema from './schema';

const petromaxTableFields = convertToTableFields({
	schema,
	fields: [
		'bpCode',
		'name',
		'phone',
		'age',
		'currentUsingBrand',
		'area',
		'address',
		'tentativePurchaseDate',
		'createdAt',
	],
});
const tresemmeTableFields = convertToTableFields({
	schema,
	fields: [
		'name',
		'phone',
		'age',
		'purchaseQuantity',
		'parlorCode',
		'createdAt',
	],
});
// const tableFields = convertToTableFields({
// 	schema,
// 	fields: ['name', 'phone', 'age', 'gender', 'createdAt'],
// });

const viewDataModel = convertToViewFields({ schema });

export const tresemmeTable: TableObjectProps = {
	title: 'Tresemme',
	path: '/brand/tresemme',
	// clickable: true,
	//toPath: '/items/edit',
	hidePreferences: true,
	export: true,
	select: {
		show: true,
		menu: [
			{
				title: 'Export',
				type: 'export',
			},
		],
	},
	// button: {
	// 	title: 'Add Product',
	// 	path: '/products/create',
	// },
	menu: [
		{
			title: 'View',
			type: 'view-modal',
			dataModel: viewDataModel,
		},
	],
	data: tresemmeTableFields,
};

export const petromaxTable: TableObjectProps = {
	title: 'Petromax',
	path: '/brand/petromax',
	// clickable: true,
	//toPath: '/items/edit',
	hidePreferences: true,
	export: true,
	select: {
		show: true,
		menu: [
			{
				title: 'Export',
				type: 'export',
			},
		],
	},
	// button: {
	// 	title: 'Add Product',
	// 	path: '/products/create',
	// },
	menu: [
		{
			title: 'View',
			type: 'view-modal',
			dataModel: viewDataModel,
		},
	],
	data: petromaxTableFields,
};
