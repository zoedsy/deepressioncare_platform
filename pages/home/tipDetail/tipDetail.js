// pages/home/tipDetail/tipDetail.js
//在使用的View中引入WxParse模块
var WxParse = require('../../../utils/wxParse/wxParse.js');
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_liked:false,
    article:{ 
    // "articleId":123,     //文章id(int)
    // "articletitle":"抑郁中的年轻人：我们如何冲出阴霾",//文章标题
    // "cat_id":1,          //文章分类id(int)
    // "cat_name":"生活",    //分类名称
    // "summary":"xxxxxxxxxx", //文章摘要
    // "content":"<header class=\"Post-Header\" style=\"margin: 0px auto; width: 690px; color: rgb(18, 18, 18); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium;\">\n<h1 class=\"Post-Title\" style=\"margin: 24px 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: 24px; line-height: 1.22; font-family: inherit; word-wrap: break-word;\">\n抑郁症到底是什么病？帮你全面科学了解抑郁症！</h1><div class=\"Post-Author\" style=\"display: flex; -webkit-box-align: center; align-items: center;\">\n<div class=\"AuthorInfo\" itemprop=\"author\" itemscope=\"\" itemtype=\"http://schema.org/Person\" style=\"display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between; max-width: 654px; -webkit-box-flex: 1; flex: 1 1 0%; white-space: nowrap; overflow: hidden;\">\n<div class=\"AuthorInfo\" style=\"display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between; max-width: 654px; -webkit-box-flex: 1; flex: 1 1 0%; overflow: hidden;\">\n<span class=\"UserLink AuthorInfo-avatarWrapper\">\n<div class=\"Popover\" style=\"position: relative; display: inline-block;\">\n<div id=\"Popover5-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-owns=\"Popover5-content\">\n<a target=\"_blank\" class=\"UserLink-link\" data-za-detail-view-element_name=\"User\" href=\"https://www.zhihu.com/people/en-en-yi-sheng\" style=\"text-decoration-line: none;\">\n<img class=\"Avatar Avatar--round AuthorInfo-avatar\" width=\"38\" height=\"38\" src=\"https://pic2.zhimg.com/v2-ce6049409a1227f76293a8a8798c1d12_xs.jpg?source=172ae18b\" srcset=\"https://pic2.zhimg.com/v2-ce6049409a1227f76293a8a8798c1d12_l.jpg?source=172ae18b 2x\" alt=\"恩恩心理医生\" style=\"background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; border-radius: 50%; vertical-align: top;\">\n</a></div></div></span><div class=\"AuthorInfo-content\" style=\"-webkit-box-flex: 1; flex: 1 1 0%; margin-left: 14px; overflow: hidden;\">\n<div class=\"AuthorInfo-head\" style=\"display: flex; -webkit-box-align: center; align-items: center; font-size: 15px; line-height: 1.1; flex-shrink: 0;\">\n<span class=\"UserLink AuthorInfo-name\" style=\"font-weight: 600; color: rgb(68, 68, 68);\">\n<div class=\"Popover\" style=\"position: relative; display: inline-block;\">\n<div id=\"Popover6-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-owns=\"Popover6-content\">\n<a target=\"_blank\" class=\"UserLink-link\" data-za-detail-view-element_name=\"User\" href=\"https://www.zhihu.com/people/en-en-yi-sheng\" style=\"text-decoration-line: none;\">\n恩恩心理医生</a></div></div></span></div><div class=\"AuthorInfo-detail\" style=\"overflow: hidden; color: rgb(100, 100, 100);\">\n<div class=\"AuthorInfo-badge\" style=\"display: flex; -webkit-box-align: center; align-items: center; margin-top: 2px; font-size: 14px;\">\n<div class=\"ztext AuthorInfo-badgeText\" style=\"word-break: break-word; line-height: 1.6; overflow: hidden; text-overflow: ellipsis;\">\n专业的精神心理健康服务平台</div></div></div></div></div></div></div></header><div class=\"Post-RichTextContainer\" style=\"position: relative; overflow: visible; width: 690px; margin: 0px auto; color: rgb(18, 18, 18); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium;\">\n<div class=\"css-1yuhvjn\" style=\"margin-top: 16px;\">\n<div class=\"RichText ztext Post-RichText css-hnrfcf\" options=\"[object Object]\" style=\"word-break: break-word; line-height: 1.6;\">\n<p data-pid=\"B9LfG6VM\" style=\"margin-top: 0px; margin-bottom: 1.4em;\">\n抑郁症是严重的心理疾病，以持续情绪低落以及认知功能障碍为主要临床特征，包括焦躁情绪、快感消失、睡眠障碍、自我评价过低、负罪感和反复的自杀念头等表现。抑郁症严重困扰患者的生活和工作，给患者家庭及社会带来沉重的负担，据不完全统计，约15%的抑郁症患者死于自杀。那么，抑郁症到底是什么病？能彻底治好吗？下面，恩恩医生就给大家详细介绍一下。\n</p>\n<p data-pid=\"VFDZ3lTk\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n一、抑郁症的发病原因\n</p>\n<p data-pid=\"s-TRdf9N\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n抑郁症病因较为复杂，据推断主要与遗传因素、个性因素、躯体因素有关系。\n</p>\n<p data-pid=\"8O0kdiVt\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nA、遗传因素\n</p>\n<p data-pid=\"7mCLh9E-\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n据大量临床资料统计，抑郁症的发病与遗传有很大关系。患抑郁症的母亲所生的子女患抑郁症的可能性较大，这是因为，如果父母患有抑郁症，将会直接影响到孩子的情绪和个性发展。其中一级亲属患病的概率要远远的高于其他亲属，因此，抑郁症也有可能会是遗传所致。\n</p>\n<p data-pid=\"Gl-6pQwv\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nB.人格因素\n</p>\n<p data-pid=\"lq0OwERM\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n人格因素是诱发抑郁症的主要病因之一。在生活当中，每个人都有自己的个性和处事方式，但是有些人的性格就很容易导致心理疾病的发生。比如，有的人就是生性较为敏感、多疑、自卑、消极悲观、脾气急躁等性格特征，这样的性格特征一旦遇到压力过大或是人际关系处理不好等情况就可能会导致抑郁症的发作。\n</p>\n<p data-pid=\"KIG9UnE-\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nC心理社会因素\n</p>\n<p data-pid=\"ifbC3yYh\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n恩恩医生介绍，心理社会因素也是抑郁症发生的重要诱因。比如亲人死亡、家庭破裂、失恋、严重的躯体疾病、学习和工作中的困难和挫折等应激事件容易使人自尊心受到打击而诱发此病症。而且主观判断这些负性社会应激事件的危容程度越大，个体可利用的应对方式越缺乏，则抑郁情绪越严重。\n</p>\n<p data-pid=\"98jo8A_b\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n二、抑郁症的症状表现\n</p>\n<p data-pid=\"q62shwBN\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n抑郁症的症状主要有情绪症状、认知症状、动机症状、躯体症状、睡眠障碍等症状表现。\n</p>\n<p data-pid=\"mxtOnneZ\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nA.情绪症状 主要是持续情绪低落、悲观绝望、对任何事都提不起兴趣，感觉生活没有任何意义。\n</p>\n<p data-pid=\"Ffs31G8w\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nB.认知症状 主要是自我评价过低，感觉自己没有价值，一无是处，活着就是累赘。而且感觉对不起自己的朋友和家人，常常有强烈的自责感。\n</p>\n<p data-pid=\"TOf5wZay\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nC.动机症状 主要是对任何事都提不起情趣，言语行动迟钝缓慢，严重时不吃东西、不说话也不动。\n</p>\n<p data-pid=\"r2Q1lCSy\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nD.躯体症状 躯体症状是抑郁症隐藏很深的症状表现。懒于劳动、不爱工作，随着抑郁症状的发展，一切生物的、心理的快感都遗失殆尽。抑郁症病人的胃口常常不佳，食欲减退、口干、便秘，可伴体重减轻。即使是平时爱吃的人，美酒佳肴也勾不起他的食欲。\n</p>\n<p data-pid=\"8II85xWn\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nE.睡眠障碍 睡眠不好使抑郁症的表现之一，抑郁症患者常伴有睡眠障碍，情绪低落，这时自杀的风险最大。\n</p>\n<p data-pid=\"I1rr2MZc\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n三、抑郁症的治疗\n</p>\n<p data-pid=\"PG49c-9C\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n抑郁症的治疗可根据程度不同，分类治疗，个性治疗。\n</p>\n<p data-pid=\"fA8BK89x\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nA.轻度抑郁症\n</p>\n<p data-pid=\"PahYIVUt\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n主要以心理治疗为主，也就是要做好心理疏导，通过专业心理医生倾听、理解、安慰、鼓励等方式，使患者产生安全感，帮助患者扩大生活圈子，避免抑郁程度进一步发展，逐步走出抑郁症困扰。\n</p>\n<p data-pid=\"HkdAZoj5\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\nB.中、重度抑郁症要坚持药物治加心理治疗\n</p>\n<p data-pid=\"JKzys3VX\" style=\"margin-top: 1.4em; margin-bottom: 1.4em;\">\n中、重度抑郁症患者要在医生指导下坚持服用抗抑郁类药品，根据疾病的时间、进展调整药品的剂量，一般情况下，患病的年限越长通常服药时间越久，还有对于一些肝肾功能不好的患者也可以采用中药方法治疗。另外，要积极配合心理医生做好心理疏导，逐步恢复健康的身心。最后，抑郁症也可以采用物理治疗，通过物理治疗方式刺激甲肾上腺素的分泌，增强细胞的活动兴奋性，缓解抑郁情绪。\n</p>\n<p data-pid=\"XjHEJ529\" style=\"margin-top: 1.4em; margin-bottom: 0px;\">\n如何治疗抑郁症？大家可以免费在各大应用市场下载恩恩医生app，平台汇聚了上千位专业心理卫生、精神健康医生，可免费为大家提供一对一心理咨询、疾病治疗等服务，并全程保证患者隐私，你可以不用去医院就能咨询治疗抑郁症，而且全是专业医生！\n</p>\n</div></div></div>",   //文章内容
    // "is_recommend":1,    //是否推荐，1推荐，0不推荐(int)
    // "author":"猫咪咪",    //文章作者
    // "add_time":"2021-11-05", //文章添加时间
    // "look_count":100,     //文章浏览量(int)
    // "video_url":"",        //文章视频地址
    // "articles":[],      //关联文章
    // "comments":100,     //评论量(int)  
    // "likes":10          //点赞量(int)},
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index = options.index;
    console.log(index)
    //请求文章数据
    api.getRequestData('knowledge/detail',{knowledgeId:index},'GET',false).then((res)=>{
      console.log(res)
      this.setData({ 
        article:res.data.data
      })
      console.log(this.data.article)
      //富文本解析
    /*
    WxParse.wxParse(bindName , type, data, target,imagePadding)
    1.bindName绑定的数据名(必填)
    2.type可以为html或者md(必填)
    3.data为传入的具体数据(必填)
    4.target为Page对象,一般为this(必填)
    5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
      WxParse.wxParse('content', 'html', this.data.article.knoCardContent, this, 5);
    })
   
  },

  changeCollect:function(){
    console.log(this.data.is_liked)
      // 添加用户点赞文章
      if(!this.data.is_liked){
        // wx.request({               
        //   url:'http://127.0.0.1/post/info/like_article',
        //   data:{
        //     //article_id:index
        //   },
        //   method:POST,
        //   success: (res) => {
        //     this.setData({ 
        //       is_liked:true
        //     })
        //   }
        // })  
        this.setData({ 
          is_liked:true
        })
      }
      // 删除点赞
      else{  
        // wx.request({               
        //   //url:'http://127.0.0.1/post/info/like_article',
        //   data:{
        //     //article_id:index
        //   },
        //   method:POST,
        //   success: (res) => {
        //     this.setData({ 
        //       is_liked:false
        //     })
        //   }
        // })  
        this.setData({ 
          is_liked:false
        })
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})