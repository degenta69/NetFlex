import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        navigate('/')
    }

    return (
        <div className="h-screen bg-black text-white">
            <div className="flex flex-col w-[50%] mx-auto pt-[8%] max-w-[800px]">
                <h1 className="text-6xl font-normal border-b border-[#282c2d] mb-5 pb-5">Edit Profile</h1>

                <div className="flex">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avatar"
                        className="h-[100px] w-[100px]"
                    />

                    <div className="ml-6 flex-1">
                        <div className="bg-gray-500 p-4 text-lg pl-5 text-white mb-5">
                            {user?.userEmail}
                        </div>

                        <div className="mt-5">
                            <h3 className="border-b border-[#282c2d] pb-2 text-xl font-bold bg-transparent text-gray-400">
                                Plans (Current Plan: Premium)
                            </h3>

                            <div className="mt-5 space-y-4">
                                {/* Dummy Plans */}
                                <div className="flex justify-between p-3 hover:bg-[#282c2d] opacity-80 transition-all rounded items-center">
                                    <div>
                                        <h5 className="font-bold">NetFlex Standard</h5>
                                        <span className="text-xs text-gray-400">1080p</span>
                                    </div>
                                    <button className="bg-[#e50914] px-4 py-2 font-semibold">Subscribe</button>
                                </div>

                                <div className="flex justify-between p-3 hover:bg-[#282c2d] opacity-80 transition-all rounded items-center">
                                    <div>
                                        <h5 className="font-bold">NetFlex Basic</h5>
                                        <span className="text-xs text-gray-400">720p</span>
                                    </div>
                                    <button className="bg-[#e50914] px-4 py-2 font-semibold">Subscribe</button>
                                </div>

                                <div className="flex justify-between p-3 bg-gray-600/30 rounded items-center cursor-not-allowed">
                                    <div>
                                        <h5 className="font-bold text-gray-300">NetFlex Premium</h5>
                                        <span className="text-xs text-gray-400">4K + HDR</span>
                                    </div>
                                    <button className="bg-gray-500 px-4 py-2 font-semibold" disabled>Current Package</button>
                                </div>
                            </div>

                            <button
                                onClick={signOut}
                                className="bg-[#e50914] w-full font-bold p-3 mt-[5%] text-lg cursor-pointer hover:bg-red-700 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
