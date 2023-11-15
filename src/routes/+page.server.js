export function load({ cookies }) {
	let loggedIn=cookies.get('Authorized');
    console.log("Authorized Server ")
    return {'Authorized':loggedIn};
}