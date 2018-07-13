export default function calcDate(dateIsoFormat) {
    let date = new Date(dateIsoFormat);
    let year = date.getFullYear();
    let  month = date.getMonth()+1;
    let  dt = date.getDate();
    let  hh = ''+date.getHours();
    if(hh.length===1){
        hh='0'+hh;
    }
    let  mm = ''+date.getMinutes();
    if(mm.length===1){
        mm='0'+mm;
    }
    let  ss =''+ date.getSeconds();
    if(ss.length===1){
        ss='0'+ss;
    }

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

return dt+'-' + month + '-'+year + ' At ' + hh + ':' + mm +':'+ss;
}