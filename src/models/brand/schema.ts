import { SchemaProps } from '@/components/library';

const schema: SchemaProps = {
	name: {
		label: 'Name',
		type: 'text',
		sort: true,
		displayInTable: true,
		default: true,
	},

	phone: {
		label: 'Phone',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	gender: {
		label: 'Gender',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	age: {
		label: 'Age',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	otp: {
		label: 'Otp',
		type: 'text',
	},
	parlorCode: {
		label: 'Parlor Code',
		type: 'number',
		displayInTable: true,
		default: true,
	},

	createdAt: {
		title: 'Created',
		type: 'date',
		sort: true,
		displayInTable: true,
		default: true,
	},
};

export default schema;
