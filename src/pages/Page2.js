import React from 'react';

import Button from 'components/Button'; //styled component
import Wrapper from 'components/Wrapper'; //styled component

import { useHistory } from 'react-router-dom';

const Page2 = () => {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    return (
        <div>
            <Wrapper>
                <p>This is Page 2</p>
            </Wrapper>
            <Button primary onClick={handleClick}>Go Back</Button>
        </div>
    );
}

export default Page2;