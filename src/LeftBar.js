import React from 'react'
import "./Leftbar.css"
function LeftBar() {

    return (
        <div className="">
            {/* Navigation */}
            <div className="bg-background Nav flex items-center px-5 justify-between sticky top-0">
                <div className="flex items-center">
                    <div className="h-10 w-10">
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                    </div>

                    <p className="font-semibold Nav_icon pl-3 text-sm">BETA</p>
                </div>
                <div className="flex gap-5 items-center">
                    <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                        <svg className="h-6 w-6"><path className="fill-current text-Nav_icon" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                    </button>
                    <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                        <svg className="h-6 w-6"><path className="fill-current text-Nav_icon" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                    </button>
                    <button className="cursor-pointer hover:bg-Nav_icon_background rounded-full flex items-center p-1 ">
                        <svg className="h-6 w-6"><path className="fill-current text-Nav_icon" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="bg-Search_conatainer search flex items-center border-b sticky">
                <div className="bg-white h-10 w-full rounded-full mx-5 flex items-center px-2 ">
                    <svg viewBox="0 0 24 24" width="24" height="24" class=""><path className="fill-current text-Nav_icon" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    <input
                        className="text-sm w-full px-1 mx-3 text-opacity-50 appearance-none outline-none focus:outline-none"
                    />
                </div>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden chat">
                {/* Chat List */}
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/s96x96/261913726_1805968076254935_4134978145641290972_n.jpg?ccb=11-4&oh=344afa599d410d9532dc9bc0f10766e6&oe=61A7D36C" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Mayank Manan</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <svg viewBox="0 0 212 212" width="48" height="48" class=""><path fill="#DFE5E7" class="background" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" class="primary" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Yash Raj</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/s96x96/260851418_630648398290657_3975504492930105388_n.jpg?ccb=11-4&oh=7279fa116a0a5ec83379dd1d332227d7&oe=61A742CD" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Yash Kumar</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Delivered"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/s96x96/260389726_641813893482288_56230597994604683_n.jpg?ccb=11-4&oh=0ce1233662c48cbf7b6fc0d9fd6a9105&oe=61A74F8D" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Sourav </p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 14 18" width="14" height="18" className="fill-current text-Sent"><path d="M12.502 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div> <div className="w-full cursor-pointer">
                    <div className="chat_head bg-white hover:bg-Chat_hover flex items-center border-b">
                        <div className="px-2 mx-3">
                            <div className="h-12 w-12">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/254215278_404931071088412_5657329989777534370_n.jpg?ccb=11-4&oh=22062df4500bcbe81392bff811ab6133&oe=61A66AB2" alt="" className="h-full w-full rounded-full" />
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div className="flex justify-between">
                                <p className="">Armus Digital</p>
                                <p>11:36 AM</p>
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1"><span className="">
                                    <svg viewBox="0 0 18 18" width="16" height="16" className="fill-current text-Seen"><path d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                                </span>
                                    Hey!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
