import React from 'react'
import "./profile.css"
function Profile() {


    return (
        <div className="bg-background h-screen ">
            {/* Top Bar */}
            <div className="top_profile bg-background flex items-center px-3 sticky top-0">
                <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                    <svg className="h-6 w-6"><path className="fill-current text-Nav_icon" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
                </button>
                <p className="px-3 text-Nav_icon text-lg">Contact Info</p>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden scroollable_area">
                {/* Profile */}
                <div className="h-96 w-full bg-white ">
                    <div className="flex justify-center">
                        <div className="h-52 w-52 mt-10">
                            <img src="https://pps.whatsapp.net/v/t61.24694-24/261913726_1805968076254935_4134978145641290972_n.jpg?ccb=11-4&oh=f14226776b5010bebcee5250af3e1827&oe=61A770E9" alt="" className="h-full w-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <p className="text-xl">Mayank Manan</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="">+91 8210789094</p>
                    </div>
                </div>
                {/* About */}
                <div className="h-20 w-full bg-white my-3 shadow-sm flex items-center">
                    <div className="px-8">
                        <p className="text-Nav_icon">About</p>
                        <p className="">Hey there! I am using WhatsApp.</p>
                    </div>
                </div>
                {/* Media */}
                <div className="h-36 profile_width bg-white my-3 shadow-sm flex items-center ">
                    <div className="">
                        <div className="flex justify-between  px-8 profile_width">
                            <p className="text-Nav_icon">Media, links and docs</p>
                            <p className="text-Nav_icon">36 </p>
                        </div>
                        <div className="flex mx-8 mt-3 gap-5">
                            <div className="media_image">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADwAIQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAgMEBgUBAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAACpF2VO48Pd5ZEJGBtFZpq0ruevcgNVJCdNm2QKR1GcVFZAJ2R4nInIfFa2UjD/xAAnEAABBAEDAgYDAAAAAAAAAAABAAIDEQQSEyEFYRQiMUJRUzJSYv/aAAgBAQABPwB0gJNFawTSNV6qjq+QtDfhY+MwwsJY26Ww5wJbDGjjZH1RLM3IJacxtke1eKP1hYEgdjtL3C02aCMaTK1S5uKygZAupzslnBjNilqUWBDQBBU3TYfaxHp0XlKmGzK9jWgrdd+oQe0DzEIytAHdSGyswVkuWo9k7MyD6vW7kEgbpV5Oqt0p41C3E6r5Wkd0WtJBHogOeDwi2iDZpNkYCbFrf/kJn4uKZzRRe4tongKMk2t5/Zf/xAAeEQACAgAHAAAAAAAAAAAAAAAAAQIREiExQVFxgf/aAAgBAgEBPwBR6HS2LjwJPQksjwc0SmmqLQyjAf/EAB8RAAMAAQMFAAAAAAAAAAAAAAABAhEDElEhIjFxgf/aAAgBAwEBPwB03z0F7O7kdLyRSbPotOsEaVTWWzDEZN6P/9k=" alt="" className="object-cover media_image_height w-full rounded-xl" />
                            </div>
                            <div className="media_image">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADwAIQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAgMEBgUBAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAACpF2VO48Pd5ZEJGBtFZpq0ruevcgNVJCdNm2QKR1GcVFZAJ2R4nInIfFa2UjD/xAAnEAABBAEDAgYDAAAAAAAAAAABAAIDEQQSEyEFYRQiMUJRUzJSYv/aAAgBAQABPwB0gJNFawTSNV6qjq+QtDfhY+MwwsJY26Ww5wJbDGjjZH1RLM3IJacxtke1eKP1hYEgdjtL3C02aCMaTK1S5uKygZAupzslnBjNilqUWBDQBBU3TYfaxHp0XlKmGzK9jWgrdd+oQe0DzEIytAHdSGyswVkuWo9k7MyD6vW7kEgbpV5Oqt0p41C3E6r5Wkd0WtJBHogOeDwi2iDZpNkYCbFrf/kJn4uKZzRRe4tongKMk2t5/Zf/xAAeEQACAgAHAAAAAAAAAAAAAAAAAQIREiExQVFxgf/aAAgBAgEBPwBR6HS2LjwJPQksjwc0SmmqLQyjAf/EAB8RAAMAAQMFAAAAAAAAAAAAAAABAhEDElEhIjFxgf/aAAgBAwEBPwB03z0F7O7kdLyRSbPotOsEaVTWWzDEZN6P/9k=" alt="" className="object-cover media_image_height w-full rounded-xl" />
                            </div>
                            <div className="media_image">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADwAIQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAgMEBgUBAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAACpF2VO48Pd5ZEJGBtFZpq0ruevcgNVJCdNm2QKR1GcVFZAJ2R4nInIfFa2UjD/xAAnEAABBAEDAgYDAAAAAAAAAAABAAIDEQQSEyEFYRQiMUJRUzJSYv/aAAgBAQABPwB0gJNFawTSNV6qjq+QtDfhY+MwwsJY26Ww5wJbDGjjZH1RLM3IJacxtke1eKP1hYEgdjtL3C02aCMaTK1S5uKygZAupzslnBjNilqUWBDQBBU3TYfaxHp0XlKmGzK9jWgrdd+oQe0DzEIytAHdSGyswVkuWo9k7MyD6vW7kEgbpV5Oqt0p41C3E6r5Wkd0WtJBHogOeDwi2iDZpNkYCbFrf/kJn4uKZzRRe4tongKMk2t5/Zf/xAAeEQACAgAHAAAAAAAAAAAAAAAAAQIREiExQVFxgf/aAAgBAgEBPwBR6HS2LjwJPQksjwc0SmmqLQyjAf/EAB8RAAMAAQMFAAAAAAAAAAAAAAABAhEDElEhIjFxgf/aAAgBAwEBPwB03z0F7O7kdLyRSbPotOsEaVTWWzDEZN6P/9k=" alt="" className="object-cover media_image_height w-full rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delete */}
                <div className="w-full bg-white my-3 py-2 shadow-sm flex items-center">
                    <div className="px-8 flex gap-8 items-center text-Nav_icon">
                        <div className="flex gap-3 items-center">
                            <svg viewBox="0 0 16 15" height="24" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M8.3 10.2l-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path></svg>
                            <p className="text-lg mb-1">Starred messages</p>
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="w-full bg-white my-3 py-2 shadow-sm flex items-center">
                    <div className="gap-3 flex flex-col">
                        <div className="px-8 flex gap-8 items-center text-danger">
                            <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg>
                            <p className="text-lg mb-1">Block Mayank Manan</p>
                        </div>
                        <div className="px-8 flex gap-8 items-center text-danger">
                            <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path></svg>
                            <p className="text-lg mb-1">Report Mayank Manan</p>
                        </div>
                    </div>
                </div>
                {/* Delete */}
                <div className="w-full bg-white my-3 py-2 shadow-sm flex items-center">
                    <div className="px-8 flex gap-8 items-center text-danger">
                        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path></svg>
                        <p className="text-lg mb-1">Delete Chat</p>
                    </div>
                </div>
                <div className="bg-background h-6"></div>
            </div>

        </div>
    )
}

export default Profile
