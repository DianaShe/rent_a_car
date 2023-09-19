
import { makeFavorite } from 'utilities/api'

import { CardWrapper, FeaturesWrapper, Icon, Image, ImageWrapper, ModalButton, Title, TitleWrapper } from './Card.styled'
import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'
import { useState } from 'react'
import { FeaturesList } from 'components/FeaturesList/FeaturesList'
import { CarDetails } from 'components/CarDetails/CarDetails'
import { Accent } from 'utilities/UI/Common.styled'

export const Card = ({car}) => {
    const [isShow, setIsShow] = useState(false);

  const onShowModal = () => {
    setIsShow(!isShow);
   
  };
    const {make, img, year, rentalPrice, address, rentalCompany, type, model, id, accessories} = car
    const city = address.split(',')[1]
    const country = address.split(',')[2]
    const carModel = type===model ? null : model
    const length = make.length + model.length
    const features = carModel ? [city, country, rentalCompany, type, carModel, id, accessories[0]] : [city, country, rentalCompany, type, id, accessories[0]] 
    const updateCar = {
        favorite: true,
        ...car,
    }
    
    return (
        <CardWrapper>
            <ImageWrapper>
                <Image src={img} alt={make} />
                <Icon width={18} height={18} onClick={()=> makeFavorite(updateCar)}/> 
            </ImageWrapper>
            <TitleWrapper>
                <Title>{make}
                {length < 20 && <Accent> {model}</Accent>} 
                , {year}</Title>
                <span>{rentalPrice}</span>
            </TitleWrapper>
            <FeaturesWrapper>
                <FeaturesList features={features}/>
            </FeaturesWrapper>
            
            <Button title='Learn more' onClick={onShowModal}/>
            {isShow && (
          <Modal onActive={onShowModal} 
             car={car}>
                <CarDetails car={car}/>
                <a href='tel:+380730000000'>
                <ModalButton title='Rental car' />
                </a>
                
                </Modal>
        )}
        </CardWrapper>
    )
}

