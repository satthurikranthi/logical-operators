import React, { useEffect, useRef } from 'react'

function TenthMarksSheet() {

     let firstNameInputRef = useRef();
     let lastNameInputRef = useRef();
     let engInputRef = useRef();
     let telInputRef = useRef();
     let hindiInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();
     let mathsInputRef = useRef();
     let resultLblRef = useRef();
     let engSpanRef = useRef();
     let telSpanRef = useRef();
     let hindiSpanRef = useRef();
     let sciSpanRef = useRef();
     let socSpanRef = useRef();
     let mathsSpanRef = useRef();



     let calculateResult =()=>{



      let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hindiMarks= Number(hindiInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let mathsMarks = Number(mathsInputRef.current.value);


                let  result;








                if(engMarks <35 || telMarks <35  ||   hindiMarks <35  || 
                  sciMarks <35   || socMarks <35 || mathsMarks <35  
                ){

                  result ="fail" ;

                }else{

                  result ="pass" ;

                }


                let totalMarks = engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;


               /* alert(
                    `${firstName} ${lastName} got total marks of ${totalMarks}`
                );*/


                resultLblRef.current.innerHTML = `${firstName} ${lastName} 
                ${result} in tenth and
                got total marks of ${totalMarks}`



      console.log("calculate the result ")
     }


     let engOnFocus =()=>{
      console.log("eng.onFocus");
                  engInputRef.current.style.backgroundColor
                  ="red";


     }


     let engOnChange =()=>{
      if(engInputRef.current.value >=0 && engInputRef.
         current.value <=100){
            if(engInputRef.current.value  >=35){
               engSpanRef.current.innerHTML ="pass" ;
            engSpanRef.current.style.backgroundColor="green" ;
            }else{
               engSpanRef.current.innerHTML ="fail" ;
         engSpanRef.current.style.backgroundColor="red" ;

            }

      }else{
         engSpanRef.current.innerHTML ="invalid";
         engSpanRef.current.style.backgroundColor="brown" ;

      }
     }



     let engOnBlur =()=>{
      let engOnBlur = ()=>{
         console.log("eng.onBlur");

      }
       
     }


     let telOnFocus =()=>{
      console.log("tel.onFocus");
                    telInputRef.current.style.backgroundColor
                    ="aqua";
     }


     let telOnChange =()=>{
      if(telInputRef.current.value >=0 && telInputRef.
         current.value <=100){
            if(telInputRef.current.value  >=35){
               telSpanRef.current.innerHTML ="pass" ;
               telSpanRef.current.style.backgroundColor="green" ;
            }else{
               telSpanRef.current.innerHTML ="fail" ;
         telSpanRef.current.style.backgroundColor="red" ;

            }


      }else{
         engSpanRef.current.innerHTML ="invalid";
         engSpanRef.current.style.backgroundColor="brown" ;

      }
       
     }

     let telOnBlur =()=>{
      console.log("tel.onBlur");
     }

     let hindiOnFocus =()=>{
      console.log("hindi.onFocus");
      hindiInputRef.current.style.backgroundColor
      ="blue";
     }

     let hindiOnChange =()=>{
      if(hindiInputRef.current.value >=0 && hindiInputRef.
         current.value <=100){
            if(hindiInputRef.current.value  >=35){
               hindiSpanRef.current.innerHTML ="pass" ;
               hindiSpanRef.current.style.backgroundColor="green" ;
            }else{
               hindiSpanRef.current.innerHTML ="fail" ;
         hindiSpanRef.current.style.backgroundColor="red" ;

            }

      }else{
         hindiSpanRef.current.innerHTML ="invalid";
         hindiSpanRef.current.style.backgroundColor="brown" ;

      }
     }


     let hindiOnBlur =()=>{
      console.log("hindi.onBlur");
     }


     let sciOnFocus =()=>{
      console.log("sci.onFocus");
                    sciInputRef.current.style.backgroundColor
                    ="green";
     }

     let sciOnChange =()=>{
      if(sciInputRef.current.value >=0 && sciInputRef.
         current.value <=100){
            if(sciInputRef.current.value  >=35){
               sciSpanRef.current.innerHTML ="pass" ;
            sciSpanRef.current.style.backgroundColor="green" ;
            }else{
               sciSpanRef.current.innerHTML ="fail" ;
         sciSpanRef.current.style.backgroundColor="red" ;

            }

      }else{
         sciSpanRef.current.innerHTML ="invalid";
         sciSpanRef.current.style.backgroundColor="brown" ;

      }

     }


     let sciOnBlur =()=>{
      console.log("sci.onBlur");
     }


     let socOnFocus =()=>{
      console.log("soc.onFocus");
      socInputRef.current.style.backgroundColor
      ="yellow";
     }


     let socOnChange =()=>{
      if(socInputRef.current.value >=0 && socInputRef.
         current.value <=100){
            if(socInputRef.current.value  >=35){
               socSpanRef.current.innerHTML ="pass" ;
               socSpanRef.current.style.backgroundColor="green" ;
            }else{
               socSpanRef.current.innerHTML ="fail" ;
         socSpanRef.current.style.backgroundColor="red" ;

            }

      }else{
         socSpanRef.current.innerHTML ="invalid";
         socSpanRef.current.style.backgroundColor="brown" ;

      }

     }


     let socOnBlur =()=>{
      console.log("soc.onBlur");
     }


     let mathsOnFocus =()=>{
      console.log("maths.onFocus");
                  mathsInputRef.current.style.backgroundColor
                  ="orange";
                    
     }


     let mathsOnChange =()=>{
      if(mathsInputRef.current.value >=0 && mathsInputRef.
         current.value <=100){
            if(mathsInputRef.current.value  >=35){
               mathsSpanRef.current.innerHTML ="pass" ;
               mathsSpanRef.current.style.backgroundColor="green" ;
            }else{
               mathsSpanRef.current.innerHTML ="fail" ;
         mathsSpanRef.current.style.backgroundColor="red" ;

            }

      }else{
         mathsSpanRef.current.innerHTML ="invalid";
         mathsSpanRef.current.style.backgroundColor="brown" ;

      }

       
     }

     let mathsOnBlur =()=>{
      console.log("maths.onBlur");
     }





  return (
    <div>
        <form>
            <div>
                <label>FirstName</label>
                <input ref={firstNameInputRef}></input>
                <span></span>
                
               
            </div>


            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef}></input>
                <span></span>
               
            </div>



            <div>
                <label>English</label>
                <input
                 type="number"
                 ref={engInputRef}
                 onFocus={() => {
                  engOnFocus();

                 
                 }}
                 onChange={() => {
                  engOnChange();

                 }}

                 onBlur={() => {
                  engOnBlur();
                  
                  

                 }}
                 
                
                 ></input>
                <span ref={engSpanRef}></span>
               
            </div>


            <div>
                <label>Telugu</label>
                <input
                 type="number"
                  ref={telInputRef}
                  onFocus={() => {
                     telOnFocus(); 
                    

                 }}
                 onChange={() => {
                  
                  telOnChange();
             

                 }}
                 onBlur={() => {
                  telOnBlur();
                 
                

               }}



                
                ></input>
                <span ref={telSpanRef}></span>
               
            </div>


            <div>
                <label>Hindi</label>
                <input type="number" 
                ref={hindiInputRef}
                onFocus={() => {
                  hindiOnFocus();
                   

                 }}
                 onChange={() => {
                  hindiOnChange();
                 

                 }}

                 onBlur={() => {
                  hindiOnBlur();
                   
                  

                 }}
                ></input>
                <span ref={hindiSpanRef}></span>
               
            </div>



            <div>
                <label>Sci</label>
                <input type="number"
                 ref={sciInputRef}
                 onFocus={() => {
                  sciOnFocus();
                    

                 }}
                 onChange={() => {
                  sciOnChange();
                  
                   

                 }}

                 onBlur={() => {

                  sciOnBlur();
                  
                  

                 }}
                 ></input>
                <span ref={sciSpanRef}></span>
               
            </div>


            <div>
                <label>Soc</label>
                <input type="number"
                 ref={socInputRef}
                 onFocus={() => {
                  socOnFocus();
                   

                 }}
                 onChange={() => {
                  socOnChange();
                 

                 }}

                 onBlur={() => {
                    
                  socOnBlur();

                 }}
                 ></input>
                <span ref={socSpanRef}></span>
               
            </div>


            <div>
                <label>Maths</label>
                <input type="number" 
                ref={mathsInputRef}
                onFocus={() => {
                  mathsOnFocus();
                  

                 }}
                 onChange={() => {
                  mathsOnChange();
                 

                 }}

                 onBlur={() => {
                  mathsOnBlur();
                    
            

                 }}
                ></input>
                <span ref={mathsSpanRef}></span>
               
            </div>

            <div>
               <button type= "button" onClick={()=>{
                  calculateResult();

                





               }}>
                
                calculate Result</button>
               <br></br>
               <label ref={resultLblRef}
               className="resultLbl"></label>






               
            </div>
        </form>
      
    </div>
  )
}

export default TenthMarksSheet
