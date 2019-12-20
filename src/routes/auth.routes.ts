import { Router, Request, Response, NextFunction } from 'express';
import { SessionController } from '../controllers/session.controller';
import { LoginController } from '../controllers/login-controller';
import { LogoutController } from '../controllers/logout-controller';
import * as Users from '../controllers/user.controller';
import * as Role from '../controllers/role.controller';
import { Roles } from '../models/users.model';

const LOGIN = '/login';
const IS_LOGGED_IN = '/logged-in';
const LOGOUT = '/logout';
const REGISTER = '/register';
const APPROVED_DOMAINS = '/approved-domains';
export const UserRoutes = Router()
    .post(REGISTER, Role.requireRole(Roles.ADMIN), Users.register) // Get from api ADMIN page
    .post(LOGIN, LoginController)
    .post(IS_LOGGED_IN, SessionController)
    .get(LOGOUT, LogoutController)
    .get('/', Users.getAll)
    .get(APPROVED_DOMAINS, Users.getArrovedDomains)
    .put('/', Users.update)
    .delete('/', Users.remove);
