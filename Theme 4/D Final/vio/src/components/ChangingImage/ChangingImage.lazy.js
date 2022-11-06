import React, { lazy, Suspense } from 'react';

const LazyChangingImage = lazy(() => import('./ChangingImage'));

const ChangingImage = props => (
  <Suspense fallback={null}>
    <LazyChangingImage {...props} />
  </Suspense>
);

export default ChangingImage;
