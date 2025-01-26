import Link from "next/link";
import React from "react";

export default function UserDashboard() {
  return (
    <div>
      <h2>UserDashboard</h2>
      <ul className="mt-10 text-red-300">
        <li>
          {" "}
          <Link href={"/dashboard/users/1"}>User 1</Link>
        </li>
        <li>
          {" "}
          <Link href={"/dashboard/users/2"}>User 2</Link>
        </li>
        <li>
          {" "}
          <Link href={"/dashboard/users/3"}>User 3</Link>
        </li>
      </ul>
    </div>
  );
}
