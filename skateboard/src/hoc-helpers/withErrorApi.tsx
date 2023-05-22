import { useState, ComponentType } from 'react';

import ErrorMessage from '@components/ErrorMessage';

type injectedProps = {
    errorApi: Boolean,
    setErrorApi: () => void,
};

export const withErrorApi = (View: ComponentType<any>) => {
    return (props:any) => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                        <View 
                            setErrorApi={setErrorApi}
                            {...props}
                        /> 
                    )
                }
            </>
        );
    };
};
//TODO 