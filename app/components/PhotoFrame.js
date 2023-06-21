import Image from "next/image";
import Link from "next/link";

export default function PhotoFrame({ title, url }) {
  return (
    <>
      <Image
        alt={title}
        src={url}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6 text-center">
        <h3>{title}</h3>
        <h4>
          <Link href={"/"}>Voltar</Link>
        </h4>
      </div>
    </>
  );
}
