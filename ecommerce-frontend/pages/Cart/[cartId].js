const { useRouter } = require("next/router");
import { createClient } from "next-sanity";
import Link from "next/link";

const CartId = ({ res }) => {
  const { query } = useRouter();
  const search = query.cartId.toUpperCase();

  return (
    <>
      <div className="titlebar">
        <div className="link-nav">
          <div>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </div>
          &nbsp; &nbsp; &nbsp;
          <p>➤</p>
          &nbsp; &nbsp; &nbsp;
          <div>SEARCHBAR</div>
        </div>
      </div>
      <div className="searchbar-display">
        {res
          .filter((item) => {
            const flag =
              item.id == search ||
              item.category == search ||
              item.type == search ||
              // search.toUpperCase().find(item.title) ||
              search.toUpperCase().includes(item.title);

            return flag;
          })
          .map((item) => {
            return (
              <div className="main">
                <Link
                  href={`/list/${item.slug}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="search-item">
                    <div className="search-item-image">
                      <img src={item.productimage} alt="" />
                    </div>
                    <div className="content">
                      <div className="search-item-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="search-item-desc">{item.description}</div>
                      <div className="price">
                        <h4>${item.price}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default CartId;
export async function getServerSideProps({ params }) {
  const client = createClient({
    projectId: "7qg61xe1",
    dataset: "production",
    useCdn: false,
  });
  const slugname = params.cartId;

  const query3 = `*[_type == "products"]{
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
