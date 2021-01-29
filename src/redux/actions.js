import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactsError");

export const changeFilter = createAction("contacts/changeFilter");
