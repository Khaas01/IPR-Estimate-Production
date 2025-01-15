<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://apis.google.com/js/api.js"></script>
    <script src="https://accounts.google.com/gsi/client"></script>
    <title>Iron Peak Roofing - Estimate Form</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="styles.css">
    <!-- Add this just before </body> -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFVaRrTxOyR-fX3XAOp1tjoeg58mkj254&libraries=places"></script>
</head>
    
<body>
<header>
    <img src="https://i.imgur.com/kj09wS4.png" alt="Iron Peak Roofing Logo" class="logo">
    <h1>Roofing Estimate Form</h1>


</header>
<form id="estimateForm">
   <!--Sales Rep Section -->
   <div id="salesRepSection" style="display:block;">
    <h2>Sales Rep Information</h2>
    
    <!-- Name field -->
    <label for="salesRepName">Sales Rep's Name:</label>
    <input type="text" 
        class="uniform-input" 
        id="salesRepName" 
        name="salesRepName" 
        style="text-transform: capitalize;"
        required>
    
    <!-- Phone field -->
    <label for="salesRepPhone">Sales Rep's Phone:</label>
   <input type="tel" 
    class="uniform-input" 
    id="salesRepPhone" 
    name="salesRepPhone" 
    placeholder="0000000000"
    required>

    
    <!-- Email field -->
    <label for="salesRepEmail">Sales Rep's Email:</label>
    <input type="email" 
        class="uniform-input" 
        id="salesRepEmail" 
        name="salesRepEmail" 
        required>
    
    <!-- Navigation buttons should be last -->
    <div id="navigationButtons">
        <button type="button" onclick="showSection('companySection')">Next</button>
    </div>
</div>


   
    <div id="companySection" style="display:none;">
        <h2>Company Information</h2>
        <label for="companyName">What Company are we providing this estimate for?</label><br>
        <select id="companyName" name="companyName" class="uniform-input" required>
            <option value="Iron Peak Roofing">Iron Peak Roofing</option>
            <option value="Capitol Energy">Capitol Energy</option>
        </select>
        
        <div id="navigationButtons">
            <button type="button" onclick="goBack()">Back</button>
            <button type="button" onclick="showSection('propertyOwnerSection')">Next</button>
        </div>
    </div>

    
    <div id="propertyOwnerSection" style="display:none;">
        <h2>Property Owner Information</h2>
        <label for="ownerName">Owner's Name:</label>
        <input type="text" 
    class="uniform-input" 
    id="ownerName" 
    name="ownerName" 
    style="text-transform: capitalize;"
    required>
     <div class="address-container">
    <label for="ownerAddress">
        Address <span class="hint-text">(Hint - Copy the address to paste into the measurement tool)</span>
    </label>
    <input type="text" 
        class="uniform-input" 
        id="ownerAddress" 
        name="ownerAddress" 
        placeholder="Start typing address..." 
        required>
</div>
        <label for="ownerCity">City:</label>
        <!-- Update the City input -->
<input type="text" 
    class="uniform-input" 
    id="ownerCity" 
    name="ownerCity" 
    style="text-transform: capitalize;"
    required>
        <label for="ownerState">State:</label>
        <!-- Update the State input -->
<input type="text" 
    class="uniform-input" 
    id="ownerState" 
    name="ownerState" 
    style="text-transform: uppercase;"
    maxlength="2"
    required>
        <label for="ownerZip">Zip Code:</label>
        <input type="number" 
    class="uniform-input" 
    id="ownerZip" 
    name="ownerZip" 
    pattern="[0-9]*" 
    inputmode="numeric" 
    maxlength="5" 
    minlength="5"
    placeholder="ZIP Code"
    required>
        <label for="ownerPhone">Phone:</label>
       <input type="tel" 
    class="uniform-input" 
    id="ownerPhone" 
    name="ownerPhone" 
    placeholder="0000000000"
    required>
        <label for="ownerEmail">Email:</label>
        <input type="email" class="uniform-input" id="ownerEmail" name="ownerEmail" required>
       
        <div id="navigationButtons">
            <button type="button" onclick="goBack()">Back</button>
            <button type="button" onclick="showSection('projectTypeSection')">Next</button>
        </div>
    </div>
  
   
    <div id="measureRoofSection" style="display:none;">
        <h2>Measure the Roof</h2>
        <p>
            Use the tool below to measure the roof area. Follow the instructions on the website to accurately outline and calculate the roof dimensions.<br>
            Click "get started" below.
        </p>
      <iframe 
    src="https://www.oneclickestimate.com" 
    style="width:100%; height:800px; border:0;" 
    title="Roof Measurement Tool" 
    id="measurementToolIframe"
    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads allow-top-navigation-by-user-activation"
    allow="geolocation; camera; fullscreen"
    crossorigin="anonymous"
    loading="lazy">
