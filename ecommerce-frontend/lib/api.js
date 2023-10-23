import client from "./sanity";

export async function getServerSideProps({query}) {
  const query = `*[_type == "products"]`;
  const product = await client.fetch(query);
  console.log(product);

  return {
    props: {
      product,
    },
  };
}
