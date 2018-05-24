import { observable, action } from 'mobx';

export interface IUserStore {
	login: string;
	password: string;

	setLogin(login: string): void;
	setPassword(password: string): void;
	tryToSignIn(): Promise<boolean>;
}

export class UserStore implements IUserStore {
	@observable login: string = '';
	@observable password: string = '';

	@action.bound
	setLogin(login: string): void {
		this.login = login;
	}

	@action.bound
	setPassword(password: string): void {
		this.password = password;
	}

	tryToSignIn() {
		if (this.login === 'test' && this.password === 'test') {
			return Promise.resolve(true);
		}

		return Promise.resolve(false);
	}
}
