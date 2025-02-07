export default async function CeramicsPage() {
  try {
    

  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Error fetching products. Please try again later.
        </p>
      </div>
    );
  }
}
