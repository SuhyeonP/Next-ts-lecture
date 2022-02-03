import React from 'react';
import DefaultLayout, { ILayoutProps } from '@/layouts/DefaultLayout';

const StoreLayout = ({ children, title }: ILayoutProps): JSX.Element => (
  <DefaultLayout title={title}>
    {children}
  </DefaultLayout>
);

export default StoreLayout;
