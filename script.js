function cur(elem) {
    var a = document.getElementsByTagName('a')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('current')
    }
    elem.classList.add('current');
}

function sh(on, off, off1, off2) {

$(on).className='list on';
$(off).className='list';
$(off1).className='list';
$(off2).className='list';

}

function $(id) {

return document.getElementById(id);

}

function test (a, b, c, d) {

$(a).className='current';
$(b).className='noncurrent';
$(c).className='noncurrent';
$(d).className='noncurrent';

}

function sClick(name) {


}

function showbags(e) {

$(e).className='list on';
}

function hidebags(f) {

$(f).className='list';
}


      //initialize
      var idepth
      var ithickness
      var iwidth
      var idiam
      var iheight
      var ilength = 1; ilength <= 3; ilength       
      var icubicyards
      function calculateSlabPour()
      {
      
      
        var form = document.SlabCalculator;
        
        if (!validateField(form.Thickness,"Please enter a number value in inches for the depth."))
            return false;
        
        if (!validateField(form.Width,"Please enter a number value in feet for the width."))
            return false;
            
        if (!validateField(form.Length,"Please enter a number value in feet for the length."))
            return false;
      
      
        //starting values
        ithickness = form.Thickness.value
        iwidth = form.Width.value;
        ilength = form.Length.value; 
        
        icubicyards = "";
        
           //massage floating point values                                                               
           ithickness = ithickness / 12;
    	
	       icubicyards = floatFix(ithickness * iwidth * ilength / 27, 2);
		   iBags40 = floatFix((icubicyards * 90), 1);
		   iBags60 = floatFix((icubicyards * 60), 1);
		   iBags80 = floatFix((icubicyards * 45), 1);
		
		   //assign
           form.CubicYards.value = icubicyards;
		   form.Bags40.value = iBags40;
		   form.Bags60.value = iBags60;
		   form.Bags80.value = iBags80;

	 return true;

	   }
       
      function calculateFootingPour()
      {
      
        var form = document.FootingCalculator;
        
        if (!validateField(form.Depth,"Please enter a number value in inches for the depth."))
            return false;
        
        if (!validateField(form.Width,"Please enter a number value in inches for the width."))
            return false;
            
        if (!validateField(form.Length,"Please enter a number value in feet for the length."))
            return false;
            
      
        //starting values
        idepth = form.Depth.value;
        iwidth = form.Width.value;
        ilength = form.Length.value; 
        icubicyards = "";
        
        
           //massage floating point values                                                               
           idepth = floatFix(idepth / 12, 2);
           iwidth = floatFix(iwidth / 12, 2);
		   icubicyards = floatFix(((iwidth * idepth) * ilength) / 27, 2);
		   iBags40 = floatFix((icubicyards * 90), 1);
		   iBags60 = floatFix((icubicyards * 60), 1);
		   iBags80 = floatFix((icubicyards * 45), 1);
		
		   //assign
           form.CubicYards.value = icubicyards;
		   form.Bags40.value = iBags40;
		   form.Bags60.value = iBags60;
		   form.Bags80.value = iBags80;
		 
	 return true;
	   }
	
	function calculateColumnPour()
      {
      
        var form = document.ColumnCalculator;
      
        if (!validateField(form.Diameter,"Please enter a number value in inches for the diameter."))
            return false;
        
        if (!validateField(form.Height,"Please enter a number value in inches for the height."))
            return false;
            
            
        //starting values
        idiam = form.Diameter.value;
        iheight = form.Height.value; 
        icubicyards = "";
        
        icubicyards = floatFix(((idiam / 2)*(idiam / 2) * Math.PI * iheight * .0000214334705),2);
	    iBags40 = floatFix((icubicyards * 90), 1);
		iBags60 = floatFix((icubicyards * 60), 1);
		iBags80 = floatFix((icubicyards * 45), 1);
		
		//assign
        form.CubicYards.value = icubicyards;
		form.Bags40.value = iBags40;
		form.Bags60.value = iBags60;
		form.Bags80.value = iBags80;
	 
	 return true;
	   }
              




        function validateField(field, errormsg) {
            
            var value = field.value;
    
           if ((isNaN(value) == true) || (value == ''))
           {
             alert (errormsg);
             field.value = '';
             field.focus();
             return false;
           }
           
           return true;
        }


       function floatFix(value, places)
       {
	
           outstring = Math.round(value*100)/100  
         return (outstring);
       }
