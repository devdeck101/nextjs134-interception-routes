import PhotoFrame from "@/app/components/PhotoFrame";

async function getPhotoById(photoId) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`
  );
  const data = await request.json();
  return data;
}

export default async function Photo({ params }) {
  console.log("---- Rota Original ----");
  const photo = await getPhotoById(params.id);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <PhotoFrame {...photo} />
      </div>
    </div>
  );
}