</iframe>
      <div id="navigationButtons">
      <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('roofingTypeSection')">Next</button>
    </div>
    </div>
 
<div id="projectTypeSection" style="display:none;">
    <h2>Project Type</h2>
    <label>Project Type:</label><br>
    <label>
        <input type="radio" id="projectTypeCash" name="projectType" value="Cash" required>
        Cash
    </label><br>
    <label>
        <input type="radio" id="projectTypeFinance" name="projectType" value="Finance" required>
        Finance
    </label><br>
    <label>
        <input type="radio" id="projectTypeInsurance" name="projectType" value="Insurance" required>
        Insurance
    </label>
    <div id="navigationButtons">
       <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="nextProjectTypeSection()">Next</button>
    </div>
</div>
    
   
    <div id="insuranceInfoSection" style="display:none;">
        <h2>Insurance Information</h2>
        <label for="insuranceCompany">Insurance Company:</label>
        <input type="text" 
    class="uniform-input" 
    id="insuranceCompany" 
    name="insuranceCompany" 
    style="text-transform: capitalize;"
    required>
        <label for="insurancePhone">Insurance Phone:</label>
        <input type="tel" 
    class="uniform-input" 
    id="insurancePhone" 
    name="insurancePhone" 
    placeholder="0000000000"
    required>

        <label for="claimNumber">Claim Number:</label>
        <input type="text" 
    class="uniform-input" 
    id="claimNumber" 
    name="claimNumber" 
    pattern="[A-Za-z0-9\-_]+"
    placeholder="Enter claim number"
    required>

        <label for="policyNumber">Policy Number:</label>
        <input type="text" 
    class="uniform-input" 
    id="policyNumber" 
    name="policyNumber" 
    pattern="[A-Za-z0-9\-_]+"
    placeholder="Enter policy number"
    required>

        <label for="dateOfLoss">Date of Loss:</label>
       <input type="date" 
    class="uniform-input" 
    id="dateOfLoss" 
    name="dateOfLoss" 
    required>
            <div id="navigationButtons">
      <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('roofingTypeSection')">Next</button>
    </div>
    </div>

<div id="roofingTypeSection" style="display:none;">
    <h2>Predominant Roofing Type</h2>
    <label>What is the predominant roofing type?</label><br>
    <label>
        <input type="radio" id="roofingTypeAsphalt" name="roofingType" value="Asphalt Shingles" required>
        Asphalt Shingles
    </label><br>
    <label>
        <input type="radio" id="roofingTypeTile" name="roofingType" value="Tile" required>
        Tile
    </label><br>
    <label>
        <input type="radio" id="roofingTypeModified" name="roofingType" value="Modified Bitumen (Flat roof rolled roofing)" required>
        Modified Bitumen (Flat roof rolled roofing)
    </label><br>
    <label>
        <input type="radio" id="roofingTypeCoating" name="roofingType" value="Flat Roof Coating" required>
        Flat Roof Coating
    </label>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromRoofingType()">Next</button>
    </div>
</div>



 
<div id="asphalt-shingle-section" style="display:none;">
    <h2>Asphalt Shingle Roof</h2>
    <label>Select the type of work needed:</label><br>
    <label>
        <input type="radio" name="shingleType" value="Shingle Roof Repair" required>
        Shingle Roof Repair
    </label><br>
    <label>
        <input type="radio" name="shingleType" value="Shingle Roof Replacement" required>
        Shingle Roof Replacement
    </label>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromShingleType()">Next</button>
    </div>
</div>

 
<div id="shingle-repair-section" style="display:none;">
    <h2>Shingle Repair Details</h2>
    <label for="shingles-repaired">How many shingles are we repairing?</label>
