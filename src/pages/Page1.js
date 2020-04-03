import React from 'react';
import Container from 'components/Container'; //styled component
import Button from 'components/Button'; //styled component

import { useHistory } from 'react-router-dom';

const Page1 = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: '/page2',
            state: {a:1, b:2}
        });
    }

    return (
        <Container>
            <p>Page1</p>

            <Button onClick={handleClick}>Go to Page2</Button>
        </Container>
    );
}

export default Page1;