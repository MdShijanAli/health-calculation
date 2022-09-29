// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(shoppingCart));
}


const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        localStorage.setItem('break-time', JSON.stringify(shoppingCart));
    }
    return shoppingCart;
}


const removeFromDb = id => {
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('break-time', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('break-time');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}