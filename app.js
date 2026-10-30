let exp="";
function add(v){ if(v=='+/-'){exp=exp.startsWith('-')?exp.slice(1):'-'+exp}else exp+=v; document.getElementById('res').innerText=exp||"0"}
function clearAll(){exp=""; document.getElementById('res').innerText="0"}
function del(){exp=exp.slice(0,-1); document.getElementById('res').innerText=exp||"0"}
function calc(){ try{ if(!exp) throw "vacío"; let r=eval(exp); if(r<0) throw "negativo"; document.getElementById('res').innerText=r; exp=""+r }catch(e){ document.getElementById('res').innerText=e=="vacío"?"Campo vacío":e=="negativo"?"negativo no permitido":"Error"} }

function showMsg(id,txt){document.getElementById(id).innerText=txt}
function convM(){let v=document.getElementById('m').value; if(v===""){showMsg('msgL',"Campo vacío");return} if(v<0){showMsg('msgL',"negativo no permitido - valor negativo rechazado");return} showMsg('msgL',""); document.getElementById('cm').value=v*100}
function convCm(){let v=document.getElementById('cm').value; if(v===""){showMsg('msgL',"Campo vacío");return} if(v<0){showMsg('msgL',"negativo no permitido");return} showMsg('msgL',""); document.getElementById('m').value=v/100}
function convKg(){let v=document.getElementById('kg').value; if(v===""){showMsg('msgP',"Campo vacío");return} if(v<0){showMsg('msgP',"negativo no permitido");return} showMsg('msgP',""); document.getElementById('g').value=v*1000}
function convG(){let v=document.getElementById('g').value; if(v===""){showMsg('msgP',"Campo vacío");return} if(v<0){showMsg('msgP',"negativo no permitido");return} showMsg('msgP',""); document.getElementById('kg').value=v/1000}