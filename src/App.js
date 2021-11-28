import React, { useState } from 'react'
import './App.css';
import Chat from './Chat';
import LeftBar from './LeftBar';
import Close_SVG from "./Images/close.svg"
import { Helmet } from "react-helmet";
function App() {
  const [Chat_Info, setChat_Info] = useState(true);
  const [showModal, setShowModal] = React.useState(true);

  return (

    <div className="flex flex-row min-w-screen">
      <Helmet>
        <title>WhatsApp Clone by Yash Raj</title>
      </Helmet>
      <LeftBar />

      {showModal ? (
        <>
          <div className=" duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 my-6 mx-auto lg:w-3/6  ">
              {/*content*/}
              <div className="shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-between mx-8 py-3 items-center border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl">
                    Credits for WhatsApp Clone
                  </h3>
                  <img src={Close_SVG} alt="" className="h-4 w-4 cursor-pointer hover:opacity-50 float-right" onClick={() => setShowModal(false)} />
                </div>
                {/*body*/}

                <div className="relative pr-10 pt-2 pl-10 pb-10 min-h-64 ">
                  <div className="flex flex-col  ">
                    <p className="italic">This WhatsApp Clone has been made by Yash Raj.
                      <br></br>
                      Yash Raj is a Front End Developer & UI/UX Designer, currently persuing BCA(Hons) from Lovely Professional University, Yash Raj is also the founder of Armus Digital Private Limited.
                    </p>
                    <p className="mt-5 italic">
                      Armus Digital is a Record Company who distributed Music, Music Video, Films on streaming platforms. Armus Digital has partnered with over 250+ Music & Video Platform worlwide.
                    </p>
                    <p className="mt-10 italic">Follow Yash Raj & Armus Digital</p>

                    <a className="w-full h-12 border mt-5 items-center flex border-black hover:border-green-400 cursor-pointer" href="https://www.instagram.com/yashraj122003/" target="_blank" rel="noreferrer">
                      <p className="p-5"> Follow: Yash Raj - Instagram</p>
                    </a>
                    <a className="w-full h-12 border mt-5 items-center flex border-black hover:border-green-400 cursor-pointer" href="https://www.linkedin.com/in/yash-raj-a3069b203/" target="_blank" rel="noreferrer">
                      <p className="p-5"> Follow: Yash Raj - LinkedIn</p>
                    </a>
                    <a className="w-full h-12 border mt-5 items-center flex border-black hover:border-green-400 cursor-pointer" href="https://www.instagram.com/armus.digital/" target="_blank" rel="noreferrer">
                      <p className="p-5"> Follow: Armus Digital - Instagram</p>
                    </a>
                    <a className="w-full h-12 border mt-5 items-center flex border-black hover:border-green-400 cursor-pointer" href="https://www.facebook.com/armusdigital/" target="_blank" rel="noreferrer">
                      <p className="p-5"> Follow: Armus Digital - Facebook</p>
                    </a>
                    <a className="w-full h-12 border mt-5 items-center flex border-black hover:border-green-400 cursor-pointer" href="https://www.twitter.com/armusdigital/" target="_blank" rel="noreferrer">
                      <p className="p-5"> Follow: Armus Digital - Twitter</p>
                    </a>

                  </div>


                </div>

              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {Chat_Info ?
        <Chat />
        :
        <div className="w-full">
          <div className="h-screen bg-Intro_Background">
            <div className="flex items-center justify-center flex-col  h-screen">
              <div>
                <svg width="360" viewBox="0 0 303 172" fill="none" preserveAspectRatio="xMidYMid meet" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M229.565 160.229c32.647-10.984 57.366-41.988 53.825-86.81-5.381-68.1-71.025-84.993-111.918-64.932C115.998 35.7 108.972 40.16 69.239 40.16c-29.594 0-59.726 14.254-63.492 52.791-2.73 27.933 8.252 52.315 48.89 64.764 73.962 22.657 143.38 13.128 174.928 2.513z" fill="#DAF7F3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M131.589 68.942h.01c6.261 0 11.336-5.263 11.336-11.756S137.86 45.43 131.599 45.43c-5.081 0-9.381 3.466-10.822 8.242a7.302 7.302 0 0 0-2.404-.405c-4.174 0-7.558 3.51-7.558 7.838s3.384 7.837 7.558 7.837h13.216zM105.682 128.716c3.504 0 6.344-2.808 6.344-6.27 0-3.463-2.84-6.27-6.344-6.27-1.156 0-2.24.305-3.173.839v-.056c0-6.492-5.326-11.756-11.896-11.756-5.29 0-9.775 3.413-11.32 8.132a8.025 8.025 0 0 0-2.163-.294c-4.38 0-7.93 3.509-7.93 7.837 0 4.329 3.55 7.838 7.93 7.838h28.552z" fill="#fff"></path><rect x=".445" y=".55" width="50.58" height="100.068" rx="7.5" transform="rotate(6 -391.775 121.507) skewX(.036)" fill="#42CBA5" stroke="#316474"></rect><rect x=".445" y=".55" width="50.403" height="99.722" rx="7.5" transform="rotate(6 -356.664 123.217) skewX(.036)" fill="#fff" stroke="#316474"></rect><path d="M57.16 51.735l-8.568 82.024a5.495 5.495 0 0 1-6.042 4.895l-32.97-3.465a5.504 5.504 0 0 1-4.897-6.045l8.569-82.024a5.496 5.496 0 0 1 6.041-4.895l5.259.553 22.452 2.36 5.259.552a5.504 5.504 0 0 1 4.898 6.045z" fill="#EEFEFA" stroke="#316474"></path><path d="M26.2 102.937c.863.082 1.732.182 2.602.273.238-2.178.469-4.366.69-6.546l-2.61-.274c-.238 2.178-.477 4.365-.681 6.547zm-2.73-9.608l2.27-1.833 1.837 2.264 1.135-.917-1.838-2.266 2.27-1.833-.92-1.133-2.269 1.834-1.837-2.264-1.136.916 1.839 2.265-2.27 1.835.92 1.132zm-.816 5.286c-.128 1.3-.265 2.6-.41 3.899.877.109 1.748.183 2.626.284.146-1.31.275-2.614.413-3.925-.878-.092-1.753-.218-2.629-.258zm16.848-8.837c-.506 4.801-1.019 9.593-1.516 14.396.88.083 1.748.192 2.628.267.496-4.794 1-9.578 1.513-14.37-.864-.143-1.747-.192-2.625-.293zm-4.264 2.668c-.389 3.772-.803 7.541-1.183 11.314.87.091 1.74.174 2.601.273.447-3.912.826-7.84 1.255-11.755-.855-.15-1.731-.181-2.589-.306-.04.156-.069.314-.084.474zm-4.132 1.736c-.043.159-.06.329-.077.49-.297 2.896-.617 5.78-.905 8.676l2.61.274c.124-1.02.214-2.035.33-3.055.197-2.036.455-4.075.627-6.115-.863-.08-1.724-.17-2.585-.27z" fill="#316474"></path><path d="M17.892 48.489a1.652 1.652 0 0 0 1.468 1.803 1.65 1.65 0 0 0 1.82-1.459 1.652 1.652 0 0 0-1.468-1.803 1.65 1.65 0 0 0-1.82 1.459zM231.807 136.678l-33.863 2.362c-.294.02-.54-.02-.695-.08a.472.472 0 0 1-.089-.042l-.704-10.042a.61.61 0 0 1 .082-.054c.145-.081.383-.154.677-.175l33.863-2.362c.294-.02.54.02.695.08.041.016.069.03.088.042l.705 10.042a.61.61 0 0 1-.082.054 1.678 1.678 0 0 1-.677.175z" fill="#fff" stroke="#316474"></path><path d="M283.734 125.679l-138.87 9.684c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55z" fill="#fff"></path><path d="M144.864 135.363c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55" stroke="#316474"></path><path d="M278.565 121.405l-129.885 9.058c-2.424.169-4.506-1.602-4.668-3.913l-5.669-80.855c-.162-2.31 1.651-4.354 4.076-4.523l129.885-9.058c2.427-.169 4.506 1.603 4.668 3.913l5.669 80.855c.162 2.311-1.649 4.354-4.076 4.523z" fill="#EEFEFA" stroke="#316474"></path><path d="M230.198 129.97l68.493-4.777.42 5.996c.055.781-.098 1.478-.363 1.972-.27.5-.611.726-.923.748l-165.031 11.509c-.312.022-.681-.155-1.017-.613-.332-.452-.581-1.121-.636-1.902l-.42-5.996 68.494-4.776c.261.79.652 1.483 1.142 1.998.572.6 1.308.986 2.125.929l24.889-1.736c.817-.057 1.491-.54 1.974-1.214.413-.577.705-1.318.853-2.138z" fill="#42CBA5" stroke="#316474"></path><path d="M230.367 129.051l69.908-4.876.258 3.676a1.51 1.51 0 0 1-1.403 1.61l-168.272 11.735a1.51 1.51 0 0 1-1.613-1.399l-.258-3.676 69.909-4.876a3.323 3.323 0 0 0 3.188 1.806l25.378-1.77a3.32 3.32 0 0 0 2.905-2.23z" fill="#fff" stroke="#316474"></path><ellipse rx="15.997" ry="15.997" transform="rotate(-3.989 1304.861 -2982.552) skewX(.021)" fill="#42CBA5" stroke="#316474"></ellipse><path d="M208.184 87.11l-3.407-2.75-.001-.002a1.952 1.952 0 0 0-2.715.25 1.89 1.89 0 0 0 .249 2.692l.002.001 5.077 4.11v.001a1.95 1.95 0 0 0 2.853-.433l8.041-12.209a1.892 1.892 0 0 0-.573-2.643 1.95 1.95 0 0 0-2.667.567l-6.859 10.415z" fill="#fff" stroke="#316474"></path></svg>
              </div>
              <div className="w-full mt-10">
                <div className="flex justify-center">
                  <p className="text-3xl font-light">WhatsApp Web <span className="bg-Nav_icon_background rounded-full px-3 font-medium py-2 mx-5 text-base">BETA</span></p>
                </div>
              </div>
              <div className="w-full mt-5">
                <div className="flex justify-center">
                  <p className="text-sm tracking-wide text-Nav_icon">Send and receive messages without connecting your phone.</p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center">
                  <p className="text-sm tracking-wide text-Nav_icon">Use WhatsApp on up to 4 devices at the same time.</p>
                </div>
              </div>
              <div className="absolute bottom-6">
                <div className="flex justify-center">
                  <p className="text-sm tracking-wide text-Nav_icon">© 2021 Armus Digital Private Limited. Designed by <a href="https://github.com/YashRaj2003" className="" target="_blank" rel="noreferrer">Yash Raj</a> </p>
                </div>
              </div>

            </div>
          </div>
        </div>}
    </div>
  );
}

export default App;
