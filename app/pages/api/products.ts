

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search, rating, priceMin, priceMax } = req.query;

  try {
    const response = await axios.get('https://dummyjson.com/products/search', {
      params: { q: search },
    });

    let products = response.data.products;

    if (rating) {
      products = products.filter((product: any) => product.rating >= parseFloat(rating as string));
    }
    if (priceMin) {
      products = products.filter((product: any) => product.price >= parseFloat(priceMin as string));
    }
    if (priceMax) {
      products = products.filter((product: any) => product.price <= parseFloat(priceMax as string));
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error('Failed to fetch products', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

