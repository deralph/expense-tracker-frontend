import React from 'react'

const ChatTest = () => {
    return (
        <div className="bg-[#9933ff39] px-[10%] sm:px-4 py-6  w-full h-[100vh] mx-auto flex flex-col justify-between">
            <div className="h-[92%]">
            <div className="flex items-center mb-4">
                <h3 className="text-gray-800 font-semibold">John Doe</h3>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <img src="/images/User-avatar1.png" alt="Avatar 1" className="h-8 w-8 rounded-full border border-black" />
                    </div>
                    <div className="bg-blue-100 text-gray-800 p-2 rounded-[10px_0_10px_0] ml-2">
                        <p className="text-sm">Hi there! How can I help you?</p>
                    </div>
                </div>
                <div className="flex items-end justify-end mt-4">
                    <div className="bg-[#96f] text-white p-2 rounded-[0_10px_0_10px] mr-2">
                        <p className="text-sm">Sure! I have a question.</p>
                    </div>
                    <div className="flex-shrink-0">
                        <img src="/images/User-avatar.png" alt="Avatar 2" className="h-8 w-8 rounded-full border border-black" />
                    </div>
                </div>
            </div>
            </div>
            <div className="flex items-center mt-4">
                <input type="text" placeholder="Type your message..." className="flex-1 bg-white border-gray-200 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent" />
                <button className="bg-[#96f] text-white rounded-md px-4 py-2 ml-2">Send</button>
            </div>
        </div>

    )
}

export default ChatTest
