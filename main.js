function Bmi()
{
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    var truehight = height/100
    var finalBmi = weight/truehight**2
        document.bmiForm.bmi.value = finalBmi.toFixed(2)
    if(finalBmi < 18.50)
    {
        document.bmiForm.result.value ="ผอม"
    }
    else if(finalBmi >18.50 && finalBmi<24.90)
    {
        document.bmiForm.result.value ="ปกติ"
    }
    else if(finalBmi >23 && finalBmi<25)
    {
        document.bmiForm.result.value ="ท้วม"
    }
    else if(finalBmi >25 && finalBmi<29.90)
    {
        document.bmiForm.result.value ="อ้วน"
    }
    else if(finalBmi > 30)
    {
        document.bmiForm.result.value ="อ้วนมาก"
    }
}
/*function reset()
{
    document.bmiForm.weight.value =""
    document.bmiForm.height.value =""
    document.bmiForm.bmi.value =""
    document.bmiForm.result.value =""
}*/