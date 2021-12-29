import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	INodeExecutionData,
} from 'n8n-workflow';

import {
	apiRequest,
} from '../../../transport';

export async function addCategory(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const body: string[] = [];
	const requestMethod = 'POST';
	const endpoint = 'employees/files/categories';

	//body parameters
	const categoryName: string = this.getNodeParameter('categoryName', index) as string;
	body.push(categoryName);

	//response
	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	//return
	return this.helpers.returnJsonArray({ statusCode: responseData.statusCode, statusMessage: responseData.statusMessage });
}
