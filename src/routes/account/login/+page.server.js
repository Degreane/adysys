export function load({ cookies }) {
	let loggedIn=cookies.get('loggedIn');
    return loggedIn;
}

export const actions ={
    login: async ({cookies,request}) =>{
        const data = await request.formData();
        console.log(data.get('uname'));
    }
}