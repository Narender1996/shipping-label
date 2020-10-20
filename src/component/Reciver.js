import React from 'react';
import '../App.css';
import {Link} from "react-router-dom"


function Reciver()
{
    return (
      <div className="container">
           <h1>Shipping maker label</h1><br></br>
           <h3>Enter Reciver address</h3>
           <form>
           <div class="form-row">
             <div class="col-md-8 mb-3">
               <label for="fname">First name</label>
               
              <input type="text" class="form-control" id="fname" placeholder="First name"  required>
             </input>
              </div> 
           </div>
           <div class="form-row">
           <div class="col-md-8 mb-3">
             <label for="street">Street</label>
             
            <input type="text" class="form-control" id="street" placeholder="First name"  required>
           </input>
            </div> 
         </div>


           <div class="form-row">
             <div class="col-md-6 mb-3">
               <label for="city">City</label>
               <input type="text" class="form-control" id="city" placeholder="City" required>
           </input>
               </div>
             <div class="col-md-3 mb-3">
               <label for="state">State</label>
               <input type="text" class="form-control" id="state" placeholder="State" required>
            </input>
               </div>
             <div class="col-md-3 mb-3">
               <label for="zip">Zip</label>
               <input type="text" class="form-control" id="zip" placeholder="Zip" required>
           </input>
               </div>
           </div>
        
          <Link to="sender"> <button class="btn btn-primary" type="Preview" id="btn">Preview</button></Link>
          <Link to="conform"> <button class="btn btn-primary" type="Next" id="btn">Next</button></Link>
         </form>

        
      </div>
    )
}

export default Reciver;