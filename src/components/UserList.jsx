function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <p key={user.id} className="user-item">
          {user.name}
        </p>
      ))}
    </>
  );
}

export default UserList;
