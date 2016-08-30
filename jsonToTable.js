function jsonTotable(obj,config){
    this.rawData=obj||[
        {
            "name": "Google",
            "url": "http://www.google.com"
        },
        {
            "name": "Baidu",
            "url": "http://www.baidu.com"
        },
        {
            "name": "SoSo",
            "url": "http://www.SoSo.com"
        }
    ];
        this.cls='table';
        this.id='jsonToTable';
        this.val='url';
        this.txt='name';
        this.head=true;
        if(typeof arguments[1]==="object"){
            for(var cons in config){
                this[cons]=config[cons];

            }

        }


    }


jsonTotable.prototype={
    getTable:function(){
         var objs=this.rawData;
        if(typeof objs==="object"){
         var tabs="<table id='"+this.id+"' class='"+this.cls+"'>";
         if(this.head){
tabs+="<tr>";
            for(var items in objs[0]){

                tabs+="<th>"+items+"</th>";
            }
            tabs+="</tr>";
        }
            var length=objs.length;
            for(var i=0;i<length;i++){
                tabs+="<tr>";
                for(var lists in objs[i]){

                    tabs+="<td>"+objs[i][lists]+"</td>";
                }
                tabs+="</tr>";
            }
            tabs+="</table>";
            return tabs;
        }
        else{

            return 'format error';
        }

    },
    getOption:function(){
         var objs=this.rawData;
        if(typeof objs==="object"){
         var tabs="";


                var length=objs.length;
            for(var i=0;i<length;i++){            

                    tabs+="<option value='"+objs[i][this.val]+"'>"+objs[i][this.txt]+"</option>";                
            }

            return tabs;
        }
        else{

            return 'format error';
        }

    }

}


