layui.use(['layer'], function () {
  var layer = layui.layer;

  $(".Prosecution-bottom-right-top-search").click(function () {
    layer.open({
      title: ['单位选择', 'font-size:18px;'],
      type: 1,
      area: ['500px', '550px'],
      content: $('.czl-unit-selection'),
      btnAlign: 'c',
      btn: ['确定', '取消'],
      yes: function (index) {
        GetCheckedAll()
        layer.close(index); //如果设定了yes回调，需进行手工关闭
      },
      end: function () {
        $(".czl-unit-selection").css("display", "none")
      },
    });
  })

});

var setting = {
    check: {
      enable: true,//checkbox,
      chkStyle: "checkbox",
      chkboxType: { "Y" : "s", "N" : "ps" }
    },
    view: {
      nameIsHTML: true, //允许name支持html				
      selectedMulti: false
    },
    edit: {
      enable: false,
      editNameSelectAll: false
    },
    data: {
      simpleData: {
        enable: true
      }
    }
};
      
    //数据
    var zNodes =[
    { id:1, pId:0, name:"广东省院", open:true},
    { id:11, pId:1, name:"广州市院", open:true },
    { id:111, pId:11, name:"广州市荔湾区院"},
    { id:112, pId:11, name:"广州市越秀区院"},
    { id:113, pId:11, name:"广州市海珠区院"},
    { id:114, pId:11, name:"广州市海珠区院"},
    { id:12, pId:1, name:"韶关市院"},
    { id:121, pId:12, name:"广州市海珠区院"},
    { id:122, pId:12, name:"广州市海珠区院"},
    { id:123, pId:12, name:"广州市海珠区院"},
    { id:124, pId:12, name:"广州市海珠区院"},
    { id:13, pId:1, name:"深圳市院", isParent:true},
    { id:131, pId:13, name:"广州市海珠区院"}
    ];

           $(document).ready(function(){
          $.fn.zTree.init($("#treeDemo99"), setting, zNodes);
          fuzzySearch('treeDemo99','#key',null,true); //初始化模糊搜索方法
        	   //initProvinceTree();
        });

        function GetCheckedAll() {
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo99");
    var nodes = treeObj.getCheckedNodes(true);
    console.log(nodes)
    var msg = [];


    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].isParent === true) {
        for (let j = 0; j < nodes[i].children.length; j++){
          if (nodes[i].children[j].isParent === false){
            msg.push(nodes[i].children[j].name)
          }
        }
      }
    else {
        if (typeof(nodes[i].oldname) === 'undefined') {
        msg.push(nodes[i].name)
      } else {
        msg.push(nodes[i].oldname)
      }
    }
  }
  function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
  }
  msg = unique(msg)
$(".Prosecution-bottom-right-top-search").val(msg.join(';')).attr('title',msg.join(';'));
    
    // for (var i = 0; i < nodes.length; i++) {
    //   console.log(nodes[i].children)
    //   if(nodes[i].children == '' ){
    //     msg += nodes[i].oldname+"，";}
    // }
    // $(".Prosecution-bottom-right-top-search").html(msg);
}   
        
        
function initProvinceTree(){
 $.ajax({
		url : "../../business/provinceIndex/iframe/getProvinceTree",
		dataType : "json",
		async : false,
		type : 'POST',
		success : function(datas) {  		
			var data= datas.data;
			var zNodes = data;
			$.fn.zTree.init($("#treeDemo99"), setting, zNodes);
            fuzzySearch('treeDemo99','#key',null,true); //初始化模糊搜索方法
			//alert(data);
		},
		error : function(r) {
			//return 0;
		}
	});
}
        