import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { userId } = locals;
	if (!userId) {
		throw redirect(303, '/');
        console.log('There is no userId. Current userId: ' + userId + '.');
	}
	return {
		user: getUser(userId),
	};
};