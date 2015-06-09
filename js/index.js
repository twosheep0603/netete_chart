var netete;

function query(){
  cc = $('input[name=num]').val()
  color = $('input[name=color]:checked').val()
  mode = $('input:radio:checked').val()
  jel=$('.jewel');

  var plate = netete[mode][cc];
  for(i=0;i<jel.length;i++){
    if(plate%2==1){
      $(jel[i]).attr('type','main');
      $(jel[i]).css('background-color',color);
    } 
    else{
      $(jel[i]).attr('type','sub');
      $(jel[i]).css('background-color','#c29');
    }
    plate=plate>>>1;
  }
}

function reflect(){
  if($('input[name="mirror"]').is(':checked'))
  $('.panel').css('transform','matrix(-1,0,0,1,0,0)');
  else $('.panel').css('transform','none');
}

/*Create Database*/
var netete=  {
  'uuu':{
    '5':7865472,
    '6':7865472,
    '7':1073713597,
    '8':931052847,
    '9':802854395,
    '10':802854141,
    '11':116766973,
    '12':116765053,
    '13':116764797,
    '14':90689788,
    '15':86495484,
    '16':107364161,
    '17':107466945,
    '18':7865472
  },
  'combo':{
    '5':,
    '6':,
    '7':,
    '8':,
    '9':,
    '10':,
    '11':,
    '12':,
    '13':,
    '14':,
    '15':,
    '16':,
    '17':,
    '18':
  },
  'rrow':{
    '6':1071806463,
    '7':1073451455,
    '8':1071558975,
    '9':1071676991,
    '10':603818431,
    '11':570263999,
    '12':570261951,
    '13':570261950,
    '14':570261945,
    '15':553390040,
    '16':51490786,
    '17':51490784,
    '18':16519104
  }
}