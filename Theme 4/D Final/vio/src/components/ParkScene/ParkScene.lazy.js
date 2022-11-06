import React, { lazy, Suspense } from 'react';

const LazyParkScene = lazy(() => import('./ParkScene'));

const ParkScene = props => (
  <Suspense fallback={null}>
    <LazyParkScene {...props} />
  </Suspense>
);

export default ParkScene;
