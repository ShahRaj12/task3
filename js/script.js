// Add Product Details 
i = 2;
function addProduct() {

    const insert = document.createElement("div")
    insert.innerHTML = `<div class="form-row" id="form">
    <div class="form-group col-md-2 col-sm-12">
        <input type="text" class="form-control"  name="ProductName" placeholder="Product Name" id="productName${i}">
         <p id="productnameid${i}"></p>
    </div>
    <div class="form-group col-md-2 col-sm-12">
        <select class="custom-select" id="productType${i}">
            <option value="" selected>Product Type</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
            <option value="Shirts">Shirts</option>
          </select>
          <p id="producttypeid${i}"></p>

    </div>
    <div class="form-group col-md-1 col-sm-12">
        <input type="number" class="form-control"  placeholder="Price" id="productPrice${i}" onchange="finalprize()">
        <p id="priceid${i}"></p>
    </div>
    <div class="form-group col-md-2 col-sm-12">
        <input type="number" class="form-control" id="Discount${i}" placeholder="Discount" onchange="finalprize()">
        <p id="discountid${i}"></p>
    </div>
    <div class="form-group col-md-2 col-sm-12">
        <input type="number" class="form-control" id="FinalPrize${i}" placeholder="Final Prize" disabled>
        <p id="finalprizeid${i}"></p>
    </div>
    <div class="form-group col-md-2 col-sm-12">
        <select class="custom-select" id="paymentStatus${i}">
        <option value="" selected>Payment Status</option>
            <option value="Initial Stage">Initial Stage</option>
            <option value="Secondary Stage">Secondary Stage</option>
            <option value="Final Stage">Final Stage</option>
          </select>
          <p id="statusid${i}"></p>
    </div>
    <div class="form-group col-md-1 col-sm-12 text-center  justify-content-center">
        <button type="button" class="btn btn-danger rounded-pill " onclick="deleteData(this)" ><i class="bi bi-trash"></i></button>
        
        </div>
</div>`;
    document.getElementById("formparent").appendChild(insert);
    i = i + 1;
}

// Delete Product Details
function deleteData(delData) {
    delData.parentNode.parentNode.remove();
}

// Print Function data in console
// var forms = document.querySelectorAll('.needs-validation')

// Array.prototype.slice.call(forms)
// .forEach(function (form) {
//   form.addEventListener('submit', function (event) {
//     if (!form.checkValidity()) {
//       event.preventDefault()
//       event.stopPropagation()
//     }

//     form.classList.add('was-validated')
//   }, false)
// })
function finalprize() {
    for (let k = 0; k < i; k++) {
        var productPrice = document.getElementById(`productPrice${k}`).value;
        var Discount = document.getElementById(`Discount${k}`).value;
        if(productPrice != "" && Discount !=""){
            var dis =(productPrice*(Discount/100))
            var finalPrize=productPrice-dis
            if(finalPrize >= 0){
                document.getElementById(`FinalPrize${k}`).value=finalPrize
            }
            else{
                document.getElementById(`FinalPrize${k}`).value="0"
            }
        }
       
    }
}

