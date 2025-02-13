export interface IUser {
	id: string
	email: string
	password: string
	name: string
	avatarPath: string
	favorites: any
}

// export interface IUserEditInput extends Omit<IUser, 'id' | 'createdAt'> {}
