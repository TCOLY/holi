(function(d){if(!String.prototype.Format){String.prototype.Format=function(){var result=this;if(arguments.length>0){for(var i=0;i<arguments.length;i++){if(arguments[i]==null)arguments[i]='';var reg=new RegExp("(\\{"+i+"\\})","g");result=result.replace(reg,arguments[i]);}}
return result;};}
if(!String.prototype.Compile){String.prototype.Compile=function(obj){return this.replace(/\{([\w ]+)\}/g,function($1,$2){return(obj!=null?obj[$2]:void 0)==undefined?"":obj[$2];});};}
var BIO_ALIAS_2_CSS={'body':'body','bodyCls':'.body','bgImg':'.bg div,.bg','pageBg':'section .content','avatar':'.center .avatar','avatarImg':'.center .avatar img','brand':'.text h3','brandDesc':'.desc','button':'.item:nth-child(n),a.item:nth-child(n),.button-item:nth-child(n) .item','icon':'.item span,.item>img','link':'.item .btn .btn-text, .item .btn-text .link-text',"buttonFont":'.item .btn,.text','background':'background','backgroundColor':'background-color','backgroundImage':'background-image','fontSize':'font-size','color':'color','borderRadius':'border-radius','link-color':'.item .link-text,.item .btn-text .link-text',};var BIO_Theme_2_CSS_Text={'font':'body,.text,section,section .content{font-family:"{0}";}','font-family':'body,.text,section,section .content{font-family:"{0}";}','color':`body{
    --link-text-color:{0};
    --link-text-title-color:{0};
    --link-text-desc-color:{0};
    --link-text-button-color:{0};
}
.container,.container section{color:{0}!important;}
.header h6,.text-ctm h3,.text-ctm .desc,.text-ctm .title,.text-ctm .subtitle,.text-ctm .title-box,.text-ctm .desc-box,.text-ctm,.pro-detail_box .title_box,.pro-detail_box .desc_box{color:{0};}
.text-ctm{color:{0}!important;}`,},BIO_Theme_2_CSS_Background={'color':'.bg div{background-image:initial;background-color:{0};}','gradient':{'gradient.style.flat':'--link-background-gradient-style:to right;','gradient.style.up':'--link-background-gradient-style:to bottom;','gradient.style.down':'--link-background-gradient-style:to top;','gradient.color.default':'','gradient.color.color1':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #EF629F, #EECDA3)}`,'gradient.color.color2':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #F64F59, #C471ED, #12C2E9)}`,'gradient.color.color3':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #FDBB2D, #22C1C3)}`,'gradient.color.color4':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #1D2671, #C33764)}`,'gradient.color.color5':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #2C3E50, #BDC3C7)}`,'gradient.color.color6':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #B91D73, #F953C6)}`,'gradient.color.color7':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #C6FFDD, #FBD786, #F7797D)}`,'gradient.color.color8':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #0083B0, #00B4DB)}`,'gradient.color.color9':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #185A9D, #43CEA2)}`,'gradient.color.color10':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #870000, #190A05 35%)}`,'gradient.color.color11':`.bg div{background-image:linear-gradient(var(--link-background-gradient-style), #EEF2F3, #8E9EAB)}`,},'image':{'style':{'default':'.css-null{{0}}','gallery':`body{background:rgba(0,0,0,0);}
.bg div{
    background-image: linear-gradient(rgba(0, 0, 0, var(--link-background-image-opacity)),rgba(0, 0, 0, var(--link-background-image-opacity))), url({0});
    -webkit-filter: blur(var(--link-background-image-blur));
    -moz-filter: blur(var(--link-background-image-blur));
    -ms-filter: blur(var(--link-background-image-blur));
    filter: blur(var(--link-background-image-blur));
    transform: scale(1.05);
}`,'upload':`body{background:rgba(0,0,0,0);}
.bg div{
    background-image: linear-gradient(rgba(0, 0, 0, var(--link-background-image-opacity)),rgba(0, 0, 0, var(--link-background-image-opacity))), url({0});
    -webkit-filter: blur(var(--link-background-image-blur));
    -moz-filter: blur(var(--link-background-image-blur));
    -ms-filter: blur(var(--link-background-image-blur));
    filter: blur(var(--link-background-image-blur));
}`,},'blur':'--link-background-image-blur:{0}px;','opacity':'--link-background-image-opacity:{0};',},},BIO_Theme_2_CSS_Button={'buttonStyle':{'backgroundColor':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item{background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;border-radius:0!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'backgroundColorRadius':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item{border-radius:var(--link-button-radius12, 12px)!important;background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'backgroundColorRadius50':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item{border-radius:50vh!important;background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'backgroundColorBorder':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item{border-radius:0!important;background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-bg-thumbnail-border-color);color:var(--link-button-bg-thumbnail-color);}`,'backgroundColorBorderRadius':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item{border-radius:var(--link-button-radius12, 12px)!important;background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-bg-thumbnail-border-color);color:var(--link-button-bg-thumbnail-color);}`,'backgroundColorBorderRadius50':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item{border-radius:50vh!important;background-color:var(--link-button-border-bg-color)!important;border:2px solid var(--link-button-border-color)!important;color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:var(--link-button-border-font-color)!important;}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}
.button-item:nth-child(n) .item:hover{background-color:var(--link-button-bg-color)!important;border:2px solid var(--link-button-bg-border-color)!important;color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn .btn-text,.button-item:nth-child(n) .item:hover .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item:hover .btn-icon span{border:2px solid var(--link-button-bg-thumbnail-border-color);color:var(--link-button-bg-thumbnail-color);}`,'style1.border':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0!important;
    border: 2px solid var(--link-button-border-color)!important;
}
.item-style .ctm-style {
    border-bottom: 2px solid var(--link-button-border-color)!important;
}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'style2.background':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0!important;
    border: 2px solid var(--link-button-bg-color)!important;
}
.item-style .ctm-style {
    margin:3px;
    border:0;
    background-color:var(--link-button-bg-color)!important;
}
.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n)  .item .btn-text .link-text{color:var(--link-button-font-color)!important;}
.button-item:nth-child(n) .item-style .ctm-style:hover{background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item-style .ctm-style:hover .btn-text,.button-item:nth-child(n) .item-style .ctm-style:hover .link-text{color:var(--link-button-border-font-color)!important;}
.button-item:nth-child(n) .item-style .ctm-style:hover .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'style3.border':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0!important;
    border:2px solid rgba(0,0,0,0)!important;
}
.item-style::before{
    position:absolute;top:0;left:0;
    content:"";display: block;
    width:40px;height:32px;border:2px solid var(--link-button-border-color);
    border-bottom:0!important;
    border-right:0!important;
}
.item-style::after{
    position:absolute;bottom:0;right:0;
    content:"";display: block;
    width:40px;height:32px;border:2px solid var(--link-button-border-color);
    border-top:0!important;
    border-left:0!important;
}
.item-style .ctm-style {
    margin:5px;
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-border-color)!important;
}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'style4.border':`.cmpt-button-buttonLink .show-sortNum::before{left:-30px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important;background-color:rgba(0,0,0,0)!important;}
.button-item:nth-child(n) .item-style{
    background-color: var(--link-button-border-bg-color)!important;
    border-radius:0!important;
    border: 2px dashed var(--link-button-border-color)!important;
}
.item-style .ctm-style {
    margin:0;
    border:0;
}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'style5.border':`.cmpt-button-buttonLink .show-sortNum::before{left:-34px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.item-style .ctm-style{border:0!important}
.button-item:nth-child(n) .item-style{
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border:2px solid rgba(0,0,0,0)!important;
}
.item-style::before{
    position:absolute;top:6px;left:-8px;
    content:"";display: block;
    width:8px;height:100%;
    background:var(--link-button-bg-color);
}
.item-style::after{
    position:absolute;bottom:-8px;right:8px;
    content:"";display: block;
    width:100%;height:8px;
    background:var(--link-button-bg-color);
}
.item-style .ctm-style {
    margin:0;
    background-color: rgba(0,0,0,0)!important;
    border-radius:0;
    border: 2px solid var(--link-button-bg-border-color)!important;
}
.item-style .ctm-style:before{
    position: absolute;
    top: -2px;
    left: -10px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 6px solid var(--link-button-bg-border-color);
    border-left: 8px solid transparent;
}
.item-style .ctm-style:after{
    position: absolute;
    bottom: -10px;right: -2px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 8px solid var(--link-button-bg-border-color);
    border-right: 8px solid transparent;
}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,'style6.border':`.cmpt-button-buttonLink .show-sortNum::before{left:-34px;}
.item-style::before,.item-style::after,.item-style .ctm-style::before,.item-style .ctm-style::after{display:none;background:transparent;transform:none;border:0;}
.button-item:nth-child(n) .item-style {
    background-color: rgba(0,0,0,0) !important;
    border-radius: 0;
    border:2px solid rgba(0,0,0,0) !important;
}
.item-style::before {
    position: absolute;
    top: 6px;
    left: -8px;
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: var(--link-button-border-color);
}
.item-style::after {
    position: absolute;
    bottom: -7px;
    right: 8px;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: var(--link-button-border-color);
}
.item-style .ctm-style {
    margin: 0;
    background-color: rgba(0, 0, 0, 0) !important;
    border-radius: 0;
    border: 2px solid var(--link-button-border-color) !important;
}
.item-style .ctm-style:before {
    position: absolute;
    top: 1px;
    left: -10px;
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: var(--link-button-border-color);
    transform: rotate(-36deg);
}
.item-style .ctm-style:after {
    position: absolute;
    bottom: -6px;
    right: -2px;
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: var(--link-button-border-color);
    transform: rotate(-45deg);
}
.item .btn-icon span{border:2px solid var(--link-button-border-thumbnail-border-color);color:var(--link-button-border-thumbnail-color);}`,},'iconStyle':{'radius0':'.item .btn-icon img, .item .btn-icon span,.button-item .left .item img,.button-item>.item>img{border-radius:0!important;}','radius':'.item .btn-icon img, .item .btn-icon span,.button-item .left .item img,.button-item>.item>img{border-radius:var(--link-button-radius12, 12px)!important;}','radius12':'.item .btn-icon img, .item .btn-icon span,.button-item .left .item img,.button-item>.item>img{border-radius:var(--link-button-radius12, 12px)!important;}','radius50':'.item .btn-icon img, .item .btn-icon span,.button-item .left .item img,.button-item>.item>img{border-radius:50%!important;}'},'text_color':`.button-item:nth-child(n) .item .btn .btn-text,.button-item:nth-child(n) .item .btn-text .link-text{color:{0}!important}
    body{--link-button-font-color:{0};--link-button-border-font-color:{0};}
    `,'color':`--link-button-bg-color:{0};
--link-button-bg-border-color:{0};
--link-button-border-color:{0};
`,'opacity':'{}',},BIO_Theme_2_CSS_PageBg={'color':'section{background-image:initial;background-color:{0};}','gradient':{'gradient.style.flat':'--link-page-bg-gradient-style:to right;','gradient.style.up':'--link-page-bg-gradient-style:to bottom;','gradient.style.down':'--link-page-bg-gradient-style:to top;','gradient.color.default':`section{}`,'gradient.color.color1':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #EF629F, #EECDA3)}`,'gradient.color.color2':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #F64F59, #C471ED, #12C2E9)}`,'gradient.color.color3':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #FDBB2D, #22C1C3)}`,'gradient.color.color4':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #1D2671, #C33764)}`,'gradient.color.color5':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #2C3E50, #BDC3C7)}`,'gradient.color.color6':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #B91D73, #F953C6)}`,'gradient.color.color7':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #C6FFDD, #FBD786, #F7797D)}`,'gradient.color.color8':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #0083B0, #00B4DB)}`,'gradient.color.color9':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #185A9D, #43CEA2)}`,'gradient.color.color10':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #870000, #190A05 35%)}`,'gradient.color.color11':`section{background-image:linear-gradient(var(--link-page-bg-gradient-style), #EEF2F3, #8E9EAB)}`,},},BIO_Theme_2_CSS_Thumbnail={'style':{'origin':`.item .btn-icon img{display:block;}
    .item .btn-icon span{display:none;}`,'borderColor':`.item .btn-icon img{display:none;}
              .item .btn-icon span{display:block;}`},'radius':{'radius0':'.item .btn-icon img,.item .btn-icon span{border-radius:0!important;}','radius':'.item .btn-icon img,.item .btn-icon span{border-radius:var(--link-button-radius12, 12px)!important;}','radius12':'.item .btn-icon img,.item .btn-icon span{border-radius:var(--link-button-radius12, 12px)!important;}','radius50':'.item .btn-icon img,.item .btn-icon span{border-radius:50%!important;}'},'color':`--link-button-bg-thumbnail-color:{0};
    --link-button-bg-thumbnail-border-color:{0};
    --link-button-border-thumbnail-color:{0};
    --link-button-border-thumbnail-border-color:{0};
`,},Theme_2_CSS_Social={'style':{'default':'','origin':'[class^=cmpt-social] li a img{display:block;}\n[class^=cmpt-social] li a span{display:none;}','borderColor':'[class^=cmpt-social] li a img{display:none;}\n[class^=cmpt-social] li a span{display:block;}'},'radius':{'radius0':'[class^=cmpt-social] li a img,[class^=cmpt-social] li a span{border-radius:0!important;}','radius':'[class^=cmpt-social] li a img,[class^=cmpt-social] li a span{border-radius:var(--link-button-radius12, 12px)!important;}','radius12':'[class^=cmpt-social] li a img,[class^=cmpt-social] li a span{border-radius:var(--link-button-radius12, 12px)!important;}','radius50':'[class^=cmpt-social] li a img,[class^=cmpt-social] li a span{border-radius:50%!important;}'},'color':'--link-social-color:{0};\n--link-social-border-color:{0};',};var _IMAGE_DOMAIN='https://bio.linkcdn.to/';function _int(num){num=parseInt(num,10);if(isNaN(num))return 0;return num;}
function _parse_style(style,m){var _HIDE_RE_COMPILE=/\.hide(-(\w+))+/ig,_HIDE_RE_COMPILE_MATCH=/-(\w+)/ig;style=(typeof style!=='undefined')?style:'';m=(typeof m!=='undefined')?m:'hide';if(m=='hide'&&style.indexOf('.hide-')!=-1){if(_HIDE_RE_COMPILE.test(style))return _HIDE_RE_COMPILE_MATCH.exec(style);}
return[];}
function _hex2rgb(color,opacity,style){opacity=(typeof opacity!=='undefined')?opacity:null;style=(typeof style!=='undefined')?opacity:1;if(color){color=color.replace('#','');opacity=(opacity==null||opacity=='')?1:_int(opacity)/100;if(style){if(_parse_style(style).includes('opacity'))opacity=1;}
if(opacity<=0)return 'rgba(0,0,0,0)';if(color.length==3){return 'rgba({r},{g},{b},{a})'.Compile({r:color[0],g:color[1],b:color[2],a:opacity.toFixed(3)})}
if(color.length==4){return 'rgba({r},{g},{b},{a})'.Compile({r:color[0],g:color[1],b:color[2],a:(parseInt(color[3]+color[3],16)/255).toFixed(3)})}
if(color.length==6){return 'rgba({r},{g},{b},{a})'.Compile({r:parseInt(color.substr(0,2),16),g:parseInt(color.substr(2,2),16),b:parseInt(color.substr(4,2),16),a:opacity.toFixed(3)})}
if(color.length==8){return 'rgba({r},{g},{b},{a})'.Compile({r:parseInt(color.substr(0,2),16),g:parseInt(color.substr(2,2),16),b:parseInt(color.substr(4,2),16),a:(parseInt(color.substr(4,2),16)/255).toFixed(3)})}}
return 'rgba(0,0,0,0)';}
function _format_color(color){if(color){if(typeof color=='number')color=color+'';if(color.startsWith('rgba(')){var _color_val=color.replace('rgba(','');if(_color_val.endsWith(')'))_color_val=_color_val.slice(0,-1);_color_val=_color_val.split(',');if(_color_val.length==3)return 'rgba({0}, {1}, {2}, 1)'.Format(_color_val[0],_color_val[1],_color_val[2]);if(_color_val.length==4)return 'rgba({0}, {1}, {2}, {3})'.Format(_color_val[0],_color_val[1],_color_val[2],_color_val[3]);return color;}
if(color.startsWith('rgb(')){_color_val=color.replace('rgb(','');if(_color_val.endsWith(')'))_color_val=_color_val.slice(0,-1);_color_val=_color_val.split(',');if(_color_val.length==3)return 'rgb({0}, {1}, {2})'.Format(_color_val[0],_color_val[1],_color_val[2]);if(_color_val.length==4)return 'rgba({0}, {1}, {2}, {3})'.Format(_color_val[0],_color_val[1],_color_val[2],_color_val[3]);return color}
if(!color.startsWith('#'))return '#'+color;return color}
return ''}
function _check_image(link,w,h){if(link){if(link.indexOf('.fotoee.com')!=-1)link=link.replace(/(upload\.statics|instabio\.cdn)\.fotoee\.com/,'bio.linkcdn.to');if(link.indexOf('bio.linkcdn.to')!=-1)link=link.split('?')[0];if(!link.startsWith('http'))link=_IMAGE_DOMAIN+link;if(link.indexOf('bio.linkcdn.to')!=-1&&(w||h)){return link+'?imageView2/2'+(w?'/w/'+w:'')+(h?'/h/'+'h':'');}}
return(link||'');}
var ThemeConfig=function(data,image){self.modules=[];image=(typeof image!=='undefined')?image:'';(data||[]).forEach(function(x,idx){if(x.template){if(x.module=='bgImg')self.modules.push(new ThemeConfigBackground(x.template,image));else if(x.module=='pageBg')self.modules.push(new ThemeConfigPageBg(x.template));else if(x.module=='button'&&(x.template||{}).key=='buttonIcon')self.modules.push(new ThemeConfigButton(x.template));else if(x.module=='thumbnail')self.modules.push(new ThemeConfigThumbnail(x.template));else if(x.module=='social')self.modules.push(new ThemeConfigMedia(x.template));else if(x.module=='textFont'||x.module=='buttonFont')self.modules.push(new ThemeConfigText(x.template));else self.modules.push(new ThemeConfigBasic(x.template,x.module));}});this._fields=['text','button','background','page'];};ThemeConfig.prototype={as_css:function(){var _css_list=[],_css_var_list=['body{'];self.modules.forEach(function(x,idx){var x_ret=x.as_css();_css_list=_css_list.concat(x_ret[0]);_css_var_list=_css_var_list.concat(x_ret[1]);});_css_var_list.push('}');return _css_var_list.join('\n')+_css_list.join('\n');},};var ThemeConfigBasic=function(data,m){this.module=m;self.key=data.key;self.value=data.value||{};this._fields=['key','opacity','blur','image'];};ThemeConfigBasic.prototype={as_css:function(){var _css_list=[],_css_var_list=[],_this=this;try{_css_list.push('{0}{'.Format(BIO_ALIAS_2_CSS[self.module]));var _tem_css=[];Object.keys(self.value).forEach(function(k,idx){var v=self.value[k];if(!(v==null||typeof v=='undefined')&&!_this._fields.includes(k)){if(k=='color'&&_this.module=='button'){_tem_css.push('{0}{'.Format(BIO_ALIAS_2_CSS.link));_tem_css.push("{0}:{1};".Format(k,v));_tem_css.push('}');}
if(k=='link-color'&&_this.module=='button'){_tem_css.push('{0}{'.Format(BIO_ALIAS_2_CSS[k]));_tem_css.push("{0}: {1};".Format('color',v));_tem_css.push('}')}
if(k=='border-radius'&&_this.module=='button'){v=v||'';if(v.indexOf('!important')<0)v=v+'!important';}
if(k.indexOf('Font')!=-1||k.indexOf('font-family')!=-1){_css_list.push("{0}: '{1}';".Format(k,v))}else{_css_list.push("{0}: {1};".Format(k,v))}}});_css_list.push('}');_css_list=_css_list.concat(_tem_css);}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigBackground=function(data,image){this._keys=['bgImgColor','bgImgGradient','bgImgCtm','bgImgDefault'];this.image=image||'';this.key=data.key;if(this.key&&this._keys.includes(this.key))this.module=data.value||{};this._fields=['key','module'];};ThemeConfigBackground.prototype={as_css:function(){if(this.key=='bgImgColor'){return this.color_css();}else if(this.key=='bgImgGradient'){return this.gradient_css();}else if(this.key=='bgImgCtm'){return this.image_css();}else if(this.key=='bgImgDefault'){return this.image_css();}
return[[],[]];},color_css:function(){var _background=BIO_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.color)_css_list.push(_background.color.Format(_format_color(_this.module.color)));if(_this.module.style)_css_var_list.push(_background.gradient[_this.module.style]||'');if(_this.module.gradient)_css_list.push(_background.gradient[_this.module.gradient]||'')}catch(e){}
return[_css_list,_css_var_list];},gradient_css:function(){var _background=BIO_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.style)_css_var_list.push(_background.gradient[_this.module.style]||'');if(_this.module.gradient)_css_list.push(_background.gradient[_this.module.gradient]||'')}catch(e){}
return[_css_list,_css_var_list];},image_css:function(){var _background=BIO_Theme_2_CSS_Background,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.image)_css_list.push(_background.image.style[_this.module.style||'default'].Format(_check_image(_this.module.image)));_css_var_list.push(_background.image.blur.Format(_int(_this.module.blur)))
_css_var_list.push(_background.image.opacity.Format(_int(_this.module.opacity)/100))}catch(e){}
return[_css_list,_css_var_list];}};var ThemeConfigPageBg=function(data){this._keys=['pageBgColor','pageBgGradient'];this.key=data.key;if(this.key&&this._keys.includes(this.key))this.module=data.value||{};};ThemeConfigPageBg.prototype={as_css:function(){if(this.key=='pageBgColor'){return this.color_css();}else if(this.key=='pageBgGradient'){return this.gradient_css();}
return[[],[]];},color_css:function(){var _background=BIO_Theme_2_CSS_PageBg,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.color)_css_list.push(_background.color.Format(_format_color(_this.module.color)));if(_this.module.style)_css_var_list.push(_background.gradient[_this.module.style]||'');if(_this.module.gradient)_css_list.push(_background.gradient[_this.module.gradient]||'')}catch(e){}
return[_css_list,_css_var_list];},gradient_css:function(){var _background=BIO_Theme_2_CSS_PageBg,_this=this;var _css_list=[],_css_var_list=[];try{if(_this.module.color)_css_list.push(_background.color.Format(_format_color(_this.module.color)));if(_this.module.style)_css_var_list.push(_background.gradient[_this.module.style]||'');if(_this.module.gradient)_css_list.push(_background.gradient[_this.module.gradient]||'')}catch(e){}
return[_css_list,_css_var_list];}};var ThemeConfigButton=function(data){this.key=data.key;this.value=data.value||{};this._fields=['key','buttonStyle','iconStyle','text_color','color','opacity'];};ThemeConfigButton.prototype={as_css:function(){var _button=BIO_Theme_2_CSS_Button,_this=this;var _css_list=[],_css_var_list=[];try{['buttonStyle','iconStyle'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_list.push(_x_dict[_this.value[x]])}});['color'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_var_list.push(_x_dict.Format(_format_color(_this.value[x])))}});['text_color'].forEach(function(x,idx){if(typeof _this.value[x]!='undefined'&&_this.value[x]!=null){var _x_dict=_button[x];_css_list.push(_x_dict.Format(_format_color(_this.value[x])))}});}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigThumbnail=function(data){this.key=data.key;var _value=data.value||{};this.style=_value.style;this.radius=_value.radius;this.color=_format_color(_value.color);this._fields=['key','style','radius','color'];};ThemeConfigThumbnail.prototype={as_css:function(){var _thumbnail=BIO_Theme_2_CSS_Thumbnail,_this=this;var _css_list=[],_css_var_list=[];try{['style','radius'].forEach(function(x,idx){if(_this[x]&&_thumbnail[x]){var _x_dict=_thumbnail[x];_css_list.push(_x_dict[_this[x]])}});var _x='color';if(_this[_x]&&_thumbnail[_x]){var _x_dict=_thumbnail[_x];_css_var_list.push(_x_dict.Format(_this[_x]));}}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigMedia=function(data){this.key=data.key;var _value=data.value||{};this.style=_value.style;this.radius=_value.radius;this.color=_format_color(_value.color);this._fields=['key','style','radius','color'];};ThemeConfigMedia.prototype={as_css:function(){var _social=Theme_2_CSS_Social,_this=this;var _css_list=[],_css_var_list=[];try{['style','radius'].forEach(function(x,idx){if(_this[x]&&_social[x]){var _x_dict=_social[x];_css_list.push(_x_dict[_this[x]])}});var _x='color';if(_this[_x]&&_social[_x]){var _x_dict=_social[_x];_css_var_list.push(_x_dict.Format(_this[_x]));}}catch(e){}
return[_css_list,_css_var_list];},};var ThemeConfigText=function(data){this.key=data.key;var _val=data.value||{};this.value=data.value||{};this.font=_val.font;Object.defineProperty(this,'font-family',{value:_val['font-family'],writable:true,enumerable:true,configurable:true});this.color=_format_color(_val.color);this._fields=['key','value'];};ThemeConfigText.prototype={as_css:function(){var _text=BIO_Theme_2_CSS_Text,_this=this;var _css_list=[];try{['font','font-family',"color"].forEach(function(x,idx){if(_this.hasOwnProperty(x)&&_this[x]){_css_list.push(_text[x].Format(_this[x]))}});}catch(e){}
return[_css_list,[]]},};var _theme_config=new ThemeConfig(__theme||[]);var _style=d.createElement('style');_style.type='text/css';d.querySelector('head').appendChild(_style);_style.innerHTML=_theme_config.as_css();}(document));