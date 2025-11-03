export default function Headings({pageHeading, pageHeadingStyle}){

 let crntStyle = "min-[430px]:text-4xl text-3xl  text-amber-50  pb-2 border-b-2 border-amber-50 my-5";

 if(pageHeadingStyle){
    crntStyle = crntStyle.concat(pageHeadingStyle);
 }

 return (
   <div className="w-full flex justify-center">
      <h1 className={crntStyle}>{pageHeading}</h1>
   </div>
 )
}