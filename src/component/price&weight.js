import React from 'react';
import '../App.css';
import {Link} from "react-router-dom"

function Conform()
{
    return (
      <div className="container">
           <h1>Shipping maker label</h1><br></br>
           <h3>Weight & Price</h3>
           <form>
           <div class="form-row">
             <div class="col-md-4 mb-3">
               <label for="getwight">weight</label>
               
              <input type="text" class="form-control" id="wight" placeholder="item weight"  required>
             </input>
              </div> 
           </div>
           <div class="form-row">
           <div class="col-md-4 mb-3">
             <label for="shippingoption">option</label>
             
            <input type="text" class="form-control" id="option" placeholder="shipping option"  required>
           </input>
            </div> 
         </div>


      
        
       <Link to="reciver"><button class="btn btn-primary" id="btn" type="Preview">Preview</button></Link>
      <button class="btn btn-primary"  id="btn" type="Next">conform</button>
         </form>

        
      </div>
    )
}

export default Conform;