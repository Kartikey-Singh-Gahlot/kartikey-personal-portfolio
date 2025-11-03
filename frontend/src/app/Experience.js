export default function Experience({data}){

  const processed = data.map((i, idx)=>{
     return (
     <li key={idx} className="">
          <h1 className="w-full min-[780px]:text-[20px] text-[15px] font-bold">{i.title}</h1>
          <ul className="my-3 md:text-[14px] text-[10px] list-disc list-inside">
             {i.description.map((i, idx)=>{ return <li className="w-full" key={idx}>{i}</li>})}
          </ul>
     </li>
     )
  })
  
  return (
    <ul className=" text-amber-50 mt-10 flex md:flex-row justify-center flex-col grid-cols-2 grid-rows-[auto] mb-10 px-5 gap-10" >
             {processed}
    </ul>
  );
}