<input type="number" 
    id="shingles-repaired" 
    name="shingles-repaired" 
    class="uniform-input" 
    placeholder="Enter number of shingles"
    inputmode="numeric"
    pattern="[0-9]*">
    
    <label for="repair-anything-else">Are we repairing anything else?</label>
    <input type="text" id="repair-anything-else" name="repair-anything-else" class="uniform-input" placeholder="Describe any additional repairs">
    
   <label for="additional-charges">Additional shingle repair charges?</label>
<input type="number" 
    id="additional-charges" 
    name="additional-charges" 
    class="uniform-input" 
    placeholder="Enter any additional charges"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">

  <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>
    
        
       
<div id="shingle-replacement-section" style="display:none;">
    <h2>Shingle Replacement Details</h2>
    <label for="shingle-replacement">How many squares of shingles are we replacing?</label>
    <input type="number" 
        id="shingle-replacement" 
        name="shingle-replacement" 
        class="uniform-input" 
        placeholder="Enter number of squares of shingles"
        inputmode="numeric"
        pattern="[0-9]*"
        step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>
        
<div id="tile-roofing-section" style="display:none;">
    <h2>Tile Roof Options</h2>
    <label>
        <input type="radio" id="tile-repair" name="tile-roofing-type" value="Repair/Partial Roof">
        Repair/Partial Roof
    </label><br>
    <label>
        <input type="radio" id="tile-underlayment-replacement" name="tile-roofing-type" value="Underlayment Replacement">
        Underlayment Replacement
    </label><br>
    <label>
        <input type="radio" id="tile-remove-replace" name="tile-roofing-type" value="Remove and Replace">
        Remove and Replace
    </label>
    
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromTileRoofingType()">Next</button>
    </div>
</div>

<div id="tile-repair-section" style="display:none;">
    <h2>Tile Repair</h2>
<label for="tile-repair-sq">How many Sq of tile are we repairing?</label>
<input type="number" 
    id="tile-repair-sq" 
    name="tile-repair-sq" 
    class="uniform-input" 
    placeholder="Enter the number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>


<div id="tile-underlayment-section" style="display:none;">
    <h2>Tile Underlayment</h2>
    <label for="tile-underlayment-sq">How many Sq of tile are we repairing?</label>
<input type="number" 
    id="tile-underlayment-sq" 
    name="tile-underlayment-sq" 
    class="uniform-input" 
    placeholder="How many Sq of tile are we repairing?"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>
<div id="tile-remove-replace-section" style="display:none;">
    <h2>Tile Remove and Replace</h2>
   
    <label for="tile-type">What type of tile are we replacing?</label>
    <div>
        <label>
            <input type="radio" id="tile-concrete" name="tile-type" value="Concrete">
            Concrete
        </label><br>
        <label>
            <input type="radio" id="tile-clay" name="tile-type" value="Clay">
            Clay
        </label><br>
        <label>
            <input type="radio" id="tile-sandcast" name="tile-type" value="SandCast">
            SandCast
        </label>
 <div id="navigationButtons">
    <button type="button" onclick="goBack()">Back</button>
    <button type="button" onclick="showSection('tile-roof-rr-section')">Next</button>
</div>
    </div>
</div>


<div id="tile-roof-rr-section" style="display:none;">
    <h2>Tile Roof R&R Amount</h2>
  <label for="tile-roof-rr">How many squares of tile roofing are we removing and replacing?</label>
<input type="number" 
    id="tile-roof-rr" 
    name="tile-roof-rr" 
    class="uniform-input" 
    placeholder="Enter number of squares of tile roofing"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>


<div id="modified-bitumen-section" style="display:none;">
    <h2>Modified Bitumen</h2>
  <label for="modified-bitumen-sq">How many square of modified bitumen are we replacing?</label>
<input type="number" 
    id="modified-bitumen-sq" 
    name="modified-bitumen-sq" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>


    
<div id="coating-section" style="display:none;">
    <h2>Coating</h2>
  <label for="coating-squares">How many square of roof surface are we re-coating?</label>
<input type="number" 
    id="coating-squares" 
    name="coating-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('secondary-roof-section')">Next</button>
    </div>
</div>



