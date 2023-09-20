import { Navigation } from 'components/Navigation/Navigation';
import { SideBarBox } from './SideBar.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Page } from 'utilities/UI/Common.styled';

export const SideBar = () => {
  return (
    <Page>
      <SideBarBox>
        <Navigation />
      </SideBarBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </Page>
  );
};
