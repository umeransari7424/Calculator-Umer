import React from "react";

function Calculator() {
    // let cal = document.querySelector(".cal").innerHTML;
    let btn = document.querySelectorAll("button");
    // console.log(btn)
    let value = document.getElementById("value");
    

    for (let i=0; i<btn.length ; i++) {
      btn[i].addEventListener("click",function(){
        if(this.innerHTML==="="){
          value.innerHTML = eval(value.innerHTML)
        }else{
          if(this.innerHTML==="AC"){
            value.innerHTML = "";
          }
          else{
            value.innerHTML += this.innerHTML 
          }
        }
      })
     

    }




    const clearHandle = () =>{
        document.getElementById("num").value = ""
    }
    const clickHandle = ()=>{

    }
  return (
    <div className="calculator">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 ">
            <div className="card p-3 ">
              

              
              <div className="form-floating ">
                <input type="number" id="value" className="form-control" />
                <div>
                </div>
              </div>
              <br />
              <div className="row py-3">
                <div className="d-flex d-flex justify-content-between">
                <div>
                <button className="btn btn-dark num" onClick={clickHandle}> 7</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 8</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 9</button>
                </div>
                <div>
                <button className="btn btn-dark num"> / </button>
                </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="d-flex d-flex justify-content-between">
                <div>
                <button className="btn btn-dark num"> 4</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 5</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 4</button>
                </div>
                <div>
                <button className="btn btn-dark num"> * </button>
                </div>
                </div>
              </div>
              <div className="row  py-3">
                <div className="d-flex d-flex justify-content-between">
                <div>
                <button className="btn btn-dark num"> 1</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 2</button>
                </div>
                <div>
                <button className="btn btn-dark num"> 3</button>
                </div>
                <div>
                <button className="btn btn-dark num"> - </button>
                </div>
                </div>
              </div>
              <div className="row  py-3">
                <div className="d-flex d-flex justify-content-between">
                <div>
                <button className="btn btn-dark num"> 0 </button>
                </div>
                <div>
                <button className="btn btn-dark num" > . </button>
                </div>
                <div>
                <button className="btn btn-dark num" id="equal"> = </button>
                </div>
                <div>
                <button className="btn btn-dark num"> + </button>
                </div>
                </div>
              </div>
              <div className="row pt-3">
                <button className="btn btn-danger " onClick={clearHandle}> AC </button>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
