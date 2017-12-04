export interface IUserInfo {
	id: number;
	name: string;
	dept: string;
	WFH: boolean;
	groups: [object];
	product: object
}

export interface ISessionInfo {
	session:[object]
}

// export interface IValue {
// 	prop1:string;
// 	prop2:string;
// }

// export interface IType {
// 	[code: string]: IValue;
// }