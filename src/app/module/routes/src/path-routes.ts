import { AppRoutes } from './app-route-interface';

export const LOGIN_PATH: AppRoutes = {
  path: '/login',
  onlyPath: 'login',
  pageTitle: 'Login',
  fatherTitle: '',
};

export const USER_REGISTRATION_PATH: AppRoutes = {
  path: '/user-registration',
  onlyPath: 'user-registration',
  pageTitle: 'Cadastro Usuário',
  fatherTitle: '',
};

export const INFORMATIONS_PATH: AppRoutes = {
  path: '/informations',
  onlyPath: 'informations',
  pageTitle: 'Sobre',
  fatherTitle: '',
};

export const SETTING_PATH: AppRoutes = {
  path: '/settings',
  onlyPath: 'settings',
  pageTitle: 'Configuração',
  fatherTitle: '',
};
