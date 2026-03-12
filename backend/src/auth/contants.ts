export enum ROLES {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
}
/**
 *
 * admin can crud anything { Movies },
 * users can crud reviews,
 * moderators can only create, delete reviews
 *
 * */
export const USERS = [
  { id: 1, username: 'admin', password: 'admin123', role: ROLES.admin },
  { id: 2, username: 'user1', password: 'user123', role: ROLES.user },
  { id: 3, username: 'user2', password: 'user456', role: ROLES.user },
  { id: 4, username: 'moderator', password: 'mod123', role: ROLES.moderator },
];
