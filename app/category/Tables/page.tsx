import ProductGrid from "@/app/components/ProductGrid";


export default async function TablesPage() {
  try {
    const query = `*[_type == "product" && category->name == 'tables']{
      name,
      tags,
      price,
      stock,
      dimensions,
      id,
      description,
      discount,
      originalPrice,
      "categoryName": category->name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      rating 
    }`;

  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Error fetching products. Please try again later.
        </p>
      </div>
    );
  }
}
