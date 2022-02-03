import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children?: ReactNode;
  title: string;
}

const DefaultLayout = ({ children, title }: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Container>
      {children}
    </Container>
  </>
);

export default DefaultLayout;
