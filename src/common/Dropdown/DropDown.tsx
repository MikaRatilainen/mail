import React from 'react';

import { DropDownStyled, Option } from './style';
import { IOption } from '../../types';

interface Props {
    options: IOption[];
    handleClickOption: (optionId: number) => void;
}

export function DropDown(props: Props) {
    const { options, handleClickOption } = props;
    const optionElements = getOptionElements(options, handleClickOption);

    return (
        <DropDownStyled>
            {optionElements}
        </DropDownStyled>
    );
}

function getOptionElements(options: IOption[], handleClickOption: (optionId: number) => void): JSX.Element[] {
    return options.map(option => {
        return (
            <Option
                key={option.id}
                onClick={() => handleClickOption(option.id)}
            >
                {option.value}
            </Option>
        );
    });
}
