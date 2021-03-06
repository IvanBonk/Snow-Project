import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from 'shared/constants/routes.constants';
import { PetProfile } from 'shared/models';
import { fetchPetProfile, clearPetProfile } from 'store/pet/actions/pet.actions';
import { PetProps, RootState } from './props.models';
import style from './pet.module.scss';

import { ObservationsComponent } from './components/observations/observations.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { BackBtn } from './components/back-btn/back-btn.component';
import { AddPetToCompare } from 'shared/components/add-pet-to-compare/add-pet-to-compare.component';
import { ErrorHandling } from 'shared/components/error-handling/error-handling.component';
import { DogPicture } from 'shared/components/dog-picture/dog-picture.component';
import {Skeleton} from './components/skeleton/skeleton.component';

export const Pet: React.FC<PetProps> = props => {
  const petId: string = props.match.params.id;
  const dispatch = useDispatch();

  const petProfile: PetProfile = useSelector((state: RootState) => state.pet.currentPet);
  const loading: boolean = useSelector((state: RootState) => state.pet.loading);
  const error: string = useSelector((state: RootState) => state.pet.errors);
  const { imgUrl, breed, characteristics, observations, additionalInfo, _id } = petProfile;

  const dataReady = !!petProfile.breed;

  useEffect(() => {
    dispatch(fetchPetProfile.request(petId));
    return () => {
      dispatch(clearPetProfile);
    };
  }, []);

  if (error) {
    return (
      <Fragment>
        <div className={style.container}>
          <ErrorHandling />
        </div>
      </Fragment>
    );
  }
  if(loading) {
    return <div className={style.container}><Skeleton/></div>
  }
  
  return (
    <Fragment>
      {dataReady && (
        <div>
          <h1 className={style.pageHeader}>{breed}</h1>
          <div className={style.responsiveContainer}>
            <DogPicture images={imgUrl} />
            <div className={style.responsiveItem}>
              <div className={style.addContainer}>
                <AddPetToCompare id={_id} />
              </div>
              <section className={style.characteristicContainer}>
                <h2 className={style.sectionHeader}>Характеристики</h2>
                <CharacteristicsComponent data={characteristics} />
              </section>
            </div>
          </div>
          <div className={style.container}>
            <section>
              <h2 className={style.sectionHeader}>Спостереження</h2>
              <ObservationsComponent data={observations} />
            </section>
            <section>
              <h2 className={style.sectionHeader}>Додаткова інформація</h2>
              <AdditionalInfoComponent data={additionalInfo} />
            </section>
            <Link to={ROUTES.starterPack.route(_id)} className={style.starterBtn}>
              <span className="material-icons">info</span>
              <span className={style.starterBtnText}> Що необхідно для того, щоб завести собаку?</span>
            </Link>
            <BackBtn />
          </div>
        </div>
      )}
    </Fragment>
  );
};
