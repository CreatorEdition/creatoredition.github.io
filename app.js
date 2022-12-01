const locations = {
  "广东省" : {
    title: "粤康码",
    link: "ykm",
    help_text: '<p>由"广东省政务服务数据管理局"提供，使用场景：</p> <ul> <li><i>查询及申报</i><p>个人健康信息查询、健康申报等</p></li><li><i>温馨提示</i><p>省内以及跨省通行，公共场所出入等具体适用场景以当地政府部门规定为准</p> </li> </ul>'

  },
  "江苏省" : {
    title: "苏康码",
    link: "skm",
    help_text: '<p>由"江苏省疾控中心"提供，可在以下场所可用：</p> <ul> <li><i>交通出行</i><p>机场、火车站、公交、地铁、出租车等</p></li> <li><i>公共场所</i><p>社区、商场、写字楼、公园等</p> </li> </ul>'
  },
  "北京市" : {
    title: "北京健康宝",
    link: "jkb",
    help_text: '<p>由"北京大数据中心"提供，含以下功能：</p> <ul> <li><i>健康状态查询</i> <p>查询自身健康状态，作为复工复产、日常出行防疫相关健康状态参考</p> </li> </ul>'
  },
  "四川省" : {
    title: "随申码",
    link: "tfjkt",
    help_text: '<p>由"四川省大数据中心"提供，可在以下场所可用：</p> <ul> <li><i>生活生产</i><p>小区、企业、工地</p></li> <li><i>交通出行</i><p>机场、火车站、客运站、出租车、网约车等</p></li> <li><i>公共场所</i><p>商场，超时，公园，酒店，饭店、医院、学校等公共场所等</p> </li> </ul>'
  },
  "上海市" : {
    title: "随申码",
    link: "shanghai-hc",
    help_text: '<p>由"随申办"提供，展码快速通行：</p> <ul> <li><i>场所通行</i><p>请按照工作人员指示，展示"随申码"或打开支付宝"扫一扫"场所码，快速通行</p></li> <li><i>亲属随申码</i><p>用户绑定亲属信息并申领"亲属随申码"，即可展示"亲属随申码"、查询绑定亲属核酸检测结果。</p></li> </ul>'
  },
  "山东省" : {
    title: "山东电子健康通行",
    link: "shandong-hc",
    help_text: '<p>由"山东省卫生健康委员会"提供，含以下功能：</p> <ul> <li><i>通行卡申请</i><p>山东省内以及省外来鲁人员在线申请山东电子健康通行卡</p></li> <li><i>健康申报</i><p>填写健康信息，每日健康打卡</p> </li> </ul>'
  },
  "湖北省" : {
    title: "湖北健康码",
    link: "hubei-hc",
    help_text: '<p>由"湖北省新冠肺炎防疫指挥部"提供，以下场所可用：</p> <ul> <li><i>公共场所</i><p>小区、商场、写字楼、医院等</p> <li><i>交通出行</i><p>机场、火车站、公交地铁、高速路口等</p></li> <li><i>健康登记</i><p>省内及跨省流动人员登记，具体政策以当地政府规定为准</p></li> </li> </ul>'
  },
  "武汉市" : "hunan-hc",
  "福建省" :  {
    title: "福建健康码",
    link: "fujian-hc",
    help_text: '<p>由"福建省数字办、卫健委、医保局"主办</p> <ul> <li><i>温馨提示</i><p>福建健康码主力疫情精准防控，让市民出行更安心，姨妈通八闽</p> </li> </ul>'
  },
  "浙江省" : {
    title: "浙江健康码",
    link: "zhejiang-hc",
    help_text: '<p>由"浙江省人民政府"主办，以下场所可用：</p> <ul> <li><i>交通出行</i><p>机场、火车站、公交地铁乘车等</p></li> <li><i>公共场所</i><p>医院、社区、商超等</p> </li> </ul>'
  },
  "河南省" : {
    title: "河南健康码",
    link: "henan-hc",
    help_text: '<p>由"豫事办"提供，可在以下场所可用：</p> <ul> <li><i>交通出行</i><p>车站、汽车站、机场等</p></li> <li><i>公共场所</i><p>社区、商场、写字楼等</p></li> <li><i>温馨提示</i><p>省内以及跨省通行，公共场合出入等具体适用场景以当地政府部门规定为准</p></li> </ul>'
  },
  "天津市" : {
    title: "津心办天津健康码",
    link: "tianjin-hc",
    help_text: '<p>根据"天津市疫情防控工作指挥部"通告，在以下场所可用：</p> <ul> <li><i>交通出行</i><p>机场、火车站、公交地铁乘车等</p></li> <li><i>公共场所</i><p>小区，大型超市，商场，市场等</p> </li> </ul>'
  },
  "陕西省" : {
    title: "陕西一码通",
    link: "shaanxi-hc",
    help_text: '<p>由"陕西省政务服务大数据"提供，使用场景：</p> <ul> <li><i>查询及申报</i><p>个人健康信息、行程信息、疫苗接种信息、核酸结果信息查询；健康情况、行程情况申报</p></li> <li><i>代查及代领</i><p>代他人领、查，亲友代领等相关功能</p></li> <li><i>其他功能</i><p>场所码申领、场所码扫码、风险地区查询等。</p></li> <li><i>温馨提示</i><p>省内以及跨省通行，公共场所出入等具体适用场景以当地政府部门规定为准</p></li> </ul>'
  },
  "重庆市" : {
    title: "渝康码",
    link: "chongqing-hc",
    help_text: '<p>由"重庆市大数据应用发展管理局"提供</p> <ul> <li><i>查询及申报</i><p>个人健康信息、行程信息、疫苗接种信息、核酸结果信息查询；健康情况申报。</p></li> <li><i>代查及代领</i><p>代他人领、查，亲友代领等相关功能。</p></li> <li><i>其他功能</i><p>场所码申领、场所码扫码、风险地区查询等。</p> </li> </ul>'
  },
  "河北省" : {
    title: "河北健康码",
    link: "hebei-hc",
    help_text: '<p>由"河北省政府服务管理办公室"提供，使用场景：</p> <ul> <li><i>查询及申报</i><p>个人健康信息查询、健康申报等</p></li><li><i>温馨提示</i><p>省内以及跨省通行，公共场所出入等具体适用场景以当地政府部门规定为准</p> </li> </ul>'
  },
  "云南省" : {
    title: "云南健康码",
    link: "yunnan-hc",
    help_text: '<p>由"云南省卫生健康委员会"提供，可在以下场景使用</p> <ul> <li><i>健康申报出行必备绿码</i><p>入滇人员出行前或到达时凭绿码通行</p></li><li><i>交通出行</i><p>铁路、公路、港口，所有入滇通道</p> </li> </ul>'
  },
  "undefined" : {
    title: "不支持的地区",
    link: "-",
    help_text: '<p>由"国家政务服务平台"提供，使用场景：</p> <ul> <li><i>查询及申报</i><p>个人健康信息查询、健康申报等</p></li><li><i>温馨提示</i><p>省内以及跨省通行，公共场所出入等具体适用场景以当地政府部门规定为准</p> </li> </ul>'
  },
}

