import Image from "next/image";
import Link from "next/link";
interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      id: 1,
      price: "Order before 3pm and get your order the next day as standard",
      title: "Next day as standard",
      image: "/Delivery.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: "Handmade crafted goods made with real passion and craftmanship",
      image: "/Checkmark--outline.png",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: "For our materials and quality you won’t find better prices anywhere",
      image: "/Purchase.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: "We use 100% recycled packaging to ensure our footprint is manageable",
      image: "/Sprout.png",
    },
    
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-20">
    <div className="w-full flex flex-wrap justify-center items-center gap-16 pt-14 pb-24 px-4 flex flex-col w-full items-start text-24">
      <p className="text-[24px]">What makes our brand different</p>
      </div>
      

      <div className="grid grid-cols-1 gap-19 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div>
            
              <Link href={"components/productDectription/discription"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={24}
                  width={24}
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
            
              <div>
                <span className="text-sm text-[#1C1B1F] text-[20px]">{product.title}</span>
                <div className="mt-1 flex items-center gap-2">
                  <p className="text-sm text-[#1C1B1F] text-[20px]">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
