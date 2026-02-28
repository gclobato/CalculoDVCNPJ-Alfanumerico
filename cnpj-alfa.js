function _0x2f3a(c){
  return /[0-9]/.test(c)
    ? parseInt(c,10)
    : c.toUpperCase().charCodeAt(0) - 48;
}

function _0x8c1d(b){
  const w=[2,3,4,5,6,7,8,9];
  let s=0,i=0;
  for(let x=b.length-1;x>=0;x--){
    s += _0x2f3a(b[x]) * w[i];
    i=(i+1)%w.length;
  }
  const r=s%11;
  return (r===0||r===1)?0:11-r;
}

function _0x5e6b(b){
  b=b.replace(/[^0-9A-Za-z]/g,"").toUpperCase();
  if(b.length!==12) return null;

  const d1=_0x8c1d(b);
  const d2=_0x8c1d(b+d1);

  return b+d1+d2;
}

function _0x4d9e(c){
  c=c.replace(/[^0-9A-Za-z]/g,"").toUpperCase();
  if(c.length!==14) return c;

  return c.slice(0,2)+"."+c.slice(2,5)+"."+c.slice(5,8)+"/"+
         c.slice(8,12)+"-"+c.slice(12);
}

function _0x9a1c(){
  const b=document.getElementById("cnpjBase").value;
  const r=_0x5e6b(b);
  const s=document.getElementById("status");

  if(!r){
    s.textContent="Base inválida";
    s.className="qa-status erro";
    return;
  }

  document.getElementById("cnpjFull").value=_0x4d9e(r);
  s.textContent="DV gerado com sucesso";
  s.className="qa-status ok";
}

function _0x7b2f(){
  const i=document.getElementById("cnpjFull").value;
  const c=i.replace(/[^0-9A-Za-z]/g,"").toUpperCase();
  const s=document.getElementById("status");

  if(c.length!==14){
    s.textContent="CNPJ inválido";
    s.className="qa-status erro";
    return;
  }

  const b=c.slice(0,12);
  const dv=c.slice(12);
  const calc=_0x5e6b(b);

  if(calc && calc.slice(12)===dv){
    s.textContent="CNPJ válido ✔";
    s.className="qa-status ok";
  }else{
    s.textContent="CNPJ inválido ✖";
    s.className="qa-status erro";
  }
}