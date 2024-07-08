// pages/card.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.images[0]} alt={product.title} />
      {/* Altri dettagli del prodotto */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query;

  try {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    const product = {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      price: response.data.price,
      images: response.data.images,
    };

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Failed to fetch product', error);
    return {
      notFound: true,
    };
  }
};

export default Card;
