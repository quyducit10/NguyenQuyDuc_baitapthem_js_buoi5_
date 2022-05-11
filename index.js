

function tinhTienthue(){
    var hoTen = document.getElementById('inName').value
    var thuNhap =+document.getElementById('thunhap').value
    var soNguoi =+document.getElementById('soNguoi').value

    var tienthunhap = tinhthunhap(thuNhap,soNguoi)
    var thue = 0
    if(tienthunhap <= 60e+6){
        thue += tienthunhap*0.05
    }else if(tienthunhap<=120e+6){
        thue += 60e+6*0.05 + (tienthunhap - 60e+6)*0.1
    }else if(tienthunhap<=210e+6){
        thue +=60e+6*0.05 + 60*0.1+(tienthunhap-120e+6)*0.15
    }else if(tienthunhap<=384e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+(tienthunhap-210e+6)*0.2
    }else if(tienthunhap<=624e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+(tienthunhap-384e+6)*0.25
    }else if(tienthunhap<=960e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+240e+6*0.25+(tienthunhap-624e+6)*0.3
    }else{
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+240e+6*0.25+336e+6*0.3+(tienthunhap-960e+6)*0.35
    }
    
    document.getElementById('ketquatienthue').style.display = 'block'
    document.getElementById('outName').innerHTML = hoTen +';'
    document.getElementById('outMoney').innerHTML = thue.toLocaleString()
    
}

//Ham tinh thu nhap chiu thue

function tinhthunhap(thuNhap,soNguoi){
    return thuNhap - 4e+6 - (soNguoi*1600000)
}

//Bai tap 4


function tinhtiencap(){
    var loaiKh = document.getElementById('loaikh').value
    var maKh =document.getElementById('makh').value
    var soKenh =+document.getElementById('sokenh').value
    var soKn =+document.getElementById('sokn').value
    var price = 0
    if(loaiKh==1){
        price = tiencap(4.5,20.5,7.5,soKenh,soKn,)
    }else if(loaiKh==2){
       price = tiencap(15,75,50,soKenh,soKn,)
    }

    document.getElementById('hienketqua').style.display = 'block'
    document.getElementById('inmakh').innerHTML = maKh +';'
    document.getElementById('intiencap').innerHTML ='$'+ price
}

//Ham onchange
function hiensoKn(){
    var loai =+document.getElementById('loaikh').value
    console.log(loai)
    if(loai === 1 || loai===0){
        document.getElementById('hienso').style.display='none'
    }else{
        document.getElementById('hienso').style.display='block'
    }   
}
//Ham tinh tien cap
function tiencap(hoadon,phidv,tienthuekenh,soKenh,soKn,){
    var price = 0
    if(soKn<=10){
        price = hoadon+phidv+(tienthuekenh*soKenh)
    }else{
        price = hoadon+phidv+(tienthuekenh*soKenh)+(soKn-10)*5
    }
    return price
}
