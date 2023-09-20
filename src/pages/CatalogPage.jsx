import { CardGallery } from 'components/CardGallery/CardGallery';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import { Container, LoadMore } from 'utilities/UI/Common.styled';
import { getCars } from 'utilities/api';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCars(page)
      .then(res => {
        if (page !== 1) {
          setCars(prev => [...prev, ...res]);
        } else {
          setCars(res);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const incrementPage = () => {
    setPage(prev => prev + 1);
  };
  return (
    <Container>
      {loading && <Loader />}
      {cars && <CardGallery cars={cars} />}
      <LoadMore type="button" onClick={incrementPage}>
        Load more
      </LoadMore>
    </Container>
  );
};

export default CatalogPage;
