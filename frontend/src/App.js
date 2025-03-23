import React, { useEffect, useState } from 'react';

const App = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {


        fetch(`${process.env.REACT_APP_USER_SERVICE_URL}`)
            .then(res => res.json())
            .then(data => setUsers(data));

        fetch(`${process.env.REACT_APP_PRODUCT_SERVICE_URL}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
