

var arreglo = [];

function generaArreglo(){
	max = 1000;
	min = 0;
	n = 30;
    var divPrincipal = document.getElementById('divOrd');
	for (var i = 0; i < n; i++) {
		arreglo[i] = Math.floor(Math.random() * (max - min)) + min;
		var div = document.createElement('div');
    	div.id = i;
    	div.className = "elementosArreglo";
    	div.style.display = 'inline-block';
    	div.style.width = (900/n).toString() + "px";
    	div.style.margin = ((900/n)/(n/2.5)) + "px";
    	div.style.height =  ((arreglo[i]/(max-min))*400) .toString() + "px";
    	divPrincipal.appendChild(div);
	}
	console.log(arreglo);
} 

function ordena(){
	var len = arreglo.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                var tmp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = tmp;
                var divj = document.getElementById(j);
                var divj1 = document.getElementById(j+1);

                var divjHeight = divj.style.height;
                var divj1Height = divj1.style.height;

                divj.style.height = divj1Height;
                divj1.style.height = divjHeight;
            }
        }
    }
}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


