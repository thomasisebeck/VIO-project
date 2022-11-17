import React, { lazy, Suspense } from 'react';

const LazyStage = lazy(() => import('./Stage'));

const Stage = props => (
  <Suspense fallback={null}>
    <LazyStage {...props} />
  </Suspense>
);

export default Stage;
