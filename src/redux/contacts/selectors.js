export const getContacts = state => {
  return state.contacts.items;
};
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return (
    contacts &&
    contacts?.filter(({ name }) => {
      return name?.toLowerCase().includes(normalizedFilter);
    })
  );
};
