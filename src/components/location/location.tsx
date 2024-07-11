import { CITIES } from '../../const';

type Cities = {
  CITIES: string;
}

function LocationItem(props: Cities): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{props.CITIES}</span>
      </a>
    </li>
  );
}

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((Cities) => <LocationItem CITIES={Cities} key={Cities} />)}
    </ul>
  );
}

export default LocationsList;
