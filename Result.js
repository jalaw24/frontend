function Calculate() {

var total, grade

	var Com415Ca = parseInt(document.myform.txtCalCom415.value);
	var Com415Exam = parseInt(document.myform.txtExamCom415.value);
 
	total = Com415Ca + Com415Exam;
	document.myform.txtTotalCom415.value = total;

	if (total >= 70) {
     grade = "A"
     document.myform.txtGradeCom415.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeCom415.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeCom415.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeCom415.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeCom415.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeCom415.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeCom415.value = grade;
	}
   
   var Chem101Ca = parseInt(document.myform.txtCalChem101.value);
	var Chem101Exam = parseInt(document.myform.txtExamChem101.value);
 
 total = Chem101Ca + Chem101Exam;
	document.myform.txtTotalChem101.value = total;
  
  if (total >= 70) {
     grade = "A"
     document.myform.txtGradeChem101.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeChem101.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeChem101.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeChem101.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeChem101.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeChem101.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeChem101.value = grade;
	}

	  var Phy201Ca = parseInt(document.myform.txtCalPhy201.value);
	var Phy201Exam = parseInt(document.myform.txtExamPhy201.value);
 
 total = Phy201Ca + Phy201Exam;
	document.myform.txtTotalPhy201.value = total;

	if (total >= 70) {
     grade = "A"
     document.myform.txtGradePhy201.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradePhy201.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradePhy201.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradePhy201.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradePhy201.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradePhy201.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradePhy201.value = grade;
	}
  
   var Bio302Ca = parseInt(document.myform.txtCalBio302.value);
	var Bio302Exam = parseInt(document.myform.txtExamBio302.value);
 
 total = Bio302Ca + Bio302Exam;
	document.myform.txtTotalBio302.value = total;

	if (total >= 70) {
     grade = "A"
     document.myform.txtGradeBio302.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeBio302.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeBio302.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeBio302.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeBio302.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeBio302.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeBio302.value = grade;
	}
    
     var Maths401Ca = parseInt(document.myform.txtCalMaths401.value);
	var Maths401Exam = parseInt(document.myform.txtExamMaths401.value);
 
 total = Maths401Ca + Maths401Exam;
	document.myform.txtTotalMaths401.value = total;

	if (total >= 70) {
     grade = "A"
     document.myform.txtGradeMaths401.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeMaths401.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeMaths401.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeMaths401.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeMaths401.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeMaths401.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeMaths401.value = grade;
	}
     
     var Eng102Ca = parseInt(document.myform.txtCalEng102.value);
	var Eng102Exam = parseInt(document.myform.txtExamEng102.value);
 
 total = Eng102Ca + Eng102Exam;
	document.myform.txtTotalEng102.value = total;
    
    if (total >= 70) {
     grade = "A"
     document.myform.txtGradeEng102.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeEng102.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeEng102.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeEng102.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeEng102.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeEng102.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeEng102.value = grade;
	}

	var FurMat302Ca = parseInt(document.myform.txtCalFurMat302.value);
	var FurMat302Exam = parseInt(document.myform.txtExamFurMat302.value);
 
 total = FurMat302Ca + FurMat302Exam;
	document.myform.txtTotalFurMat302.value = total;
     
     if (total >= 70) {
     grade = "A"
     document.myform.txtGradeFurMat302.value = grade;
	} else if (total >= 60) {
		grade = 'B'
		document.myform.txtGradeFurMat302.value = grade;
	} else if (total >= 50) {
		grade = 'C'
		document.myform.txtGradeFurMat302.value = grade;
	} else if (total >= 40) {
		grade = 'D'
		document.myform.txtGradeFurMat302.value = grade;
	} else if (total >= 30) {
		grade = 'E'
		document.myform.txtGradeFurMat302.value = grade;
	} else if (total <= 30) {
		grade = 'F'
		document.myform.txtGradeFurMat302.value = grade;
	} else {
		grade = 'Unknown' 
		document.myform.txtGradeFurMat302.value = grade;
	}
     }
clear.addEventListener("click", function() {
  input.innerHTML = "";
})