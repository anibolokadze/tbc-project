// import { getUsers } from "../../../../api";
// import DeleteUser from "../../../components/DeleteUser";
// import UserCreateButton from "../../../components/UserCreateButton";
// import UserEditButton from "../../../components/UserEditButton";
// import { User } from "../../../types";

// const AdminPage = async () => {
//   const users = await getUsers();
//   return (
//     <div className="h-full flex flex-col gap-10 max-w-full lg:max-w-[70%] mx-10 lg:mx-auto">
//       <UserCreateButton />

//       <div className="flex flex-col">
//         {users.length ? (
//           <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-blue-300 dark:bg-blue-500">
//             <div>Name</div>
//             <div>Email</div>
//             <div>Age</div>
//           </div>
//         ) : (
//           ""
//         )}

//         {users.map((user: User) => (
//           <div
//             key={user.id}
//             className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#acc5f2] dark:hover:bg-blue-300/50 "
//           >
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//             <p>{user.age}</p>
//             <p className="text-right">
//               <UserEditButton user={user} />
//             </p>
//             <p className="text-right">
//               <DeleteUser id={user.id} />
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
