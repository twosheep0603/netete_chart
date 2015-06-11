var netete;
function query(){
  var cc = $('input[name=num]').val();
  var color = $('input[name=color]:checked').val();
  var mode = $('#mode').val();
  var jel = $('.jewel');
  var plate = netete[mode][cc];

  for(var i = 0; i < jel.length; i++){
    if(plate & 1){
      $(jel[i]).attr('type', 'main');
      $(jel[i]).css('background-color', color);
    } 
    else{
      $(jel[i]).attr('type', 'sub');
      $(jel[i]).css('background-color', '#c29');
    }
    plate = plate >>> 1;
  }
}

function reflect(){
  if($('input[name="mirror"]').is(':checked'))
    $('.panel').css('transform', 'matrix(-1,0,0,1,0,0)');
  else $('.panel').css('transform', 'none');
}

/**/
$('#mode').on('change', function(){
  var mode = $('#mode').val();
  if(mode === 'lakshmi' || mode === 'saraswati'){
    console.log('什米萌萌 新水印超正');
    $('input[name=color]').attr('checked', false);
    $('input[name=color]')[1].checked = true;
  }else if(mode === 'krishna'){
    $('input[name=color]').attr('checked', false);
    $('input[name=color]')[0].checked = true;
  }else if(mode === 'uuu'){
    console.log("還不是靠劉備");
  }
  query();
});

$('#subnum').change(function(){
  query();
});

$('input[name=color]').change(function(){
  query();
});

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
    '5':1072938479,
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
  },
  'rowpp':{
    '5':1073741351,
    '6':1073721663,
    '7':1073451455,
    '8':1071558975,
    '9':1064188223,
    '10':603818431,
    '11':570263999,
    '12':570261951,
    '13':570261950,
    '14':570261945,
    '15':553390040,
    '16':51490786,
    '17':51490784,
    '18':16519104
  },
  'herowpp':{
    '5':1073741351,
    '6':1073721663,
    '7':1073451455,
    '8':1071558975,
    '9':1064188223,
    '10':603818431,
    '11':570263999,
    '12':570261951,
    '13':570261950,
    '14':570261945,
    '15':553390040,
    '16':51490786,
    '17':51490784,
    '18':16519104
  },
  'lakshmi':{
    '5':803192639,
    '6':1061109567,
    '7':1069495103,
    '8':1061106495,
    '9':1067356607,
    '10':1066240447,
    '11':1066238399,
    '12':1057222719,
    '13':50176319,
    '14':293112255,
    '15':553390040,
    '16':51744737,
    '17':33304324,
    '18':18386928
  },
  'krishna':{
    '5':7865472,
    '6':7865472,
    '7':7865472,
    '8':1072648830,
    '9':788500895,
    '10':603477759,
    '11':603818430,
    '12':603816382,
    '13':570261950,
    '14':570261822,
    '15':553484606,
    '16':1041797056,
    '17':941395904,
    '18':538808256
  },
  'saraswati':{
    '5':7865472,
    '6':7865472,
    '7':7865472,
    '8':801824251,
    '9':1004318077,
    '10':797627899,
    '11':797627897,
    '12':507830131,
    '13':507830115,
    '14':507828067,
    '15':1011143921,
    '16':1011143905,
    '17':116982728,
    '18':7865472
  }
}
