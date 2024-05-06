// function Navbar() {
//     return (
//         <div className="navbar">
//             <div className="logo">logo</div>
//             <div className="profile-container">
//                 <div className="username">username</div>
//                 <button>Logout</button>
//             </div>
//         </div>
//     )
// }

// export default Navbar;
function Navbar() {
    return (
        <div className="navbar bg-blue-500 text-white flex justify-between items-center p-4 ">
            <div className="logo text-xl">logo</div>
            <div className="profile-container flex items-center">
                <div className="username mr-4">username</div>
                <button className="px-4 py-2 rounded bg-white text-blue-500 hover:bg-blue-700 hover:text-white">Logout</button>
            </div>
        </div>

    )
}

export default Navbar;