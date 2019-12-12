import { users } from "../data";

class UserService {
  constructor() {}

  getUser(userId) {
    return users.find(user => user.userid == userId);
  }
}

export default UserService;
