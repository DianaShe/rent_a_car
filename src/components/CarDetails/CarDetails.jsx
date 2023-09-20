import {
  Condition,
  ConditionWrapper,
  Descr,
  Highlight,
  Image,
  SubTitle,
  Title,
} from './CarDetails.styled';
import { FeaturesList } from 'components/FeaturesList/FeaturesList';
import { Accent } from 'utilities/UI/Common.styled';

export const CarDetails = ({ car }) => {
  const {
    make,
    img,
    year,
    description,
    functionalities,
    mileage,
    rentalConditions,
    rentalPrice,
    address,
    engineSize,
    fuelConsumption,
    type,
    model,
    id,
    accessories,
  } = car;

  const city = address.split(',')[1];

  const country = address.split(',')[2];

  const carMileage = (mileage / 1000).toFixed(3).split('.').join(',');

  const features = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const functions = [...accessories, ...functionalities];

  const conditions = [
    ...rentalConditions.split('\n'),
    `Meliage: ${carMileage}`,
    `Rental Price: ${rentalPrice}`,
  ];

  return (
    <div>
      <Image src={img} alt={make} />
      <Title>
        {make}
        <Accent> {model}</Accent>, {year}
      </Title>

      <FeaturesList features={features} />

      <Descr>{description}</Descr>
      <div>
        <SubTitle>Accessories and functionalities:</SubTitle>
        <FeaturesList features={functions} />
      </div>
      <div>
        <SubTitle>Rental Conditions:</SubTitle>
        <ConditionWrapper>
          {conditions.map(item => (
            <Condition key={item}>
              {item.split(':')[0]}
              {item.includes(':') && (
                <Highlight>: {item.split(':')[1]}</Highlight>
              )}
            </Condition>
          ))}
        </ConditionWrapper>
      </div>
    </div>
  );
};
