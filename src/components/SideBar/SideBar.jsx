import { Navigation } from 'components/Navigation/Navigation';
import { SideBarBox } from './SideBar.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Page } from 'utilities/UI/Common.styled';
import { Contacts } from 'components/Contacts/Contacts';

export const SideBar = () => {
  return (
    <Page>
      <SideBarBox>
        <Navigation />
        <Contacts />
      </SideBarBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </Page>
  );
};
