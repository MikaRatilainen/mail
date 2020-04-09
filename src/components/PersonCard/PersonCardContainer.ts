import React, { ChangeEvent } from 'react';

import { PersonCard } from './PersonCard';
import { GitUser, GitUserResponse, IOption } from '../../types';

const USERS_URL = 'https://api.github.com/search/users?q=';

interface Props {

}

interface State {
    users: GitUser[];
    inputValue: string;
    dropDownOptions: IOption[];
    selectedOptionId: number | null;
}

export class PersonCardContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            users: [],
            inputValue: '',
            selectedOptionId: null,
            dropDownOptions: [],
        };
    }

    render() {
        const dropDownOptions = this.state.selectedOptionId ? [] : this.state.dropDownOptions;
        const selectedUser = this.state.users.find(user => user.id === this.state.selectedOptionId);

        return React.createElement(PersonCard, {
            selectedUser,
            inputValue: this.state.inputValue,
            dropDownOptions,
            handleChangeInputValue: this.handleChangeInputValue,
            handleClickOption: this.handleClickOption,
        });
    }

    handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;

        this.setState({
            inputValue: value,
            selectedOptionId: null,
        });

        if (value.length >= 3) {
            this.getUsers(value);
        }
    }

    getUsers = async (value: string) => {
        const users = await this.requestUsers(value);
        const dropDownOptions = users.map(({ id, login }) => ({ id, value: login }));

        this.setState({
            users,
            dropDownOptions,
        });
    }

    requestUsers = async (value: string): Promise<GitUser[]> => {
        const url = `${USERS_URL}${value}`;
        const response = await fetch(url);

        if (response.ok) {
            const resObj: GitUserResponse = await response.json();

            return resObj.items;
        } else {
            console.log('Ошибка: ' + response.status);

            return [];
        }
    }

    handleClickOption = (optionId: number): void => {
        const selectedOption = this.state.dropDownOptions.find(option => option.id === optionId);

        this.setState((state) => ({
            inputValue: selectedOption?.value || state.inputValue,
            selectedOptionId: optionId,
        }));
    }
}