<div id="secondary-roof-section" style="display:none;">
    <h2>Secondary Roof Type</h2>
    <label>Is there a secondary type of roofing material we are replacing?</label>
    <div>
        <label>
            <input type="radio" id="secondary-roof-yes" name="secondary-roof" value="Yes">
            Yes
        </label><br>
        <label>
            <input type="radio" id="secondary-roof-no" name="secondary-roof" value="No">
            No
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromSecondaryRoof()">Next</button>
    </div>
</div>

<div id="secondary-roofing-type-section" style="display:none;">
    <h2>Secondary Roofing Type</h2>
    <label>Secondary Roofing Type</label>
    <div>
        <label>
            <input type="radio" id="secondary-roof-shingles" name="secondary-roofing-type" value="Shingles">
            Shingles
        </label><br>
        <label>
            <input type="radio" id="secondary-roof-tiles" name="secondary-roofing-type" value="Tiles">
            Tiles
        </label><br>
        <label>
            <input type="radio" id="secondary-roof-modified-bitumen" name="secondary-roofing-type" value="Modified Bitumen">
            Modified Bitumen
        </label><br>
        <label>
            <input type="radio" id="secondary-roof-coating" name="secondary-roofing-type" value="Coating">
            Coating
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromSecondaryRoofingType()">Next</button>
    </div>
</div>


<div id="secondary-roof-type-shingles-section" style="display:none;">
    <h2>Secondary Roof Type - Shingles</h2>
  <label for="shingles-squares">How many squares of shingles are we replacing?</label>
<input type="number" 
    id="shingles-squares" 
    name="shingles-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('third-roof-type-section')">Next</button>
    </div>
</div>


<div id="secondary-roof-type-tile-section" style="display:none;">
    <h2>Secondary Roof Type - Tile</h2>
 <label for="tile-underlayment-squares">How many squares of tile underlayment are we replacing?</label>
<input type="number" 
    id="tile-underlayment-squares" 
    name="tile-underlayment-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('third-roof-type-section')">Next</button>
    </div>
</div>


<div id="secondary-roof-type-modified-bitumen-section" style="display:none;">
    <h2>Secondary Roof Type - Modified Bitumen</h2> 
    <label for="modified-bitumen-squares">How many squares of modified bitumen are we replacing?</label>
<input type="number" 
    id="modified-bitumen-squares" 
    name="modified-bitumen-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('third-roof-type-section')">Next</button>
    </div>
</div>


<div id="secondary-roof-type-coating-section" style="display:none;">
    <h2>Secondary Roof Type - Coating</h2>
 <label for="coating-squares">How many squares of roof coating are we applying?</label>
<input type="number" 
    id="coating-squares" 
    name="coating-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('third-roof-type-section')">Next</button>
    </div>
</div>



<div id="third-roof-type-section" style="display:none;">
    <h2>Third Roof Type</h2>
    <label>Is there a third type of roofing material we are replacing?</label>
    <div>
        <label>
            <input type="radio" id="third-roof-yes" name="third-roof" value="Yes">
            Yes
        </label><br>
        <label>
            <input type="radio" id="third-roof-no" name="third-roof" value="No">
            No
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromThirdRoof()">Next</button>
    </div>
</div>


<div id="third-roof-type-style-section" style="display:none;">
    <h2>Third Roof Type Style</h2>
    <label>Third Roof Type Style</label>
    <div>
        <label>
            <input type="radio" id="third-roof-style-shingles" name="third-roof-style" value="Shingles">
            Shingles
        </label><br>
        <label>
            <input type="radio" id="third-roof-style-tile" name="third-roof-style" value="Tile">
            Tile
        </label><br>
        <label>
            <input type="radio" id="third-roof-style-modified" name="third-roof-style" value="Modified">
            Modified
        </label><br>
        <label>
            <input type="radio" id="third-roof-style-coating" name="third-roof-style" value="Coating">
            Coating
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromThirdRoofStyle()">Next</button>
    </div>
</div>


<div id="third-roof-type-shingles-section" style="display:none;">
    <h2>Third Roof Type - Shingles</h2>
 <label for="shingles-squares">How many squares of shingles are we replacing?</label>
<input type="number" 
    id="shingles-squares" 
    name="shingles-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">  
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('additional-charges-section')">Next</button>
    </div>
</div>


