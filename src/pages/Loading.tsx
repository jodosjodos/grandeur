const Loading = () => {
        return (
                <div className='w-full h-full bg-[#0d0d0d] text-white flex items-center justify-center'>
                        <div className="page-loading_inner js-page-loading_inner">
                                <svg  width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-52'>
                                        <circle cx="136" cy="136" r="132" stroke="#B7AB98"></circle>
                                </svg>
                                <div className="absolute top-[46%] left-[47.5%]">
                                        <img  src="/images/logo.gif" width="64px" height="64px" alt="logo" />
                                </div>
                                <button className='bg-[#0d0d0d] rounded-full hover:bg-[#b7ab98] hover:text-black transition-all duration-700  absolute  top-[61.5%] left-[44.5%] w-[155px] px-1.5  opacity-100 z-30  border border-[#b7ab98] text-[#b7ab98]  py-1 flex items-center justify-center '>
                                        Start
                                </button>
                                <span  className="absolute top-[37%] left-[49.3%] text-[#b7ab98] text-[9px]"><b className="js-loading_text">100</b>%</span>
                        </div>
                </div>
        )
}

export default Loading