 
// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const FriendsList = () => {
  const friendAll = [
    {
      url: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/314888554_838477317494214_7152297631767551080_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=V6I5xmItpHsQ7kNvgFi_zwU&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=AooJMPbVQMWMubKiljL0hep&oh=00_AYBdKxAXNM7cCNZHNCUCi14H7Ws20QW1mGiW1aTT5zYAwA&oe=6719AD1C",
      roomNo: "C1",
      name: "Liton",
      age: 22,
      city: "Natore",
      hobbies: ["Football", "Cricket", "Gaming"],
      profession: "Student",
    },
    {
      url: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/437523935_1180432170034830_1326131319228269714_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tmlt37SB6lgQ7kNvgF4dd66&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=AyP1ZwezuU25W2OlWj8AFZQ&oh=00_AYAPyRkxw5txACsmgold1pf2pcwrWvLQR-8kZSW_FSanXA&oe=6719A819",
      roomNo: "B",
      name: "Noman",
      age: 22,
      city: "Dhaka",
      hobbies: ["Reading", "Coding", "Travelling"],
      profession: "Software Developer",
    },
    {
      url: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/433139907_916918603767307_3097314659747124410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ddVxZP1haQ4Q7kNvgGGgF6q&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=AoxBRBsg-oFoNiZZowawHfv&oh=00_AYBkpPZyjlfZRh2RpbdA_pE72tV2KWdDE_LiAhr6bJ0xdw&oe=6719B3E1",
      roomNo: "C2",
      name: "Nakib",
      age: 24,
      city: "Barishal",
      hobbies: ["Photography", "Hiking", "Football"],
      profession: "Photographer",
    },
    {
      url: "./public/shihab.jpg",
      roomNo: "A",
      name: "Shihab",
      age: 23,
      city: "Rangpur",
      hobbies: ["Cricket", "Music", "Drawing"],
      profession: "Artist",
    },
  ];

  const [friends, setFriends] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulating API call
    const fetchFriends = () => {
      setFriends(friendAll);
    };

    fetchFriends();
  }, []);

  // Filter friends based on search term
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center m-12">
        <h1 className="text-5xl">Friends List</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 p-2 bg-gray-200 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center mx-auto gap-12 md:gap-32">
        {filteredFriends.map((friend) => (
          <div key={friend.name} className="card w-auto shadow-xl">
            <img
              className="w-[500px] h-[300px] rounded-lg"
              src={friend.url}
              alt={friend.name}
            />
            <div className="card-body">
              <h1 className="card-title">Room No: {friend.roomNo}</h1>
              <h2 className="card-title">Name: {friend.name}</h2>
              <h2>Hobby: {friend.hobbies.join(", ")}</h2>
              <p>Age: {friend.age}</p>
              <p>Past Address: {friend.city}</p>
              <p>Present Address: Jamalpur</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
