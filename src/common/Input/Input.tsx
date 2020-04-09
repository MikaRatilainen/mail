import * as React from 'react';

import { InputStyled } from './style';
import {ChangeEvent} from "react";

interface Props {
    value: string;
    handleChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: Props) {
    const { value, handleChangeInputValue } = props;

    return (
        <InputStyled
            value={value}
            onChange={handleChangeInputValue}
        />
    );
}
