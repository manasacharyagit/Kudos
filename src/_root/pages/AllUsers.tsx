// import UserCard from "@/components/shared/UserCard";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// // import { Loader, UserCard } from "@/components/shared";
// import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
// import { Loader } from "lucide-react";

// const AllUsers = () => {
//   const { toast } = useToast();

//   const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

//   if (isErrorCreators) {
//     toast({ title: "Something went wrong." });
    
//     return;
//   }


//   return (

    
//     <div className="common-container">
//       <div className="user-container">
//       <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
//             <img 
//             src="/assets/icons/search.svg"
//             width={24}
//             height={24} alt="search" 
//             />
//             <Input
//             type='text'
//             placeholder='Search'
//             className='explore-search'
//             value={searchValue}
//             onChange={(e)=> setSearchValue(e.target.value)}
//             />
//           </div>
//         <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
//         {isLoading && !creators ? (
//           <Loader />
//         ) : (
//           <ul className="user-grid">
//             {creators?.documents.map((creator) => (
//               <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
//                 <UserCard user={creator} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllUsers;

import  { useState } from 'react';
import UserCard from "@/components/shared/UserCard";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Loader } from "lucide-react";

const AllUsers = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  const [searchValue, setSearchValue] = useState('');

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    return null; // or handle the error in a different way
  }

  // Filter the users based on the search query
  const filteredCreators = creators?.documents.filter((creator) =>
    creator?.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="common-container">
      <div className="user-container">
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img 
            src="/assets/icons/search.svg"
            width={24}
            height={24} alt="search" 
          />
          <Input
            type='text'
            placeholder='Search'
            className='explore-search'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
          />
        </div>
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {filteredCreators?.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
