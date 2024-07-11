import { GALLERY } from '../../const';

export type Photo = {
  GALLERY: string;
}

function OfferImage(props: Photo): JSX.Element {
  return (
      <div className="offer__image-wrapper">
        <img className="offer__image" src={`img/${props.GALLERY}.jpg`} alt="Photo studio" />
      </div>
  );
}

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery">
      {GALLERY.map((Photo) => <OfferImage GALLERY={Photo} key={Photo} />)}
    </div>
  );
}

export default OfferGallery;
