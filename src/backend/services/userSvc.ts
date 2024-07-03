"use server";

import { Credentials, User } from "@/backend/api/types";
import {
  dbCreateUser,
  dbDeleteUser,
  dbEditUser,
  dbGetUserCredentials,
  dbGetUser,
  dbGetUserFields,
} from "../repository/userRepo";
import { RegisterSchema } from "@/backend/api/types";
import { registerSchema } from "@/backend/api/schemas";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });

const saltRounds = 10;

export async function createUser(user: RegisterSchema) {
  console.info("userSvc - createUser");
  console.info(user);
  try {
    await registerSchema.parseAsync(user);
    const hashed_password = await bcrypt.hash(user.password, saltRounds);
    const updatedUser = user as User;
    updatedUser.password = hashed_password;
    await dbCreateUser(updatedUser);
  } catch (e) {
    console.warn(e);
    throw e;
  }
}
// TODO: Test
export async function deleteUser(username: string) {
  console.info("userSvc - deleteUser");
  console.info(username);
  try {
    await dbDeleteUser(username);
  } catch (e) {
    console.warn(e);
  }
}
// TODO: Test
export async function editUser(user: User) {
  console.info("userSvc - editUser");
  console.info(user);
  try {
    await dbEditUser(user);
  } catch (e) {
    console.warn(e);
  }
}
// TODO: Test
export async function getUser(username: string) {
  console.info("userSvc - getUser");
  console.info(username);
  try {
    return await dbGetUser(username);
  } catch (e) {
    console.warn(e);
  }
}

export async function usernameExists(username: string) {
  console.info("userSvc - usernameExists");
  console.info(username);
  try {
    const user = await dbGetUser(username);
    console.log(user);
    if (user.length) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
// TODO: Test
export async function getUserAttr(username: string, attr: string[]) {
  console.info("userSvc - getUserAttr");
  console.info(username, attr);
  try {
    return await dbGetUserFields(username, attr);
  } catch (e) {
    console.warn(e);
  }
}
async function authUser(username: string, password: string) {
  const results = await dbGetUserCredentials(username);
  if (results.length != 1) {
    throw new Error("User does not exist");
  }
  const hashed_password = results[0].password;
  const success = await bcrypt.compare(password, hashed_password);
  if (success) {
    return (await dbGetUser(username))[0];
  } else {
    throw new Error("Invalid credentials");
  }
}
export async function loginUser(credentials: Credentials) {
  console.info("userSvc - loginUser");
  console.info(credentials);
  try {
    const user = await authUser(credentials.username, credentials.password);
    if (!user) {
      throw new Error("Login failed");
    }
    const jwt_secret = process.env.JWT_SECRET;
    if (!jwt_secret) {
      throw new Error("No JWT_SECRET defined");
    }
    return jwt.sign({ userId: user.id }, jwt_secret, {
      expiresIn: "1m",
    });
  } catch (e) {
    console.warn(e);
    throw e;
  }
}
export async function logoutUser(sessionid: string) {
  console.info("userSvc - logoutUser");
  console.info(sessionid);
  try {
    // TODO: Logout logic here
  } catch (e) {
    console.warn(e);
  }
}

export async function logoutEverywhereUser(username: string) {
  console.info("userSvc - logoutEverywhereUser");
  console.info(username);
  try {
    // TODO: Logout everywhere logic here
  } catch (e) {
    console.warn(e);
  }
}
