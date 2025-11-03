
export default function List({mainLi, subLi, link, linkTarget, subLink, onClk}){

 if(subLi){
    let subItems = subLi.map((i,idx)=>{return <a href={subLink[idx]}><li key={idx} className="hover:bg-blue-700  hover:border-black text-[15px] text-amber-50 w-full py-1 px-6 text-center border-[1px] rounded-3xl border-amber-50 bg-black my-2">{i}</li> </a>});
    return (
    <ul>
        <li className="relative mainBox">
         <h1 className="hover:bg-blue-700 min-[780px]:w-full text-[15px] border-[1px] border-black text-amber-50 px-6 py-2 w-fit rounded-3xl" onClick={onClk}> <a href={link} target={linkTarget}>{mainLi}</a> </h1>
         <ul className="absolute subBox w-full left-1">
            {subItems}
         </ul>
        </li>
    </ul>
      
    );
 }
 else{

    return(
          <li onClick={onClk} className="my-2 w-full"><a  href={link} target={linkTarget} className="hover:bg-blue-700 min-[780px]:my-0  min-[780px]:rounded-3xl min-[780px]:border-[black] border-l-[#ffffff9c] my-2 border-l-[1px]  text-[15px] text-amber-50  py-2 px-20 text-center">{mainLi}</a></li> 
    );
 }
}