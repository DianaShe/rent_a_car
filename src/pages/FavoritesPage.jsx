import { CardGallery } from 'components/CardGallery/CardGallery';
import { useEffect, useState } from 'react';
import { Container } from 'utilities/UI/Common.styled';
import { getFavoriteCars } from 'utilities/api';

const FavoritesPage = () => {
  const [favCars, setFavCars] = useState(null);

  useEffect(() => {
    getFavoriteCars().then(res => setFavCars(res));
  }, []);
  return (
    <Container>
      <CardGallery cars={favCars} />
    </Container>
  );
};

export default FavoritesPage;
