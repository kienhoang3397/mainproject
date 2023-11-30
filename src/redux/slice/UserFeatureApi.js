import axios from "axios";

export const addProductToCart = async (product, accessToken) => {
    try {
        const res = await axios.post("http://localhost:3000/v1/user/addcart", {
            products: [product],  // Assuming an array is expected on the server side
        }, {
            headers: {
                token: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',  // Make sure to set the content type
            },
        });

        if (res && res.data) {
            // console.log(res.data);
            // You can return the data or do something else with it
            return res.data;
        } else {
            console.error('Invalid response structure:', res);
            throw new Error('Invalid response structure');
        }
    } catch (err) {
        console.error('Error adding product to cart:', err.message);
        throw err; // Rethrow the error to propagate it to the calling code
    }
};
