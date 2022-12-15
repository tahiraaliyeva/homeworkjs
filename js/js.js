function smt(){
    var width = document.getElementById('width').value
    var height = document.getElementById('height').value
    var colors = document.getElementById('colors').value
    var position = document.getElementById('position').value
    var top = document.getElementById('top').value
    var left = document.getElementById('left').value
    var tran = document.getElementById('tran').value
    var border = document.getElementById('bord').value
    var bordcol = document.getElementById('bordcol').value

    document.getElementById('cube').style.borderWidth = border
    document.getElementById('cube').style.borderColor = bordcol 
    document.getElementById('cube').style.transition = tran
    document.getElementById('cube').style.left = left
    document.getElementById('cube').style.top= top 
    document.getElementById('cube').style.width = width
    document.getElementById('cube').style.position = position
    document.getElementById('cube').style.height = height
    document.getElementById('cube').style.background = colors
    
}
