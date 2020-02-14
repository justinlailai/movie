import React from 'react';

import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn';

const LordMoreBtn = ({text, callback}) => (
    <StyledLoadMoreBtn type="button" click={callback}>
        {text}
    </StyledLoadMoreBtn>
)

export default LordMoreBtn;

