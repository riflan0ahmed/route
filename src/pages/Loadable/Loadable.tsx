import { ComponentType, Suspense } from "react";
import Loader from "../Loader/Loader";

function loadable<P>(Component: ComponentType & any) {
    return function WithSuspense(props: P) {
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        );
    };
}

export default loadable;
