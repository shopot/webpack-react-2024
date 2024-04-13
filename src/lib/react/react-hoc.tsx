import { FC, SuspenseProps, Suspense, JSX } from 'react';

export function withSuspense<WrappedProps extends object>(
  WrappedComponent: FC<WrappedProps>,
  suspenseProps: SuspenseProps,
): FC<WrappedProps> {
  return function WrapperComponent(props: WrappedProps): JSX.Element {
    return (
      <Suspense {...suspenseProps}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
