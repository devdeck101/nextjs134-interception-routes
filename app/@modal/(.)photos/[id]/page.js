import Modal from "@/app/components/Modal";
import PhotoFrame from "@/app/components/PhotoFrame";

async function getPhotoById(photoId) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`
  );
  const data = await request.json();
  return data;
}

export default async function PhotoModal({ params }) {
  console.log("---- Rota Intercept ----");
  const photo = await getPhotoById(params.id);
  return (
    <Modal>
      <PhotoFrame {...photo} />
    </Modal>
  );
}
