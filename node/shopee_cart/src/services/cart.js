export async function addItem(userCart, item) {
	userCart.push(item);
}

export async function removeItem(userCart, item) {
	const index = userCart.findIndex((p) => p.name === item.name);
	if (index === -1) return;

	if (userCart[index].quantity === 1) {
		deleteItem(userCart, item.name);
	} else {
		userCart[index].quantity = userCart[index].quantity - 1;
	}
}

export async function deleteItem(userCart, name) {
	const index = userCart.findIndex((item) => item.name === name);

	if (index === -1) return;
	userCart.splice(index, 1);
}

export async function calculateCartTotal(userCart) {
	const result = userCart.reduce((acc, item) => acc + item.subtotal(), 0);
	console.log(result);
}

export async function displayCart(userCart) {
	console.log(`O seu carrinho tem: ${userCart.length} itens`);
	console.log("============================================");
	for (const i in userCart) {
		console.log(`Item ${Number(i) + 1}`);
		console.log(`Nome: ${userCart[i].name}`);
		console.log(`Quantidade: ${userCart[i].quantity}`);
		console.log(`Subtotal: ${userCart[i].subtotal()}`);
	}
}
