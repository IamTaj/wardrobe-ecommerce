import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/PageLayout";
import Homepage from "@/components/Homepage";
import Carousel from "@/components/CarouselDesign";
import { createClient } from "next-sanity";
import { useState } from "react";
import CreateState from "@/Context/CreateState";

export default function Home({
  products,
  helmets,
  backpacks,
  clothings,
  electronics,
  dailyesnt,
}) {
  return (
    
      <PageLayout>
        <Homepage
          backpacks={backpacks}
          helmets={helmets}
          items={products}
          clothings={clothings}
          electronics={electronics}
          dailyesnt={dailyesnt}
        />
      </PageLayout>
    
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "7qg61xe1",
    dataset: "production",
    useCdn: false,
  });
  const query1 = `*[_type == "products"]{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;

  const query2 = `*[_type == "products" && category == 'CLOTHING']{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;

  const query3 = `*[_type == "products" && category == 'HELMET']{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;
  const query4 = `*[_type == "products" && category == 'BACKPACK']{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;
  const query5 = `*[_type == "products" && category == 'ELECTRONICS']{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;
  const query6 = `*[_type == "products" && category == 'DAILY ESSENTIALS']{
    id,
    title,
    description,
    category,
    type,
    status,
    price,
    rating,
    reviewcount,
    "productimage": productimage.asset->url,
    "offers": offers->{offer},
    'slug': slug.current,
  }`;
  const products = await client.fetch(query1);
  const clothings = await client.fetch(query2);
  const helmets = await client.fetch(query3);
  const backpacks = await client.fetch(query4);
  const electronics = await client.fetch(query5);
  const dailyesnt = await client.fetch(query6);
  

  return {
    props: {
      products,
      clothings,
      helmets,
      backpacks,
      electronics,
      dailyesnt,
    },
  };
}
