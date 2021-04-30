import React from 'react';

import bannerImage from './../../../../static/banners/add-entry.jpg';

import { NarrowContainer } from '../../../../components/common/containers';
import { CenteredText } from '../../../../components/common/texts';

import AddEntryForm from '../../../../components/backend/forms/AddEntry';
import Banner from '../../../../components/backend/Banner';

const AddEntryContainer = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      Add new entry
    </Banner>
    <NarrowContainer>
      <CenteredText>
        Choose operation type, write down all the needed info and select
        category that'll match Your investment or saving entry.
      </CenteredText>
      <AddEntryForm />
    </NarrowContainer>
  </>
);

export default AddEntryContainer;
