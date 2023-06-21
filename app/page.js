import Image from "next/image";
import Link from "next/link";

async function getPhotos() {
  const request = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await request.json();
  return data;
}

export default async function Album() {
  const photos = await getPhotos();

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">
        Interception Routes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 m-10 ">
        {photos.map(({ id, title, url, thumbnailUrl }) => (
          <Link href={`/photos/${id}`} key={id}>
            <Image
              alt={title}
              src={thumbnailUrl}
              height={150}
              width={150}
              className="w-full object-cover aspect-square rounded-md"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
