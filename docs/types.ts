// types.ts

import { IApp } from './app';

export interface IConfig {
  port: number;
  baseUrl: string;
  env: string;
  assetsPath: string;
  assetsPublicPath: string;
}

export interface IModule {
  name: string;
  path: string;
}

export interface IRoute {
  path: string;
  name: string;
  component: string;
}

export interface IState {
  [key: string]: any;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IModuleConfig {
  name: string;
  components: string[];
}

export interface IAppConfig extends IConfig {
  modules: IModuleConfig[];
  routes: IRoute[];
}

export interface IAppState extends IState {
  modules: { [key: string]: any };
}

export interface IAppDispatch {
  (action: IAction): void;
}

export type AppDispatch = (action: IAction) => void;

export type AppThunk = (dispatch: IAppDispatch) => void;

export type AppThunkDispatch = (dispatch: IAppDispatch) => void;

export type AppThunkArgs = {
  dispatch: IAppDispatch;
};

export interface IAppStore {
  state: IAppState;
  dispatch: AppDispatch;
}

export type AppStore = IAppStore;