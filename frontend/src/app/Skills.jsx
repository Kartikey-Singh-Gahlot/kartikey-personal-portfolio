

export default function Skills({skills}){
 return(
    <ul className="grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(3,1fr)]  min-[780px]:flex  w-full  box-border justify-evenly  flex-wrap items-center bg-gradient-to-r from-gray-800 to-gray-950">
        {skills.map((i, idx)=>{return <li key={idx} className="hover:text-blue-700 text-amber-50 text-center sm:text-[15px] text-[13px] min-[780px]:py-3 py-1">{i}</li>})}
    </ul>
 )
}