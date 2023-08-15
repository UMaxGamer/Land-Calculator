var x=1;
function call(){
  a=document.getElementById("unit");
  avalue=a.value;
  b=document.getElementById("unit2");
  bvalue=b.value;
  n=avalue+"2"+bvalue;
  x=document.getElementById("FarmingCalculator").value;
  if (n=="a2h"){
    r=a2h();
  }
  else if (n=="a2b"){
    r=a2b();
  }
  else if (n=="a2m"){
    r=a2m();
  }
  else if (n=="a2f"){
    r=a2f();
  }
  else if (n=="a2y"){
    r=a2y();
  }
  else if (n=="y2a"){
    r=y2a();
  }
  else if (n=="y2h"){
    r=y2h();
  }
  else if (n=="y2b"){
    r=y2b();
  }
  else if (n=="y2m"){
    r=y2m();
  }
  else if (n=="y2f"){
    r=y2f();
  }
  else if (n=="f2a"){
    r=f2a();
  }
  else if (n=="f2h"){
    r=f2h();
  }
  else if (n=="f2b"){
    r=f2b();
  }
  else if (n=="f2m"){
    r=f2m();
  }
  else if (n=="f2y"){
    r=f2y();}
    else if (n=="m2a"){
      r=m2a();
    }
    else if (n=="m2h"){
      r=m2h();
    }
    else if (n=="m2b"){
      r=m2b();
    }
    else if (n=="m2y"){
      r=m2y();
    }
    else if (n=="m2f"){
      r=m2f();
    }
    else if (n=="b2a"){
      r=b2a();
    }
    else if (n=="b2h"){
      r=b2h();
    }
    else if (n=="b2y"){
      r=b2y();
    }
    else if (n=="b2m"){
      r=b2m();
    }
    else if (n=="b2f"){
      r=b2f();
    }
    else if (n=="h2a"){
      r=h2a();
    }
    else if (n=="h2y"){
      r=h2y();
    }
    else if (n=="h2b"){
      r=h2b();
    }
    else if (n=="h2m"){
      r=h2m();
    }
    else if (n=="h2f"){
      r=h2f();
    }
    document.getElementById("r").innerHTML=r;
  }

  function a2b(){
    return x*1.613+" Bigha"
  }
  function b2h(){
    return x*0.25+" Hectors"
  }
  function m2h(){
    return x*0.0001+" Hectors"
  }
  function f2h(){
    return x/107600+" Hectors"
  }
  function y2h(){
    return x/11960+" Hectors"
  }
  function a2h(){
    return x*0.40468+" Hectors"
  }
  function h2b(){
    return x*3.953+" Bigha"
  }
  function m2b(){
    return x*0.0004+" Bigha"
  }
  function f2b(){
    return x*0.00035+" Bigha"
  }
  function y2b(){
    return x*0.00033+" Bigha"
  }
  function b2a(){
    return x*0.399+" Acre"
  }
  function h2a(){
    return x*2.471+" Acre"
  }
  function m2a(){
    return x*0.000247+" Acre"
  }
  function f2a(){
    return x*0.000023+" Acre"
  }
  function y2a(){
    return x*0.000207+" Acre"
  }
  function a2f(){
    return x*43560.057+" Square feet"
  }
  function b2f(){
    return x*17424.000+" Square feet"
  }
  function h2f(){
    return x*107639.15+" Square feet"
  }
  function m2f(){
    return x*10.764+" Square feet"
  }
  function y2f(){
    return x*9+" Square feet"
  }
  function f2y(){
    return x*0.111+" Square Yard"
  }
  function m2y(){
    return x*1.196+" Square Yard"
  }
  function a2y(){
    return x*4840+" Square Yard"
  }
  function b2y(){
    return x*1936+" Square Yard"
  }
  function h2y(){
    return x*11959.905+" Square Yard"
  }
  function f2m(){
    return x*0.0929+" Square Meter"
  }
  function y2m(){
    return x*0.836127+" Square Meter"
  }
  function a2m(){
    return x*4046.86+" Square Meter"
  }
  function h2m(){
    return x*10000+" Square Meter"
  }
  function b2m(){
    return x*1618.741872+" Square Meter"
  }