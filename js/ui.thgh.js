document.querySelectorAll('#gauge0').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 0,
      arrows: '20,80'
    }
  })
})
document.querySelectorAll('#gauge1').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 20
    }
  })
})
document.querySelectorAll('#gauge2').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 50
    }
  })
})
document.querySelectorAll('#gauge3').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 90
    }
  })
})
document.querySelectorAll('#gauge4').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 15,
      arrows: '20,80'
    }
  })
})
document.querySelectorAll('#gauge5').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 45,
      arrows: '30,70'
    }
  })
})
document.querySelectorAll('#gauge6').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 70,
      arrows: '60,85'
    }
  })
})
document.querySelectorAll('#gauge7').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 25,
      arrows: '60,85'
    }
  })
})
document.querySelectorAll('#gauge8').forEach(function(elem){
  new NumberGauge({
    target: elem,
    props: {
      value: 35,
      arrows: '50,85'
    }
  })
})