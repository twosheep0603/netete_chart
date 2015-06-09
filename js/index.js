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
    '18':35171516
  },
  'combo':{
    '5':1006362363,
    '6':1039134075,
    '7':802905851,
    '8':1006262011,
    '9':785823227,
    '10':802821883,
    '11':802820859,
    '12':599480035,
    '13':476993117,
    '14':476993116,
    '15':132152839,
    '16':596748455,
    '17':243876446,
    '18':243876430
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