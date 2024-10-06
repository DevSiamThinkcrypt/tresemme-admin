import { createFormFields, SchemaProps } from '@/components/library';
import { formFields } from '@/models/role';

const schema: SchemaProps = {
	name: {
		label: 'Name',
		type: 'text',
		sort: true,
		displayInTable: true,
		default: true,
	},
	email: {
		label: 'Email',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	phone: {
		label: 'Phone',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	password: {
		label: 'Password',
		type: 'password',
		isRequired: true,
	},
	role: {
		label: 'Role',
		isRequired: true,
		type: 'select',
		displayInTable: true,
		tableType: 'tag',
		viewType: 'tag',
		tableKey: 'role',
		options: [
			{
				value: 'admin',
				label: 'Admin',
			},
			{
				value: 'super-admin',
				label: 'Super Admin',
			},
		],
		default: true,
		dataModel: formFields,
	},

	createdAt: { title: 'Created', type: 'date', sort: true, displayInTable: true },
};

export default schema;