<div id="third-roof-type-tiles-section" style="display:none;">
    <h2>Third Roof Type - Tiles</h2>
 <label for="tiles-squares">How many squares of tile underlayment are we replacing?</label>
<input type="number" 
    id="tiles-squares" 
    name="tiles-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('additional-charges-section')">Next</button>
    </div>
</div>

<div id="third-roof-type-modified-section" style="display:none;">
    <h2>Third Roof Type - Modified</h2>
  <label for="modified-squares">How many squares of modified bitumen are we replacing?</label>
<input type="number" 
    id="modified-squares" 
    name="modified-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('additional-charges-section')">Next</button>
    </div>
</div>



<div id="third-roof-type-coatings-section" style="display:none;">
    <h2>Third Roof Type - Coatings</h2>
   
   <label for="coatings-squares">How many squares of roof surface are we re-coating?</label>
<input type="number" 
    id="coatings-squares" 
    name="coatings-squares" 
    class="uniform-input" 
    placeholder="Enter number of squares"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('additional-charges-section')">Next</button>
    </div>
</div>


<div id="additional-charges-section" style="display:none;">
    <h2>Additional Charges</h2>
    <label>Are there any additional roofing charges that need to be added to this estimate?</label>
    <div>
        <label>
            <input type="radio" id="additional-charges-yes" name="additional-charges" value="Yes">
            Yes
        </label><br>
        <label>
            <input type="radio" id="additional-charges-no" name="additional-charges" value="No">
            No
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromAdditionalCharges()">Next</button>
    </div>
</div>


<div id="additional-charges-description-section" style="display:none;">
    <h2>Additional Charges - Description</h2>
    
    <label for="additional-charges-description">What additional roofing related items require additional charges?</label>
    <textarea id="additional-charges-description" name="additional-charges-description" class="uniform-input" placeholder="Enter details"></textarea>
  
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('additional-charges-price-section')">Next</button>
    </div>
</div>


<div id="additional-charges-price-section" style="display:none;">
    <h2>Additional Charges - Price</h2>
   
    <label for="additional-charges-price">How much are we charging to complete these additional roofing related items?</label>
  <input type="number" 
    id="additional-charges-price" 
    name="additional-charges-price" 
    class="uniform-input" 
    placeholder="Enter price"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="showSection('solar-section')">Next</button>
    </div>
</div>


<div id="solar-section" style="display:none;">
    <h2>Solar</h2>
    <label>Are there any solar panels that have to be removed to complete the repair?</label>
    <div>
        <label>
            <input type="radio" id="solar-yes" name="solar" value="yes">
            Yes
        </label><br>
        <label>
            <input type="radio" id="solar-no" name="solar" value="no">
            No
        </label>
    </div>
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="navigateFromSolar()">Next</button>
    </div>
</div>

<div id="solar-detach-reset-section" style="display:none;">
    <h2>Solar - Detach and Reset</h2>
    <label for="solar-detach-reset">How many solar panels are we detaching and resetting to complete the roof repair?</label>
    <input type="number" 
    id="solar-detach-reset" 
    name="solar-detach-reset" 
    class="uniform-input" 
    placeholder="Enter number of panels"
    inputmode="numeric"
    pattern="[0-9]*"
    step="0.01">
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="nextFromSolarDetachReset()">Submit</button>
    </div>
</div>
<div id="review-section" style="display:none;">
    <h2>Review Your Estimate</h2>
    <div class="review-instructions">
        <p>Please review your estimate below.</p>
    </div>
    <div class="estimate-preview-container" style="position: relative;">
       <iframe 
    id="estimatePreviewFrame"
    src="about:blank"
    style="display: block !important; 
           visibility: visible !important;
           width: 100%; 
           border: none; 
           margin: 0 auto;
           opacity: 1;">
</iframe>
        <!-- Add loading overlay as a sibling to iframe -->
        <div id="loading-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); display: none;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                <div class="loading-spinner"></div>
                <p id="loading-message">Loading...</p>
            </div>
        </div>
    </div>
    <!-- Moved navigationButtons inside review-section and fixed div nesting -->
    <div id="navigationButtons">
        <button type="button" onclick="goBack()">Back</button>
        <button type="button" onclick="shareEstimate()" class="share-button">Share</button>
    </div>
</div>
</form>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>

</body>
</html>
