webpackJsonp([88],{1577:function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),c=t.n(r),d=t(270),h=t(28),m=t(1588),s=function(){function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}(),u=[{title:"M\xe3 sv",dataIndex:"code",key:"code"},{title:"H\u1ecd v\xe0 t\xean",dataIndex:"name",key:"name"},{title:"Ng\xe0y sinh",dataIndex:"birthdate",key:"birthdate"},{title:"Thao t\xe1c",dataIndex:"operation",render:function(n,e){return m.A.length>=1?c.a.createElement(r.Fragment,null,c.a.createElement(h.d,{className:"btnNoiNgoaiTru",type:"primary",href:"#return-doc/form/"+e.code},"Ho\xe0n tr\u1ea3")):null}}],l=function(n){function e(){var n,t,o,r;a(this,e);for(var c=arguments.length,d=Array(c),h=0;h<c;h++)d[h]=arguments[h];return t=o=i(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(d))),o.state={},r=t,i(o,r)}return o(e,n),s(e,[{key:"render",value:function(){return c.a.createElement(h.f,{title:"Tr\u1ea3 gi\u1ea5y t\u1edd"},c.a.createElement(h.v,null,c.a.createElement(h.j,{span:24},c.a.createElement(h.A,{bordered:!0,dataSource:m.A,columns:u}))))}}]),e}(r.Component);e.default=function(n){return c.a.createElement(d.a,n,c.a.createElement(l,null))}},1588:function(n,e,t){"use strict";t.d(e,"L",function(){return a}),t.d(e,"S",function(){return i}),t.d(e,"h",function(){return o}),t.d(e,"M",function(){return r}),t.d(e,"E",function(){return c}),t.d(e,"F",function(){return d}),t.d(e,"U",function(){return h}),t.d(e,"z",function(){return m}),t.d(e,"y",function(){return s}),t.d(e,"J",function(){return u}),t.d(e,"I",function(){return l}),t.d(e,"O",function(){return g}),t.d(e,"m",function(){return b}),t.d(e,"B",function(){return T}),t.d(e,"R",function(){return N}),t.d(e,"Q",function(){return C}),t.d(e,"P",function(){return y}),t.d(e,"i",function(){return p}),t.d(e,"j",function(){return f}),t.d(e,"g",function(){return S}),t.d(e,"e",function(){return v}),t.d(e,"C",function(){return B}),t.d(e,"t",function(){return H}),t.d(e,"N",function(){return D}),t.d(e,"G",function(){return V}),t.d(e,"l",function(){return L}),t.d(e,"b",function(){return K}),t.d(e,"a",function(){return A}),t.d(e,"A",function(){return O}),t.d(e,"q",function(){return k}),t.d(e,"K",function(){return x}),t.d(e,"r",function(){return P}),t.d(e,"d",function(){return R}),t.d(e,"c",function(){return E}),t.d(e,"p",function(){return X}),t.d(e,"n",function(){return G}),t.d(e,"w",function(){return M}),t.d(e,"D",function(){return j}),t.d(e,"s",function(){return _}),t.d(e,"o",function(){return w}),t.d(e,"T",function(){return Q}),t.d(e,"x",function(){return q}),t.d(e,"u",function(){return Y}),t.d(e,"v",function(){return z}),t.d(e,"f",function(){return I}),t.d(e,"H",function(){return F}),t.d(e,"k",function(){return J});var a=[{code:"001",name:"Nguy\u1ec5n V\u0103n A",birthdate:"12/01/1990",academicRank:"Ph\xf3 gi\xe1o s\u01b0",degree:"Ti\u1ebfn s\u1ef9",title:"Ph\xf3 ti\u1ebfn s\u1ef9",position:"Ph\xf3 gi\xe1m \u0111\u1ed1c"},{code:"002",name:"Tr\u1ea5n Tu\u1ea5n B",birthdate:"01/03/1990",academicRank:"Gi\xe1o s\u01b0",degree:"Gi\xe1o s\u01b0",title:"Gi\xe1o s\u01b0",position:"Gi\xe1m \u0111\u1ed1c"}],i=[{id:1,code:"TCN",name:"Trung c\u1ea5p ngh\u1ec1",nameEn:"",regulation:25},{id:2,code:"CN",name:"Cao \u0111\u1eb3ng ngh\u1ec1",nameEn:"",regulation:30},{id:3,code:"CQ",name:"Ch\xednh quy",nameEn:"",regulation:40}],o=[{id:1,code:"CK",name:"C\u01a1 kh\xed",nameEn:""},{id:2,code:"DT",name:"\u0110i\u1ec7n - \u0110i\u1ec7n t\u1eed",nameEn:""},{id:3,code:"KT",name:"Kinh t\u1ebf",nameEn:""},{id:4,code:"Y",name:"Y h\u1ecdc",nameEn:""},{id:5,code:"CK",name:"C\u01a1 khi",nameEn:""},{id:5,code:"D",name:"\u0110i\u1ec7n",nameEn:""}],r=[{codeDepartment:"CK",code:"TH",name:"Tin h\u1ecdc \u1ee9ng d\u1ee5ng",nameEn:""},{codeDepartment:"CK",code:"CNPM",name:"C\xf4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m",nameEn:""}],c=[{trainingIndustryCode:"TH",code:"TH",name:"Tin h\u1ecdc",nameEn:""},{trainingIndustryCode:"SH",code:"SH",name:"Sinh h\u1ecdc",nameEn:""}],d=[{trainingIndustryCode:"TH",code:"TH",name:"Tin h\u1ecdc \u1ee9ng d\u1ee5ng",nameEn:""},{trainingIndustryCode:"TH",code:"CNPM",name:"C\xf4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m",nameEn:""},{trainingIndustryCode:"SH",code:"CNSH",name:"C\xf4ng ngh\u1ec7 sinh h\u1ecdc",nameEn:""}],h=[{code:"01",name:"Khu v\u1ef1c 1"},{code:"02",name:"Khu v\u1ef1c 2"}],m=[{code:"01",name:"Nh\xf3m \u01b0u ti\xean 01"},{code:"02",name:"Nh\xf3m \u01b0u ti\xean 02"},{code:"03",name:"Nh\xf3m \u01b0u ti\xean 03"}],s=[{id:1,code:"01",name:"C\xf3 cha, m\u1eb9 l\xe0 ng\u01b0\u1eddi d\xe2n t\u1ed9c thi\u1ec3u s\u1ed1",maxScores:100},{id:2,code:"02",name:"C\xf4ng d\xe2n \u01b0u t\xfa",maxScores:70},{id:3,code:"03",name:"con li\u1ec7t s\u1ef9, th\u01b0\u01a1ng binh",maxScores:80}],u=[{code:"SVMC",name:"Sinh vi\xean m\u1ed3 c\xf4i",maxScores:6e4},{code:"SVN",name:"Sinh vi\xean thu\u1ed9c h\u1ed9 ngh\xe8o",maxScores:7e4},{code:"DT",name:"D\xe2n t\u1ed9c \xedt ng\u01b0\u1eddi",maxScores:4e4}],l=[{code:"LT",name:"L\u1edbp tr\u01b0\u1edfng"},{code:"LP",name:"L\u1edbp ph\xf3"},{code:"BT",name:"B\xed th\u01b0"}],g=[{sign:"PCT",type:"Ph\xf2ng CT & CTSV \u0111\xe1nh gi\xe1",maxScores:100,sumScores:!0,score:!0,subScores:!1,view:!0},{sign:"BBB",type:"BBB",maxScores:200,sumScores:!1,score:!0,subScores:!0,view:!0},{sign:"CCC",type:"CCC",maxScores:300,sumScores:!0,score:!0,subScores:!1,view:!0}],b=[{code:"XS",name:"Xu\u1ea5t s\u1eafc",nameEn:"",fromScores:90,toScores:100,plusMark10:1,plusMark4:0}],T=[{id:1,system:"\u0110\u1ea1i h\u1ecdc t\xedn ch\u1ec9",nameRating:"Xu\u1ea5t s\u1eafc",codeRating:"XS",min10:8,min4:3.2,minTrainingPoints:80,totalMoney:1e7},{id:2,system:"\u0110\u1ea1i h\u1ecdc t\xedn ch\u1ec9",nameRating:"Xu\u1ea5t s\u1eafc",codeRating:"XS",min10:8,min4:3.2,minTrainingPoints:80,totalMoney:1e7},{id:3,system:"Cao \u0111\u1eb3ng t\xedn ch\u1ec9",nameRating:"Kh\xe1",codeRating:"KH",min10:7,min4:3.2,minTrainingPoints:10,totalMoney:8e6},{id:4,system:"Trung c\u1ea5p t\xedn ch\u1ec9",nameRating:"Gi\u1ecfi",codeRating:"GI",min10:8,min4:3.2,minTrainingPoints:80,totalMoney:1e7},{id:5,system:"\u0110\u1ea1i h\u1ecdc t\xedn ch\u1ec9",nameRating:"Xu\u1ea5t s\u1eafc",codeRating:"XS",min10:8,min4:3.2,minTrainingPoints:80,totalMoney:1e7}],N=[{id:1,level:"C\u1ea5p tr\u01b0\u1eddng",type:"Chi\u1ebfn s\u1ef9 thi \u0111ua"},{id:2,level:"C\u1ea5p tr\u01b0\u1eddng",type:"V\xec k\u1ebft qu\u1ea3 h\u1ecdc t\u1eadp"},{id:3,level:"C\u1ea5p tr\u01b0\u1eddng",type:"\u0110o\xe0n vi\xean \u01b0u t\xfa"}],C=[{type:"C\u1ea3nh b\xe1o 1",level:1},{type:"C\u1ea3nh b\xe1o 2",level:2},{type:"C\u1ea3nh b\xe1o 3",level:3}],y=[{code:"DN",name:"\u0110\xe1nh nhau"},{code:"SDMT",name:"H\xfat ma t\xfay"},{code:"TC",name:"Tr\u1ed9n c\u1eafp"}],p=[{code:"A1",name:"A1",numberFloor:"15"},{code:"C1",name:"C1",numberFloor:"15"},{code:"B1",name:"B1",numberFloor:"26"}],f=[{id:"1",dormitoryBuildingCode:"A1",floorNumber:1,roomNumber:101,capacity:10,device:"",price:12e4},{id:"2",dormitoryBuildingCode:"A1",floorNumber:1,roomNumber:102,capacity:15,device:"",price:21e4},{id:"3",dormitoryBuildingCode:"A1",floorNumber:1,roomNumber:103,capacity:5,device:"",price:15e4}],S=[{code:"12",name:"Kh\xf3a 12",typeOfTrainingCode:"CQ",fromYear:2012,toYear:2019},{code:"13",name:"Kh\xf3a 13",typeOfTrainingCode:"CQ",fromYear:2013,toYear:2020},{code:"14",name:"Kh\xf3a 14",typeOfTrainingCode:"CQ",fromYear:2014,toYear:2021}],v=[{code:"TN01",name:"TN01",numberStudent:100,year:"2010-2011",specializedCode:"CNTT",specializedTrainingCode:"TH"},{code:"TN02",name:"TN02",numberStudent:150,year:"2010-2011",specializedCode:"CNTT",specializedTrainingCode:"TH"},{code:"TN03",name:"TN02",numberStudent:215,year:"2010-2011",specializedCode:"CNTT",specializedTrainingCode:"TH"}],B=[{studentCode:"SV124",name:"Tr\u1ea7n V\u0103n Nam",birthdate:"10/10/1991",sex:"Nam",className:"TN152"},{studentCode:"SV114",name:"Ph\u1ea1m M\u1ef9 T\xe2m",birthdate:"10/10/1992",sex:"N\u1eef",className:"TN151"},{studentCode:"SV124",name:"Tr\u1ea7n V\u0103n H\xf2a",birthdate:"10/10/1991",sex:"Nam",className:"TN152"}],H=[{code:"SV01",name:"Nguy\u1ec5n V\u0103n B\u1eafc",dob:"07/12/1997",gender:"Nam",className:"TH",pob:"\u0110\xe0 L\u1ea1t"},{code:"SV02",name:"Nguy\u1ec5n M\u1ef9 Chi",dob:"15/05/2000",gender:"N\u1eef",className:"TH",pob:"B\xecnh Ph\u01b0\u1edbc"},{code:"SV03",name:"Tr\u1ea7n V\u0103n Long",dob:"23/09/1999",gender:"male",className:"TH",pob:"An Giang"}],D=[{ordinal:"1",studentCode:"KT15",name:"Nguy\u1ec5n H\u1ed3ng Nhung",birthdate:"21/05/1994",trainScore:"100",note:"Sinh vi\xean xu\u1ea5t s\u1eafc"}],V=[{code:"1",sys:"\u0110\u1ea1i h\u1ecdc t\xedn ch\u1ec9",grad:"Gi\u1ecfi",gradCode:"Gi",fromScores10:8,fromScores4:3.2,fromTrainingScore:80,amountOfMoney:12e5}],L=[{regulation:"25",name:"H\u1ec7 s\u1ed1 k\u1ef3 1",code:"he_so_ky_1",value:"1"},{regulation:"25",name:"H\u1ec7 s\u1ed1 k\u1ef3 2",code:"he_so_ky_2",value:"2"},{regulation:"25",name:"H\u1ec7 s\u1ed1 k\u1ef3 3",code:"he_so_ky_3",value:"3"}],K=[{code:"CD002561",name:"Nguy\u1ec5n th\u1ecb H\xe0",birthdate:"16/10/1996",class:"KT85OQ",min10:100,min4:200,ratings4:3,ratings10:5,toltalRL:5,ratingsRL:8,toltalHB:1e4,ratingsHB:95},{code:"CD002561",name:"Nguy\u1ec5n th\u1ecb H\xe0",birthdate:"16/10/1996",class:"KT85OQ",min10:100,min4:200,ratings4:3,ratings10:5,toltalRL:5,ratingsRL:8,toltalHB:1e4,ratingsHB:95},{code:"CD002561",name:"Nguy\u1ec5n th\u1ecb H\xe0",birthdate:"16/10/1996",class:"KT85OQ",min10:100,min4:200,ratings4:3,ratings10:5,toltalRL:5,ratingsRL:8,toltalHB:1e4,ratingsHB:95}],A=[{number:3,date:"2/2/2015",content:"Th\xf4i h\u1ecdc",code:"1311020555",name:"B\xf9i Ti\u1ebfn D\u0169ng",birthdate:"26/5/1995",oldClass:"D02",newClass:""},{number:4,date:"2/7/2015",content:"H\u1ecdc ti\u1ebfp",code:"1311020555",name:"B\xf9i Ti\u1ebfn Nam",birthdate:"2/5/1995",oldClass:"D02",newClass:"D05"},{number:5,date:"2/7/2015",content:"H\u1ecdc ti\u1ebfp",code:"1311020555",name:"B\xf9i Ti\u1ebfn T\u1edbi",birthdate:"2/5/1992",oldClass:"D02",newClass:"D04"}],O=[{code:"SV234954",name:"Nguy\u1ec5n V\u0103n C\u1ea3nh",birthdate:"26/5/1995"},{code:"SV255954",name:"Nguy\u1ec5n V\u0103n Nam",birthdate:"26/01/1995"},{code:"SV234999",name:"Nguy\u1ec5n V\u0103n Ph\xfac",birthdate:"26/05/1995"}],k=[{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",CD:"L\u1edbp tr\u01b0\u1edfng",CDK:""},{code:"13ddc05",name:"L\xea Th\u1ecb K",birthdate:"26/5/1995",CD:"L\u1edbp ph\xf3",CDK:"T\u1ed5 tr\u01b0\u1edfng"},{code:"13ddc05",name:"L\xea Th\u1ecb B",birthdate:"26/5/1995",CD:"L\u1edbp ph\xf3 h\u1ecdc t\u1eadp",CDK:""},{code:"13ddc05",name:"L\xea Th\u1ecb C",birthdate:"26/5/1995",CD:"L\u1edbp ph\xf3 lao \u0111\u1ed9ng",CDK:"T\u1ed5 ph\xf3"}],x=[{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12A",nameObject:"SVMC sinh vi\xean khuy\u1ebft t\u1eadt"},{code:"13ddc08",name:"L\xea Th\u1ecb N",birthdate:"26/5/1995",class:"12A",nameObject:"SVMC sinh vi\xean m\u1ed3 c\xf4i"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12B",nameObject:"SVMC sinh vi\xean ngh\xe8o"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12A",nameObject:"SVMC sinh vi\xean m\u1ed3 c\xf4i"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12B",nameObject:"SVMC sinh vi\xean m\u1ed3 c\xf4i"}],P=[{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12A",nameObject:"Con li\u1ec7t s\u1ef9 th\u01b0\u01a1ng binh"},{code:"13ddc08",name:"L\xea Th\u1ecb N",birthdate:"26/5/1995",class:"12A",nameObject:"Con li\u1ec7t s\u1ef9 th\u01b0\u01a1ng binh"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12B",nameObject:"Con li\u1ec7t s\u1ef9 th\u01b0\u01a1ng binh"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12A",nameObject:"Con li\u1ec7t s\u1ef9 th\u01b0\u01a1ng binh"},{code:"13ddc05",name:"L\xea Th\u1ecb A",birthdate:"26/5/1995",class:"12B",nameObject:"Con li\u1ec7t s\u1ef9 th\u01b0\u01a1ng binh"}],R=[{code:"DH0312",name:"Nguyen Van Nam",birthdate:"01/01/1991",className:"KT01",regNum:"Q\u011002",decDay:"01/01/1991",rewardLevel:"C\u1ea5p tr\u01b0\u1eddng",form:"Chi\u1ebfn s\u0129 thi \u0111ua",typeOfReward:"Chi\u1ebfn s\u0129 thi \u0111ua"}],E=[{code:"DH0312",name:"Nguyen Van Nam",birthdate:"12/01/1990",className:"KT01",regNum:"Q\u011002",decDay:"12/01/1990",discipLevel:"C\u1ea5p tr\u01b0\u1eddng",violateContent:"\u0110\xe1nh nhau",formHandle:"C\u1ea3nh b\xe1o",contentHandle:"huhuhu"}],X=[{studentCode:"111",name:"Tr\u1ea7n Quang Minh",birthdate:"02/02/1995"},{studentCode:"222",name:"Nguy\u1ec5n V\u0103n Nam",birthdate:"02/03/1995"},{studentCode:"333",name:"Ph\u1ea1m V\u0103n Minh",birthdate:"02/02/1992"}],G=[{className:"LK134",numberStudent:"45",year:"2019",khoahoc:"12",khoa:"CNTT",cn:"CNTT",gvcn:"Nguy\u1ec5n V\u0103n A",phone:"0173289283"},{className:"LK134",numberStudent:"55",year:"2019",khoahoc:"12",khoa:"CNTT",cn:"CNTT",gvcn:"Nguy\u1ec5n V\u0103n B",phone:"0173289283"},{className:"LK134",numberStudent:"50",year:"2019",khoahoc:"12",khoa:"CNTT",cn:"CNTT",gvcn:"Nguy\u1ec5n V\u0103n C",phone:"0173289283"}],M=[{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",specialized:"",courses:"Kh\xf3a h\u1ecdc",khoa:"X\xe2y d\u1ef1ng",sysName:"T\xean",joinDay:""}],j=[{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",cn:"Qu\u1ea3n tr\u1ecb kinh doanh",tenKhoa:"t\xe0i ch\xednh",he:"\u0111\u1ea1i h\u1ecdc ch\xednh quy"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",cn:"Qu\u1ea3n tr\u1ecb kinh doanh",tenKhoa:"t\xe0i ch\xednh",he:"\u0111\u1ea1i h\u1ecdc ch\xednh quy"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",cn:"Qu\u1ea3n tr\u1ecb kinh doanh",tenKhoa:"t\xe0i ch\xednh",he:"\u0111\u1ea1i h\u1ecdc ch\xednh quy"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",cn:"Qu\u1ea3n tr\u1ecb kinh doanh",tenKhoa:"t\xe0i ch\xednh",he:"\u0111\u1ea1i h\u1ecdc ch\xednh quy"}],_=[{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",nametc:"Sinh vi\xean h\u1ed9 ngh\xe8o",sotien:3e5,note:"sinh vi\xean ngh\xe8o v\u01b0\u1ee3t kh\xf3"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"Nam",className:"XD5112",nametc:"Sinh vi\xean h\u1ed9 ngh\xe8o",sotien:3e5,note:"sinh vi\xean ngh\xe8o v\u01b0\u1ee3t kh\xf3"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"N\u1eef",className:"XD5112",nametc:"Sinh vi\xean h\u1ed9 ngh\xe8o",sotien:3e5,note:"sinh vi\xean ngh\xe8o v\u01b0\u1ee3t kh\xf3"},{code:"XD111",name:"Nguy\u1ec5n H\u1ea3i",birthdate:"02/02/1992",sex:"N\u1eef",className:"XD5112",nametc:"Sinh vi\xean h\u1ed9 ngh\xe8o",sotien:3e5,note:"sinh vi\xean ngh\xe8o v\u01b0\u1ee3t kh\xf3"}],w=[{sbd:"SBD001",name:"Nguy\u1ec5n V\u0103n A",birthdate:"21/11/1998",sex:"Nam",dateTS:"12/07/2018",tdtb:"C\u1ea5p 3",hnh:"Cao \u0111\u1eb3ng",msv:"SV001",placeOfBirth:"B\xecnh \u0110\u1ecbnh"},{sbd:"SBD003",name:"Nguy\u1ec5n Th\u1ecb B",birthdate:"21/11/1998",sex:"N\u1eef",dateTS:"12/07/2018",tdtb:"C\u1ea5p 3",hnh:"Cao \u0111\u1eb3ng",msv:"SV002",placeOfBirth:"B\xecnh \u0110\u1ecbnh"},{sbd:"SBD003",name:"Nguy\u1ec5n V\u0103n B",birthdate:"21/11/1998",sex:"Nam",dateTS:"12/07/2018",tdtb:"C\u1ea5p 3",hnh:"Cao \u0111\u1eb3ng",msv:"SV002",placeOfBirth:"B\xecnh \u0110\u1ecbnh"}],Q=[{masv:"513400",name:"Tr\u1ea7n V\u0103n A",birthdate:"21/05/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi"},{masv:"513401",name:"Tr\u1ea7n V\u0103n B",birthdate:"11/08/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi"},{masv:"513430",name:"Tr\u1ea7n V\u0103n C",birthdate:"01/05/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi"}],q=[{sbd:"BD0035",name:"Tr\u1ea7n V\u0103n A",birthdate:"13/06/2001"},{sbd:"BD0165",name:"Tr\u1ea7n V\u0103n B",birthdate:"07/12/2001"},{sbd:"BD1538",name:"Tr\u1ea7n V\u0103n C",birthdate:"19/06/2001"}],Y=[{sbd:"BD0035",name:"Tr\u1ea7n V\u0103n A",birthdate:"13/06/2001",sex:"Nam",total:9.7,nganh:"CNTT",ngaynh:"20/12/2010",nguoitn:"Ph\xf2ng \u0111\xe0o t\u1ea1o",nguoithutien:"Ph\xf2ng t\xe0i ch\xednh",sotiennop:0},{sbd:"BD0165",name:"Tr\u1ea7n V\u0103n B",birthdate:"07/12/2001",sex:"N\u1eef",total:9.7,nganh:"CNTT",ngaynh:"20/12/2010",nguoitn:"Ph\xf2ng \u0111\xe0o t\u1ea1o",nguoithutien:"Ph\xf2ng t\xe0i ch\xednh",sotiennop:0},{sbd:"BD1538",name:"Tr\u1ea7n V\u0103n C",birthdate:"19/06/2001",sex:"Nam",total:9.7,nganh:"CNTT",ngaynh:"20/12/2010",nguoitn:"Ph\xf2ng \u0111\xe0o t\u1ea1o",nguoithutien:"Ph\xf2ng t\xe0i ch\xednh",sotiennop:0}],z=[{isRequire:"Y",name:"H\u1ecdc b\u1ea1",number:1,status:"Thi\u1ebfu"},{isRequire:"N",name:"Ch\u1ee9ng minh nh\xe2n d\xe2n",number:2,status:"Thi\u1ebfu"},{isRequire:"Y",name:"S\u01a1 y\u1ebfu l\xfd l\u1ecbch",number:1,status:"Thi\u1ebfu"},{isRequire:"Y",name:"Gi\u1ea5y khai sinh",number:3,status:"\u0110\u1ee7"},{isRequire:"Y",name:"Gi\u1ea5y b\xe1o nh\u1eadp h\u1ecdc",number:4,status:"\u0110\u1ee7"},{isRequire:"Y",name:"H\xecnh th\u1ebb 3x4",number:4,status:"\u0110\u1ee7"}],I=[{masv:"513430",name:"Tr\u1ea7n V\u0103n C",birthdate:"01/05/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi",comment:""},{masv:"513400",name:"Tr\u1ea7n V\u0103n A",birthdate:"21/05/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi",comment:"Ho\u1ea1t \u0111\u1ed9ng s\xf4i n\u1ed5i"},{masv:"513401",name:"Tr\u1ea7n V\u0103n B",birthdate:"11/08/20001",className:"HKT12",tbcht4:"3.2",tbcht10:"8.1",ht:"Gi\u1ecfi",rl:"83",typeRL:"T\u1ed1t",danhhieu:"Gi\u1ecfi",comment:"Ti\u1ebfn b\u1ed9 trong h\u1ecdc t\u1eadp"}],F=[{code:"13ddc05",name:"L\xea Th\u1ecb A",dateOfBirth:"26/5/1995",className:"12A",placeOfBirth:"V\u0129nh Long"},{code:"13ddc08",name:"L\xea Th\u1ecb N",dateOfBirth:"26/5/1995",className:"12A",placeOfBirth:"Ngh\u1ec7 T\u0129nh"},{code:"13ddc05",name:"L\xea Th\u1ecb A",dateOfBirth:"26/5/1995",className:"12B",placeOfBirth:"An giang"},{code:"13ddc05",name:"L\xea Th\u1ecb A",dateOfBirth:"26/5/1995",className:"12A",placeOfBirth:"Th\u1eeba Thi\xean Hu\u1ebf"},{code:"13ddc05",name:"L\xea Th\u1ecb A",dateOfBirth:"26/5/1995",className:"12B",placeOfBirth:"H\xe0 N\u1ed9i"}],J=[{code:"PA2018",name:"Ph\u01b0\u01a1ng \xe1n tuy\u1ec3n sinh 2018",condition:"X\xe9t \u0111i\u1ec3m theo h\u1ecdc b\u1ea1, theo \u0111i\u1ec3m t\u1ed1t nghi\u1ec7p",number:1200,zones:"KV 1, KV 2",he:"Cao \u0111\u1eb3ng",total:"19",detail:"6"},{code:"PA2019",name:"Ph\u01b0\u01a1ng \xe1n tuy\u1ec3n sinh 2019",condition:"T\u1ed5ng \u0111i\u1ec3m tr\xean 21, \u0111i\u1ec3m chi ti\u1ebft kh\xf4ng c\xf3 m\xf4n n\xe0o d\u01b0\u1edbi 5",number:1e3,zones:"KV 1, KV 2, KV 3",he:"\u0110\u1ea1i h\u1ecdc",total:"19",detail:"6"},{code:"PA2020",name:"Ph\u01b0\u01a1ng \xe1n tuy\u1ec3n sinh 2020",condition:"X\xe9t \u0111i\u1ec3m theo h\u1ecdc b\u1ea1, theo \u0111i\u1ec3m t\u1ed1t nghi\u1ec7p",number:1400,zones:"KV 2, KV 3",he:"Trung c\u1ea5p",total:"19",detail:"6"}]}});
//# sourceMappingURL=88.2cf62a03.chunk.js.map