function printData() {

    // Loop over them and prevent submission

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    birthday = document.getElementById('birthday').value;
    phoneNo = document.getElementById('phoneNo').value;
    emailAddress = document.getElementById('emailAddress').value;
    inputAddress = document.getElementById('inputAddress').value;
    let check = true;

    // First Name Validation That it can't be empty
    if (firstName == "") {
        document.getElementById("firstnameid").innerHTML = "First name can't be empty";
        check = false
    }
    else {
        document.getElementById("firstnameid").innerHTML = "";
    }

    // Last Name Validation That it can't be empty
    if (lastName == "") {
        document.getElementById("lastnameid").innerHTML = "Last name can't be empty";
        check = false
    }
    else {
        document.getElementById("lastnameid").innerHTML = "";

    }

    // Birthdate Validation That it can't be empty
    if (birthday == "") {
        document.getElementById("birthdayid").innerHTML = "Birthday can't be empty";
        check = false
    }
    else {
        document.getElementById("birthdayid").innerHTML = "";
    }
    // Phone Number should be of 10 digits
    function validatePhoneNumber(phoneNo) {
        var regex = /^\d{10}$/; // regular expression to match 10-digit phone numbers
        return regex.test(phoneNo);
    }

    if (phoneNo == "") {
        document.getElementById("phonenumberid").innerHTML = "Phone Number can't be empty";
        check = false;
    }
    if (phoneNo.length < 10) {
        document.getElementById("phonenumberid").innerHTML = "Phone Number should be of 10 digits";
        check = false
    }
    else {
        document.getElementById("phonenumberid").innerHTML = "";
    }

    // Email Address Validation That it should be proper
    function validateEmail(emailAddress) {
        // Regular expression for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailAddress);
    }

    if (emailAddress == "") {
        document.getElementById("emailaddressid").innerHTML = "Email Address  can't be empty";
        check = false
    }

    if (validateEmail(emailAddress)) {
        document.getElementById("emailaddressid").innerHTML = "";
    } else {
        document.getElementById("emailaddressid").innerHTML = "Write Proper Email Id";
        check = false
    }
    // Input Address Validation 
    if (inputAddress == "") {
        document.getElementById("inputaddressid").innerHTML = " Address  can't be empty";
        check = false
    }
    else {
        document.getElementById("inputaddressid").innerHTML = "";

    }
    if (inputAddress.length < 10) {
        document.getElementById("inputaddressid").innerHTML = " Address must be at least 10 characters long";
        check = false
    }

    let alldetail={}
    alldetail.FirstName=firstName
    alldetail.LastName=lastName
    alldetail.Birthday=birthday
    alldetail.PhoneNo=phoneNo
    alldetail.EmailAddress=emailAddress
    alldetail.InputAddress=inputAddress

    
    // Logic for printing Data in console for each product details

    var products = []

    for (let j = 0; j < i; j++) {


        if (document.getElementById(`productName${j}`)) {
            var productName = document.getElementById(`productName${j}`).value;
            var productType = document.getElementById(`productType${j}`).value;
            var productPrice = document.getElementById(`productPrice${j}`).value;
            var Discount = document.getElementById(`Discount${j}`).value;
            var finalPrize = document.getElementById(`FinalPrize${j}`).value
            var paymentStatus = document.getElementById(`paymentStatus${j}`).value

            if (productName == "") {
                document.getElementById(`productnameid${j}`).innerHTML = "Product Name Should not be Empty";
                check = false;
            }
            else {
                document.getElementById(`productnameid${j}`).innerHTML = "";

            }

            if (productType == "") {
                document.getElementById(`producttypeid${j}`).innerHTML = "Product Type Should not be Empty";
                check = false;
            }
            else {
                document.getElementById(`producttypeid${j}`).innerHTML = "";

            }

            if (productPrice == "") {
                document.getElementById(`priceid${j}`).innerHTML = "Product Price Should not be Empty";
                check = false;
            }
            else {
                document.getElementById(`priceid${j}`).innerHTML = "";

            }

            if (Discount == "") {
                document.getElementById(`discountid${j}`).innerHTML = "Discount  Should not be Empty";
                check = false;
            } else {
                document.getElementById(`discountid${j}`).innerHTML = "";

            }

            // if (finalPrize == "") {
            //     document.getElementById(`finalprizeid${j}`).innerHTML = "Final Prize Should not be Empty";
            //     check = false;
            // } else {
            //     document.getElementById(`finalprizeid${j}`).innerHTML = "";

            // }

            if (paymentStatus == "") {
                document.getElementById(`statusid${j}`).innerHTML = "Payment Status Should not be Empty";
                check = false;
            } else {
                document.getElementById(`statusid${j}`).innerHTML = "";

            }

            var product = { Name: productName, Type: productType, Price: productPrice, Discount: Discount, FinalPrize: finalPrize, Status: paymentStatus }; // create a product object with name and details
            products.push(product); // add the product object to the array

        }

    }
    if (check) {
        alldetail.Productss=products
        console.log("Forms Details:",alldetail)
        // console.log("Product Name :", JSON.stringify(products))
    }
    else {
        console.log("");
    }

    return false
}
