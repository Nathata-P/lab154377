import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

class Bmi {
    constructor(Weight, Height) {
        this.w = Weight
        this.h = Height
    }
    get Weight() {
        return this.w
    }
    get Height() {
        return this.h
    }

    calBMI() {
        let bmi = this.w / (this.h * this.h)
        return bmi
    }

    classBMI(numBMI) {
        if (numBMI < 18.5) {
            return "ไอ้ก้างเอ้ย"
        } else if (numBMI < 22.9) {
            return "ดีครับ"
        } else if (numBMI < 24.9) {
            return "ไอ้อ้วน"
        } else if (numBMI < 29.9) {
            return "ไอ้อ้วนอ้วย"
        } else {
            return "ไอ้อ้วนนนนนนนนน"
        }

    }
}

var btnBmi = document.getElementById("btnBmi")

btnBmi.addEventListener("click", () => {
    console.log("hey")
    var Weight = document.getElementById("Weight").value
    var Height = document.getElementById("Height").value

    if (Height > 3) {
        alert("Are you idiot. I told you in meters?")
    } else {

        // let num_bmi = calBMI(Weight, Height)
        // let txt_bmi = classBMI(num_bmi)

        let num_bmi = new Bmi(Weight, Height)
        let bmi = num_bmi.calBMI()
        let txt_bmi = num_bmi.classBMI(bmi)

        console.log(num_bmi.Weight, num_bmi.Height, bmi)
        console.log(txt_bmi)

        if (num_bmi < 23) {
            document.getElementById('txtBmi').innerHTML = '<h1 class ="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('nunn').innerHTML = '<h1 class ="badge text-bg-info">This is your BMI: ' + bmi.toFixed(2) + ' </h1> '
            document.getElementById('imgp').innerHTML = '<img src="https://i.chzbgr.com/full/3244687360/h2563531A/obesity">'
        } else {
            document.getElementById('txtBmi').innerHTML = '<h1 class ="badge text-bg-danger">' + txt_bmi + '</h1>'
            document.getElementById('nunn').innerHTML = '<h1 class ="badge text-bg-info">This is your BMI: ' + bmi.toFixed(2) + ' </h1> '
            document.getElementById('imgp').innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGswViuB73Fbd3ZGyQAF1XLirn3qcTbfTHU98WFOAUw&s=10">'

        }


        // document.getElementById('txtBmi').innerHTML = '<h1 class ="badge text-bg-success">' + txt_bmi + '<h/1>'
        // document.getElementById('nunn').innerHTML = '<h1 class ="badge text-bg-info">This is your BMI: ' + num_bmi.toFixed(2) + ' <h/1> '
        // document.getElementById('imgp').innerHTML = '<img src="https://www.lanacion.com.ar/resizer/v2/imagen-editada-por-un-hincha-de-enzo-fernandez-23KY5B7LWJE4BJCCGEV4FREG2U.jpg?auth=3fdd1e8c592099e4d5909264d7628af80ff0fa78e449debf8305842ff917bc2c&width=1200&height=800&quality=70&smart=true">'
        // // console.log(Weight, Height)
        // // console.log("BMI", num_bmi, txt_bmi)
    }
})