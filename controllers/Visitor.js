import _Visitor from "../models/visitors";
import crypto from "crypto";
import argon2 from "argon2";
import {
  NotFoundError,
  UnauthorizedError,
} from "../error_handling/userFacingErrors";
import jwt from "jsonwebtoken";
export const visitorSignUp = async (email, password, name, company) => {
  /* Hashing Password to save in Database */
  const salt = crypto.randomBytes(32);
  const passwordHashed = await argon2.hash(password, { salt });
  // Create New Visitor
  await new _Visitor({
    email,
    password: passwordHashed,
    name,
    company,
    salt: salt.toString("hex"),
  }).save();
  // Auto sign in after sign up
  const data = await visitorSignIn(email, password);
  return data;
};
export const visitorSignIn = async (email, password) => {
  const visitor = await getOneVisitorByEmail(email);
  // verify password
  const correctPassword = await visitor.isCorrectPassword(password);
  if (!correctPassword)
    throw new UnauthorizedError("Password Provided Is Incorrect", { email });

  const visitorData = {
    id: visitor._id,
    email: visitor.email,
    name: visitor.name,
  };
  // Store data in cookie for further requests->authorization
  const token = storeCookieToken(visitorData);
  return { visitor, token };
};

export const updateVisitorByID = async (id, updateObject) => {
  const visitor = await getVisitorByID(id);
  visitor.set(updateObject);
  return await visitor.save();
};

export const getAll = async () => {
  return await _Visitor.find();
};


export const getVisitorByID = async (id) => {
  const visitor = await _Visitor.findById(id);
  if (!visitor)
    throw new NotFoundError("No Visitor Profile Found", {
      visitorID: id,
    });
  return visitor;
};
export const getOneVisitorByFields = async (keyAndValueObject) => {
  const visitor = await _Visitor.findOne(keyAndValueObject);
  if (!visitor)
    throw new NotFoundError(
      "There Is No Visitor Profile Against These Attributes",
      {
        ...keyAndValueObject,
      }
    );
  return visitor;
};
export const getOneVisitorByEmail = async (email) => {
  const visitor = await _Visitor.findOne({ email });
  if (!visitor)
    throw new NotFoundError("There Is No Visitor Profile Against This Email", {
      email,
    });
  return visitor;
};

export const storeCookieToken = (userData) => {
  /* Issue Token */
  return jwt.sign(userData, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
