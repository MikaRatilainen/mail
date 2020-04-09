import React, { ChangeEvent } from 'react';

import { InputWithDropDown } from '../../common/InputWithDropdown';
import {GitUser, IOption} from '../../types';
import { PersonCardStyled } from './style';

interface Props {
    selectedUser: GitUser | undefined;
    inputValue: string;
    dropDownOptions: IOption[];
    handleChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClickOption: (optionId: number) => void;
}

export function PersonCard(props: Props) {
    const { selectedUser, inputValue, dropDownOptions, handleChangeInputValue, handleClickOption } = props;

    return (
        <PersonCardStyled>
            <InputWithDropDown
                inputValue={inputValue}
                dropDownOptions={dropDownOptions}
                handleChangeInputValue={handleChangeInputValue}
                handleClickOption={handleClickOption}
            />

            { selectedUser &&
                <>
                    <h3>{selectedUser.login}</h3>
                    <a href={selectedUser.html_url} target={'_blank'}>Репозиторий</a>
                </>
            }
        </PersonCardStyled>
    );
}
