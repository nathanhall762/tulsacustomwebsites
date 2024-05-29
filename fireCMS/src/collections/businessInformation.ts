// @ts-nocheck
import { EntityCollection } from "@firecms/cloud";

export const BusinessInformationCollection:EntityCollection = {
	id: 'business_information',
	name: 'Business Information',
	singularName: 'Business Information',
	path: 'business_information',
	editable: true,
	icon: 'domain',
	group: 'Views',
	properties: {
		business_name: {
			description: 'Official name of your business.',
			name: 'Business Name',
			dataType: 'string',
			propertyConfig: 'text_field',
		},
		business_contact_email: {
			email: true,
			dataType: 'string',
			name: 'Business Contact Email',
			propertyConfig: 'email',
		},
		business_logo: {
			dataType: 'string',
			name: 'Business Logo',
			storage: {
				storagePath: '/',
				storeUrl: true,
			},
			propertyConfig: 'file_upload',
		},
		business_logo_2: {
			propertyConfig: 'file_upload',
			name: 'Business Logo 2',
			storage: {
				storagePath: '/',
				storeUrl: true,
			},
			dataType: 'string',
		},
		favicon: {
			dataType: 'map',
			properties: {
				apple_touch_icon: {
					dataType: 'string',
					storage: {
						acceptedFiles: [
							'image/*',
						],
						storagePath: '/',
						storeUrl: true,
					},
					propertyConfig: 'file_upload',
					editable: true,
					name: 'Apple Touch Icon',
				},
				favicon_32_x32: {
					name: 'Favicon 32x32',
					dataType: 'string',
					propertyConfig: 'file_upload',
					storage: {
						storeUrl: true,
						acceptedFiles: [
							'image/*',
						],
						storagePath: '/',
					},
					editable: true,
				},
				favicon_16_x16: {
					dataType: 'string',
					editable: true,
					name: 'Favicon 16x16',
					storage: {
						acceptedFiles: [
							'image/*',
						],
						storagePath: '/',
						storeUrl: true,
					},
					propertyConfig: 'file_upload',
				},
				site_webmanifest: {
					name: 'Site Webmanifest',
					editable: true,
					dataType: 'string',
					storage: {
						storeUrl: true,
						storagePath: '/',
					},
					propertyConfig: 'file_upload',
				},
				safari_pinned_tab: {
					name: 'Safari Pinned Tab',
					storage: {
						storagePath: '/',
						storeUrl: true,
					},
					propertyConfig: 'file_upload',
					dataType: 'string',
					editable: true,
				},
				android_chrome_192_x192: {
					storage: {
						acceptedFiles: [
							'image/*',
						],
						storeUrl: true,
						storagePath: '/',
					},
					dataType: 'string',
					editable: true,
					propertyConfig: 'file_upload',
					name: 'Android Chrome 192x192',
				},
				android_chrome_256_x256: {
					editable: true,
					name: 'Android Chrome 256x256',
					dataType: 'string',
					propertyConfig: 'file_upload',
					storage: {
						storagePath: '/',
						acceptedFiles: [
							'image/*',
						],
						storeUrl: true,
					},
				},
			},
			keyValue: false,
			name: 'Favicon',
			propertyConfig: 'group',
		},
		socials: {
			of: {
				keyValue: false,
				propertyConfig: 'group',
				propertiesOrder: [
					'type',
					'link',
				],
				properties: {
					link: {
						dataType: 'string',
						url: true,
						name: 'Link',
						propertyConfig: 'url',
						editable: true,
					},
					type: {
						name: 'Type',
						dataType: 'string',
						propertyConfig: 'select',
						enumValues: [
							{
								label: 'Instagram',
								id: 'Instagram',
							},
							{
								label: 'Facebook',
								id: 'Facebook',
							},
							{
								id: 'Youtube',
								label: 'Youtube',
							},
							{
								id: 'Twitter',
								label: 'Twitter',
							},
						],
						editable: true,
					},
				},
				editable: true,
				name: '',
				url: true,
				dataType: 'map',
			},
			dataType: 'array',
			propertyConfig: 'repeat',
			properties: {},
			keyValue: false,
			name: 'Socials',
		},
		business_address: {
			dataType: 'string',
			name: 'Business Address',
			propertyConfig: 'text_field',
		},
		google_maps_link: {
			dataType: 'string',
			url: true,
			name: 'Google Maps Link',
			propertyConfig: 'url',
		},
		business_phone: {
			propertyConfig: 'text_field',
			dataType: 'string',
			name: 'Business Phone',
		},
	},
	subcollections: [],
}