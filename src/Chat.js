import React, { useState } from 'react'
import "./Chat.css"
import Profile from './Profile'
function Chat() {
    const [Profile_info, setProfile_info] = useState(false);
    const [hasFocus, setFocus] = useState(false);


    return (
        <>
            <div className="w-full relative">
                {/* Top Profile Nav */}
                <div className="bg-background w-full h-16 top flex justify-between items-center px-5 border-l border-r border-border sticky top-0 " >
                    <div className="flex items-center cursor-pointer " onClick={() => setProfile_info(!Profile_info)}>
                        <div className="h-10 w-10">
                            <img src="https://pps.whatsapp.net/v/t61.24694-24/s96x96/261913726_1805968076254935_4134978145641290972_n.jpg?ccb=11-4&oh=344afa599d410d9532dc9bc0f10766e6&oe=61A7D36C" alt="" className="h-full w-full rounded-full" />
                        </div>
                        <div className="px-3">
                            <p className="">Mayank Manan</p>
                            <p className="text-xs">last seen today at 11:34 AM</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                            <svg viewBox="0 0 24 24" width="28" height="28" class=""><path className="fill-current text-Nav_icon" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                        </button>
                        <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                            <svg className="h-6 w-6"><path className="fill-current text-Nav_icon" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                        </button>
                    </div>
                </div>
                {/* scroll to bottom */}
                <div className="absolute right-0 bottom-16 m-5">
                    <button className="bg-white shadow-md h-12 w-12 rounded-full flex items-center justify-center" >
                        <svg viewBox="0 0 19 20" width="19" height="20" className="fill-current text-Nav_icon"><path d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path></svg>
                    </button>
                </div>
                {/*Chats */}
                <div style={{ backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")` }} className="background_Image py-3 overflow-y-scroll overflow-x-hidden ">
                    {/*Chats text */}

                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2 truncate">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>
                    <div className="">
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">Hey hello, how are you doing</p>
                        <p className="bg-white w-max px-3 py-1 rounded-tr-lg rounded-br-lg rounded-bl-lg mx-3 my-2">What's going on</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">I am fine</p>
                        <p className="bg-chat_sender_green w-max px-3 py-1 rounded-tl-lg rounded-br-lg rounded-bl-lg mx-3 my-1 text-right">What about you</p>
                    </div>

                </div>
                {/* Send Message window */}
                <div className="bg-background w-full h-16 top flex justify-between items-center px-5 border-l border-r border-border sticky top-0 ">
                    <div className="flex items-center gap-5 ">
                        <button className="">
                            <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
                        </button>
                        <button className="">
                            <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
                        </button>
                    </div>
                    <div className="flex items-center w-full bg-white h-10 mx-5 rounded-full">
                        <textarea type="text"
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            className="w-full h-10 rounded-full resize-none overflow-hidden  px-5 appearance-none outline-none focus:outline-none py-2 "
                            placeholder="Type a message"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-5">
                        {hasFocus ? null :
                            <button>
                                <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
                            </button>
                        }

                        {hasFocus ?
                            <button>
                                <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                            </button>
                            : null}
                    </div>
                </div>
            </div>
            <div>
                {Profile_info ? <Profile /> : null}

            </div>
        </>
    )
}

export default Chat
