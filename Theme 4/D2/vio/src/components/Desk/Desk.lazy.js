import React, { lazy, Suspense } from 'react';

const LazyDesk = lazy(() => import('./Desk'));

const Desk = props => (
  <Suspense fallback={null}>
    <LazyDesk {...props} />
  </Suspense>
);

export default Desk;
