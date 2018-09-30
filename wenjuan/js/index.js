var data = {
  q1:'',
  q2:'',
  q3:'',
  q4:'',
  q5:'',
  q6:''
}

function getQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return (r[2]);
    return null;
}

function strategy(data){
  var item_1 = data['q4']
  var item_2 = data['q6']
  if(item_1==1||item_1==2){
    if(item_2==1){
      if(item_1==1){
        return 1
      }else {
        return 2
      }
    }else if (item_2==2) {
      if(item_1==1){
        return 4
      }else {
        return 6
      }
    }else{
      if(item_1==1){
        return 5
      }else {
        return 3
      }
    }
  }else {
    return 'fail'
  }
}
