// admin/admin.js
import AdminJS from 'adminjs';
import { Order } from '../models/Order.js'; // Adjusted to use named export
import { Product } from '../models/Product.js'; // Assuming you have a Product model

const adminJs = new AdminJS({
    resources: [
        { resource: Order, options: { /* Order-specific options */ } },
        { resource: Product, options: { /* Product-specific options */ } },
    ],
    rootPath: '/admin',
});

export default adminJs;
