import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Navigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      <button className="btn btn-primary">
        <Link to="/kanbas/signin" className="btn btn-warning w-100">
          sign in
        </Link>
      </button>
      <button className="btn btn-danger">
        <Link to="/kanbas/signup" className="btn btn-warning w-100">
          sign up
        </Link>
      </button>
      <button className="btn btn-warning">
        <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
          Users
        </Link>
      </button>
      {account && (
        <div>
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger" onClick={signout}>
            Signout
          </button>
          <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