const apps = {
  "trip-card": {
    title: "通信大数据行程卡",
    icon: "trip-card/static/img_arrow@2x.png",
    link: "trip-card/index.html",
    color: "#2ba667",
    help_text: "<p>点击手机号或途经地点可以修改相关信息。</p>",
    menu: [],
  },
  "ykm": {
    title: "粤康码",
    icon: "ykm/static/yss.jpeg",
    link: "ykm/index.html",
    color: "#aacc00",
    help_text:
      "<p>点击姓名、城市、场所地址等可以修改对应<p>点击二维码可以切换 “粤康码” 及 “粤康码场所通行” 页面。</p>",
    menu: [
      { title: "场所", icon: "place", link: "ykm/checkin.html" },
      { title: "核酸", icon: "vaccines", link: "ykm/detail.html" },
      { title: "广州", icon: "map", link: "gwongzau-hc/checkin.html" },
    ],
  },
  "skm": {
    title: "苏康码",
    icon: "skm/src/jszwfw.png",
    link: "skm/index.html",
    color: "#a3a8eb99",
    help_text:
      "<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击二维码可以展示签到页面。</p>",
    menu: [
      { title: "场所", icon: "place", link: "skm/index.html#checkin" },
      { title: "核酸", icon: "vaccines", link: "skm/detail.html" },
    ],
  },
  "jkb": {
    title: "北京健康宝",
    icon: "jkb/static/logo_jiankangbao1@2x.png",
    link: "jkb/index.html",
    color: "#fa6666",
    help_text:
      "<p>点击姓名、证件号可以修改对应信息；</p><p>点击照片可以更改或移除照片，超过 4MB 的图片可能无法在本地保存；</p><p>点击右上角二维码标志可以在 “本人健康码自查询” 和 “本人信息扫码登记” 间切换；</p><p>点击 “未见异常” 可以切换 “通勤” 标志。</p>",
    menu: [
      { title: "扫描", icon: "qr_code_scanner", link: "jkb/scan.html" },
      { title: "场所", icon: "place", link: "jkb/checkin.html" },
    ],
  },
  "tfjkt": {
    title: "四川天府健康通",
    icon: "tfjkt/static/message-icon.png",
    link: "tfjkt/index.html",
    color: "#0ba099",
    help_text:
      "<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击“扫场所码”展示场所码。</p>",
    menu: [{ title: "场所", icon: "place", link: "tfjkt/checkin.html" }],
  },
  "ssm": {
    title: "随申码",
    icon: "shanghai-hc/static/ssbapp-logo.png",
    link: "shanghai-hc/index.html",
    color: "#bf4046",
    help_text:
      "<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击照片可以更改或移除照片，超过 4MB 的图片可能无法在本地保存；</p><p>点击二维码展示场所码。</p>",
    menu: [
      { title: "扫描", icon: "qr_code_scanner", link: "shanghai-hc/scan.html" },
      { title: "场所", icon: "place", link: "shanghai-hc/checkin.html" },
    ],
  },
  "shandong-hc": {
    title: "山东健康通行码",
    icon: "shandong-hc/static/logo.png",
    link: "shandong-hc/index.html",
    color: "#68b82e",
    help_text:
      "<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击二维码可以切换到场所码页面。</p>",
    menu: [
      {
        title: "场所",
        icon: "place",
        link: "shandong-hc/index.html#checkin",
      },
      { title: "威海", icon: "map", link: "weihai-hc/index.html" },
    ],
    contributors: [
      {
        name: "LibertyNeverDies",
        description: "参与制作",
        style: "namestrip",
      },
    ],
  },
  "hubei-hc": {
    title: "湖北健康码",
    icon: "hubei-hc/static/logo.png",
    link: "hubei-hc/index.html",
    color: "#9a1640",
    help_text:
      "<p>点击姓名、证件号码可以修改对应信息。</p>",
  },
  "wuhan-hc": {
    title: "湖北健康码·武汉",
    icon: "wuhan-hc/static/QRlogo.png",
    link: "wuhan-hc/index.html",
    color: "#af9bff",
    help_text:
      "<p>点击姓名、证件号等可以修改对应信息；</p><p>点击通信行程卡“点击核验”可以添加行程戳；</p><p>点击“已采样”标记可以隐藏该标记。</p>",
  },
  "hunan-hc": {
    title: "湖南电子健康卡",
    icon: "hunan-hc/static/logo-b18dcf7bf55c412ec04989061d0512ad.png",
    link: "hunan-hc/index.html",
    help_text: "<p>点击姓名、证件号、采样点、场所地址等可以修改对应信息。</p><p>点击“二维码”可以切换“健康卡”与“场所码”</p>",
    menu: [{ title: "场所", icon: "place", link: "hunan-hc/checkin.html"}],
    contributors: [
      { name: "uodedcli", description: "参与制作", style: "namestrip" },
    ],
  },
  "fujian-hc": {
    title: "福建健康码",
    icon: "fujian-hc/static/jkm_logo.png",
    link: "fujian-hc/index.html",
    color: "#3a5eff",
    help_text:
      "<p>点击姓名、证件号可以修改对应信息；</p><p>点击 “扫一扫” 进入场所张贴码。</p>",
    menu: [{ title: "场所", icon: "place", link: "fujian-hc/checkin.html" }],
  },
  "zhejiang-hc": {
    title: "浙江健康码",
    icon: "zhejiang-hc/static/logo.ico",
    link: "zhejiang-hc/index.html",
    color: "#57ac6c",
    help_text: "<p>点击城市名、姓名、证件号可以修改对应信息。</p>",
  },
  "henan-hc": {
    title: "豫康码",
    icon: "henan-hc/static/logo.png",
    link: "henan-hc/index.html",
    color: "#e84336",
    help_text:
      "<p>点击城市名、姓名、证件号可以修改对应信息；</p><p>点击二维码可以切换至“疫情防控场所码”。</p>",
    menu: [{ title: "场所", icon: "place", link: "henan-hc/checkin.html" }],
  },
  "tianjin-hc": {
    title: "天津数字防疫",
    icon: "tianjin-hc/static/img/logo.png",
    link: "tianjin-hc/index.html",
    help_text:
      "<p>前往“我的”一栏后点击任意位置，在配置页填写好姓名和身份证号、保存并返回后才可使用。</p>",
    menu: [
      { title: "场所", icon: "place", link: "shaanxi-hc/checkin.html" },
      { title: "核酸", icon: "vaccines", link: "shaanxi-hc/nucResult.html" },
    ],
  },
  "shaanxi-hc": {
    title: "陕西一码通",
    icon: "shaanxi-hc/static/myCode/greenLogo.png",
    link: "shaanxi-hc/index.html",
    color: "#0bae81",
    help_text:
      "<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击核酸检测时间可以切换小时数；</p><p>点击“已采样”可以切换今日是否采样。</p>",
    menu: [
      { title: "场所", icon: "place", link: "shaanxi-hc/checkin.html" },
      { title: "核酸", icon: "vaccines", link: "shaanxi-hc/nucResult.html" },
    ],
  },
  "chongqing-hc": {
    title: "渝康码",
    icon: "chongqing-hc/static/logo.png",
    link: "chongqing-hc/index.html",
    color: "#f5aa06",
    help_text: "<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击二维码可以切换至重庆市“场所码”。</p>",
    menu: [
      { title: "场所", icon: "place", link: "chongqing-hc/checkin.html" },
      { title: "核酸", icon: "vaccines", link: "chongqing-hc/detail.html" },
    ]
  },
  "hebei-hc": {
    title: "河北健康码",
    icon: "hebei-hc/static/logo.png",
    link: "hebei-hc/index.html",
    color: "#926266",
    help_text: "<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击“扫码未见异常”可以隐藏该标识。</p>",
  },
  "yunnan-hc": {
    title: "云南健康码",
    icon: "yunnan-hc/static/icon.png",
    link: "yunnan-hc/index.html",
    color: "#459A8D",
    help_text:
        "<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击“扫场所码”展示场所码。</p>",
    menu: [{ title: "场所", icon: "place", link: "yunnan-hc/checkin.html" }],
  },
};

