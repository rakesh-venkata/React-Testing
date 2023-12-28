import { GridRowId } from "@mui/x-data-grid";

export interface IPost {
    userId : number;
    userName : string;
    _id : string;
    __v : number;
}

export interface IPlayers {
    users : IPost[];
}

export interface IUser {
    userId : GridRowId;
}