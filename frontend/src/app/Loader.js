export default function Loader(){
    return(
       <div className="w-full flex  text-2xl justify-center items-center py-10 relative gap-5">
         
           <div className="h-12 w-12   flex justify-center items-center rounded-full relative border-4  border-b-white animate-spin box-border">
    
           </div>    
            <h1 className="loadingTextAnimation text-white loadingText relative">Loading</h1>  
        </div>
    );
}