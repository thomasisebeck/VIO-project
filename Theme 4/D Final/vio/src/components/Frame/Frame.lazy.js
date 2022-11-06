import React, { lazy, Suspense } from 'react';

const LazyFrame = lazy(() => import('./Frame'));

const Frame = props => (
  <Suspense fallback={null}>
    <LazyFrame {...props} />
  </Suspense>
);

export default Frame;
