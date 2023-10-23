import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import { Avatar, Typography } from "@mui/material";
import PDP from "@/components/PDP";

const ProductDetails = ({ res }) => {
  
  const { query } = useRouter();
  
  return (
    <PageLayout>
      <PDP
      item={res[0]}
        productid={res[0].id}
        title={res[0].title}
        desc={res[0].description}
        category={res[0].category}
        type={res[0].type}
        status={res[0].status}
        price={res[0].price}
        rating={res[0].rating}
        reviewcount={res[0].reviewcount}
        productimage={res[0].productimage}
        offers={res[0].offers}
      />
    </PageLayout>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params }) {
  
  const client = createClient({
    projectId: "7qg61xe1",
    dataset: "production",
    useCdn: false,
  });
  const slugname = params.slug;

  const query3 = `*[_type == "products" && slug.current == '${slugname}']{
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
  const res = await client.fetch(query3);

  return {
    props: { res },
  };
}