function onIconFail(t) {
  t.closest(".app").classList.add("inactivated");
}

function render() {
  let html = "";
  for (const [name, app] of Object.entries(apps)) {
    let menu_html = "";
    if (app.menu) {
      for (const menu_item of app.menu) {
        menu_html += `
          <div class="app-menu-item" data-role="link" data-link="${menu_item.link || ""}">
            <img class="app-menu-app-icon" src="common/icons/${menu_item.icon || "qr_code"}.svg"></img>
            <span class="app-menu-app-title">${menu_item.title}</span>
          </div>
        `;
      }
    }
    menu_html += `
    <div class="app-menu-item ${
      localStorage.getItem("pinned") 
      && localStorage.getItem("pinned").split(",").indexOf(name) >= 0 
      && "active" || ""
    }" data-role="pin">
      <img class="app-menu-app-icon" src="common/icons/push_pin.svg"></img>
    </div>`;
    if (app.help_text) {
      menu_html += `
        <div class="app-menu-item" data-role="help">
          <img class="app-menu-app-icon" src="common/icons/info.svg"></img>
        </div>
      `;
    }
    let credits_html = "";
    if (app.contributors) {
      for (const contributor of app.contributors) {
        if (contributor.style == "namestrip") {
          credits_html += `
            <div class="app-contributor app-contributor-namestrip">
              <span class="contributor-nametag">${contributor.name}</span>
              <span class="contributor-description">${contributor.description}</span>
            </div>
          `;
        } else if (contributor.style == "text") {
          credits_html += `
            <div class="app-contributor">
              <span class="contributor-nametag">${contributor.name}</span>
              <span class="contributor-description">${contributor.description}</span>
            </div>
          `;
        }
      }
    }
    html += `
    <div class="app" data-link="${app.link || ""}" data-role="app" data-app-name="${name}">
      <div class="app-content">
        <img src="${app.icon}" onerror="onIconFail(this);" style="border-color: ${app.color || "#aaa"};">
        <div class="app-description">
          <div class="app-title-wrapper">
            <span class="app-title">${app.title}</span>
            <img class="app-title-icon" src="common/icons/arrow_forward.svg"></img>
          </div>
          <div class="app-menu">
            ${menu_html}
          </div>
        </div>
      </div>
      <div class="app-help">
        <div class="app-help-subtitle">使用说明</div>
        ${app.help_text}
        ${credits_html ? `
          <div class="app-help-subtitle">致谢</div> 
          <div class="app-contributors-container">
            ${credits_html} 
          </div>
        ` : ""}
      </div>
    </div>`;
  }
  document.querySelector(".apps-list").innerHTML = html;
  
  const elements = [
    ...document.querySelectorAll(".app:not(.inactivated)"),
    ...document.getElementsByClassName("app-menu-item")
  ];
  if (elements.length) {
    for (const element of elements) {
      const data_link = element.attributes["data-link"] && element.attributes["data-link"].value;
      const data_role = element.attributes["data-role"] && element.attributes["data-role"].value;
      const parent_app = element.closest(".app");
      if (data_link) {
        element.addEventListener("click", (e) => {
          e.stopPropagation();
          if (element.classList.contains("inactivated")) return;
          // try {
          //   navigator.serviceWorker.controller.postMessage({
          //     type: "download",
          //     content: parent_app.attributes["data-link"].value
          //   });
          // } catch (e) {}
          window.location.href = data_link;
        });
      } else if (data_role == "help") {
        element.addEventListener("click", (e) => {
          e.stopPropagation();
          if (!element.classList.contains("active")) {
            document.querySelectorAll(".app-help").forEach(element => {
              element.classList.remove("active");
            });
            element.classList.add("active");
            parent_app.querySelector(".app-help").style.display = "block";
          } else {
            element.classList.remove("active");
            parent_app.querySelector(".app-help").style.display = "none";
          }
        });
      } else if (data_role == "pin") {
        const item_id = parent_app.attributes["data-app-name"] && parent_app.attributes["data-app-name"].value;
        if (item_id) {
          element.addEventListener("click", (e) => {
            e.stopPropagation();
            let list = localStorage.getItem("pinned") ? localStorage.getItem("pinned").split(",") : [];
            if (!element.classList.contains("active")) {
              element.classList.add("active");
              parent_app.style.order = -1;
              list.push(item_id);
              localStorage.setItem("pinned", list.join(","));
              try {
                const app_name = parent_app.attributes["data-app-name"].value;
                navigator.serviceWorker.controller.postMessage({
                  type: "download",
                  content: app_name
                });
              } catch (e) {}
            } else {
              element.classList.remove("active");
              parent_app.style.order = 0;
              list = list.filter(x => x != item_id);
              if (list.length) localStorage.setItem("pinned", list.join(","));
              else localStorage.removeItem("pinned");
            }
          });
        }
      }
    }
  }
  
  const pinned_list = localStorage.getItem("pinned") ? localStorage.getItem("pinned").split(",") : [];
  if (pinned_list) {
    for (const element of document.querySelectorAll(".app:not(.inactivated)") || []) {
      if (pinned_list.includes(element.attributes["data-app-name"].value)) {
        element.style.order = -1;
      }
      element.addEventListener("touchstart", (e) => {
        if (!(e.target.classList && e.target.classList[0].startsWith("app-menu-item")))
          element.classList.add("selected");
      });
      element.addEventListener("touchmove", () => {
        element.classList.remove("selected");
      });
      element.addEventListener("touchend", () => {
        element.classList.remove("selected");
      });
      element.addEventListener("touchcancel", () => {
        element.classList.remove("selected");
      });
    }
  }
  for (const element of document.querySelectorAll(".app-menu-item[data-role=link]") || []) {
    element.addEventListener("touchstart", () => {
      element.classList.add("active");
    });
    element.addEventListener("touchmove", () => {
      element.classList.remove("active");
    });
    element.addEventListener("touchend", () => {
      element.classList.remove("active");
    });
    element.addEventListener("touchcancel", () => {
      element.classList.remove("active");
    });
  }
  
  for (const element of document.querySelectorAll(".app-help") || []) {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  window.updateServiceWorker = () => {};

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {
      scope: "./"
    }).then((e) => {
      window.updateServiceWorker = (t) => {
        t && (t.innerText = "正在检查更新...");
        e.addEventListener('updatefound', () => {
          window.location.reload();
        });
        e.update().then((reg) => {
          if (!reg.installing) t && (t.innerText = "未发现更新");
          else t && (t.innerText = "正在应用更新...");
        }).catch(() => {
          t && (t.innerText = "检查更新失败");
        });
      };
      let c = window.setInterval(() => {
        if (navigator.serviceWorker.controller) {
          window.clearInterval(c);
          // document.querySelector(".sw-progress").style.display = "block";
          // document.querySelector(".sw-progress-bar").style.display = "block";
          navigator.serviceWorker.controller.postMessage({
            type: "download",
            content: 
              ["root", "common", "trip-card"]
                .concat(localStorage.getItem("pinned") ? localStorage.getItem("pinned").split(",") : [])
                .filter((v,i,a)=>a.indexOf(v)==i)
          });
          window.setInterval(() => {
            navigator.serviceWorker.controller.postMessage({
              type: "check",
            });
          }, 4000);
        }
      }, 300);
    }).catch((e) => {
      // document.querySelector(".sw-status").innerText = "页面预加载失败";
    });
    const setCached = (item) => {
      if (!item) return;
      const app = document.querySelector(`.app[data-app-name=${item}]`);
      app && (app.querySelector(".app-title-icon").attributes.src.value = "common/icons/download_done.svg");
    };
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (!e.data) return;
      if (e.data.type == "progress") {
        // const percentage = parseInt(e.data.content * 100) + "%";
        // document.querySelector(".sw-progress").innerText = percentage;
        // document.querySelector(".sw-progress").style.opacity = 0.4 + 0.6 * e.data.content;
        // document.querySelector(".sw-progress-bar-fill").style.width = percentage;
      } else if (e.data.type == "complete") {
        document.getElementById("sw-help-text").style.display = "flex";
        // document.querySelector(".sw-progress-bar-fill").style.width = "100%";
        // document.querySelector(".sw-status").innerHTML = "";
        // window.setTimeout(() => {
        //   document.querySelector(".sw-status").style.display = "none";
        // }, 2000);
        const cached_apps = e.data.content.cached;
        if (typeof(cached_apps) == "string") {
          setCached(cached_apps);
        } else {
          for (const item of cached_apps) {
            setCached(item);
          }
        }

        if (e.data.content.version) {
          document.getElementById("last-update-version").innerText = `(${e.data.content.version})`;
        }
      } else if (e.data.type == "reload") {
        window.location.reload();
      }
    });
  }

  document.getElementById("clear-local-data").addEventListener("click", () => {
    if (navigator.serviceWorker && navigator.serviceWorker.controller)
      window.confirm('要清除全部填充信息与页面缓存吗？') && clearCache();
    else
      window.confirm('要清除全部填充信息吗？') && clearCache();
  })

  if (!(navigator.standalone || window.matchMedia("(display-mode: standalone)").matches)) {
    document.querySelector(".sw-status").innerHTML = `
      <div class="icon-align" onclick="toggleDisplay('#pwa-install-help');">
        <img class="icon" src="common/icons/add_box.svg">
        <span>添加至主屏幕</span>
      </div>`;
  } else {
    document.querySelector(".sw-status").innerHTML = `
      <div class="icon-align" onclick="toggleDisplay('#pwa-usage-help');">
        <img class="icon" src="common/icons/help.svg">
        <span>帮助</span>
      </div>`;
  }
}

function toggleDisplay(selector, flex = false) {
  const element = document.querySelector(selector);
  if (!element) return false;
  if (!element.style.display || element.style.display == "none") {
    element.style.display = flex ? "flex" : "block";
  } else {
    element.style.display = "none";
  }
}

function clearCache() {
  localStorage.clear();
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    document.querySelector(".apps-list").innerHTML = `
      <p style="text-align: center">请稍候...</p>
    `;
    navigator.serviceWorker.controller.postMessage({
      type: "clear",
    });
  } else {
    window.location.reload();
  }
}
