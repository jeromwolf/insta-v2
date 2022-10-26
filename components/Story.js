function Story({img, username}) {
    return (
        <div>
            <img 
                src="https://photocloud.sbs.co.kr/origin/edit/S01_P457544210/615d2ae857a30b242e436115-p.png"
                alt="profile pic" 
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
                            object-contain cursor-pointer hover:scale-110 transform duration-200 ease-out"/> 
            <p className="text-xs w-14 truncate text-center">{username}</p> 
        </div>
    )
}

export default Story
