import React, { ChangeEvent }  from 'react';

import { Input } from '../Input';
import { DropDown } from '../Dropdown';
import { IOption } from '../../types';
import { InputWithDropDownStyled } from './style';

interface Props {
    inputValue: string;
    dropDownOptions: IOption[];
    handleChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClickOption: (optionId: number) => void;
}

export function InputWithDropDown(props: Props) {
    const { inputValue, dropDownOptions, handleChangeInputValue, handleClickOption } = props;
    const showDropDown = dropDownOptions.length > 0;

    return (
        <InputWithDropDownStyled>
            <Input
                value={inputValue}
                handleChangeInputValue={handleChangeInputValue}
            />

            { showDropDown &&
                <DropDown
                    options={dropDownOptions}
                    handleClickOption={handleClickOption}
                />
            }
        </InputWithDropDownStyled>
    );
}
